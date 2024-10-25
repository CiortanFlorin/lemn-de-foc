import ProductPageTemplate from "@/templates/productPageTemplate";
import data from "@/data/productsData";

export default function Page({ params }) {
  const product = data[params.slug];
  return (
    <ProductPageTemplate
      images={product.images}
      title={product.title}
      quantity={product.quantity}
      price={product.price}
      description={product.description}
    ></ProductPageTemplate>
  );
}

export async function generateMetadata({ params }) {
  const product = data[params.slug];

  return {
    title: product.metaTitle,
    description: product.metaDescription,
  };
}
