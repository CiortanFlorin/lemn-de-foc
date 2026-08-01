import { notFound } from "next/navigation";
import ProductPageTemplate from "@/templates/productPageTemplate";
import data from "@/data/productsData";

const siteUrl = "https://www.lemnsiflacari.ro";

export function generateStaticParams() {
  return Object.keys(data).map((slug) => ({ slug }));
}

export default function Page({ params }) {
  const product = data[params.slug];
  if (!product) {
    notFound();
  }

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.images.map((image) => `${siteUrl}${image}`),
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "RON",
      availability: "https://schema.org/InStock",
      areaServed: ["Galați", "Brăila", "Tulcea"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductPageTemplate
        images={product.images}
        title={product.title}
        quantity={product.quantity}
        price={product.price}
        form={product.form}
        advantageTitle={product.advantageTitle}
        advantageDescription={product.advantageDescription}
        description={product.description}
      ></ProductPageTemplate>
    </>
  );
}

export async function generateMetadata({ params }) {
  const product = data[params.slug];
  if (!product) {
    return {};
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `/produse/${params.slug}`,
    },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      images: product.images,
    },
  };
}
