// pages/sitemap.xml.js
export const getServerSideProps = async ({ res }) => {
  const baseUrl = "https://www.jorgezapata.es";

  const pages = [
    { loc: `${baseUrl}/`, priority: 1.0 },
    { loc: `${baseUrl}/#aboutme`, priority: 0.8 },
    { loc: `${baseUrl}/#skills`, priority: 0.8 },
    { loc: `${baseUrl}/#products`, priority: 0.7 },
    { loc: `${baseUrl}/#portfolio`, priority: 0.7 },
    { loc: `${baseUrl}/#contact`, priority: 0.9 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
      <url>
        <loc>${page.loc}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>${page.priority}</priority>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default function SiteMap() {
  return null; 
}
