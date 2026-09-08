CREATE TABLE IF NOT EXISTS resource_downloads (
  resource_slug TEXT PRIMARY KEY,
  download_count BIGINT NOT NULL DEFAULT 0 CHECK (download_count >= 0),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS resource_download_events (
  id BIGSERIAL PRIMARY KEY,
  resource_slug TEXT NOT NULL,
  downloaded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS resource_download_events_slug_idx
  ON resource_download_events (resource_slug, downloaded_at DESC);
