import { neon } from "@neondatabase/serverless";

export type DownloadCounts = Record<string, number>;

const getSql = () => {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return null;
  return neon(databaseUrl);
};

export async function getDownloadCounts(): Promise<DownloadCounts> {
  const sql = getSql();
  if (!sql) return {};

  const rows = await sql`
    SELECT resource_slug, download_count
    FROM resource_downloads
  `;

  return Object.fromEntries(
    rows.map((row) => [String(row.resource_slug), Number(row.download_count)])
  );
}

export async function getDownloadCount(slug: string): Promise<number> {
  const sql = getSql();
  if (!sql) return 0;

  const rows = await sql`
    SELECT download_count
    FROM resource_downloads
    WHERE resource_slug = ${slug}
    LIMIT 1
  `;

  return rows.length ? Number(rows[0].download_count) : 0;
}

export async function incrementResourceDownload(slug: string): Promise<number> {
  const sql = getSql();
  if (!sql) {
    throw new Error("DATABASE_URL is not configured");
  }

  const rows = await sql`
    WITH updated AS (
      INSERT INTO resource_downloads (resource_slug, download_count, updated_at)
      VALUES (${slug}, 1, NOW())
      ON CONFLICT (resource_slug)
      DO UPDATE SET
        download_count = resource_downloads.download_count + 1,
        updated_at = NOW()
      RETURNING download_count
    ), event AS (
      INSERT INTO resource_download_events (resource_slug)
      VALUES (${slug})
      RETURNING id
    )
    SELECT updated.download_count
    FROM updated
    CROSS JOIN event
  `;

  return Number(rows[0].download_count);
}
