import Hero from "@/components/hero";
import Location from "@/components/location";
import ProductList from "@/components/product-list";
import Questions from "@/components/questions";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <ProductList></ProductList>
      <Questions></Questions>
      <Location></Location>
    </>
  );
}
