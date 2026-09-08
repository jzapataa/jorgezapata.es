import Head from "next/head";

type SiteHeadProps = {
  title?: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
};

const SITE_URL = "https://jorgezapata.es";
const DEFAULT_TITLE = "Jorge Zapata | Software, IA, automatización y tecnología";
const DEFAULT_DESCRIPTION =
  "Hub tecnológico de Jorge Zapata: software, inteligencia artificial, automatización, proyectos y recursos gratuitos.";

export default function SiteHead({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = "/",
  image = "/avatar.webp",
}: SiteHeadProps) {
  const canonical = new URL(canonicalPath, SITE_URL).toString();
  const socialImage = new URL(image, SITE_URL).toString();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Jorge Zapata" />
      <meta name="theme-color" content="#090A0D" />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content="Jorge Zapata" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
    </Head>
  );
}
