import { Helmet } from "react-helmet-async";

const SITE = "https://rorysrooftop.com";

type Props = {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export default function SEO({ title, description, path, image, jsonLd }: Props) {
  const url = `${SITE}${path}`;
  const imageUrl = image ? (image.startsWith("http") ? image : `${SITE}${image}`) : undefined;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
