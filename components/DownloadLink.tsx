type DownloadLinkProps = {
  slug: string;
  name: string;
  category: string;
  available: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function DownloadLink({
  slug,
  name,
  category,
  available,
  className = "",
  children,
}: DownloadLinkProps) {
  const trackDownload = () => {
    if (!available || typeof window === "undefined") return;

    const gtag = (window as typeof window & {
      gtag?: (...args: unknown[]) => void;
    }).gtag;

    gtag?.("event", "resource_download", {
      resource_slug: slug,
      resource_name: name,
      resource_category: category,
      transport_type: "beacon",
    });
  };

  if (!available) {
    return (
      <span className={`${className} button-disabled`} aria-disabled="true">
        Próximamente
      </span>
    );
  }

  return (
    <a href={`/api/download/${slug}`} className={className} onClick={trackDownload}>
      {children}
    </a>
  );
}
