import ImageGallery from "@/components/image-gallery";
import Link from "next/link";

export default function ProductPageTemplate({
  images,
  title,
  quantity,
  price,
  description,
}) {
  return (
    <div className="lg:min-h-screen">
      <div className="lg:mt-50 mb-10 mt-56 flex flex-col lg:mx-auto lg:max-w-7xl lg:flex-row lg:content-start lg:space-x-10 lg:pl-10">
        <ImageGallery images={images}></ImageGallery>
        {/* Text Container */}
        <div className="mx-auto mt-4 flex w-5/6 flex-col items-center rounded-2xl bg-zinc-900 p-5 text-center md:w-4/6 lg:mt-32 lg:w-full lg:items-start lg:justify-start lg:bg-inherit lg:text-left">
          {/* Title Container */}
          <div className="space-y-1 lg:space-y-3">
            <h2 className="font-rubik-bold text-2xl text-fireOrange lg:text-5xl">
              {title}
            </h2>
            <h4 className="text-lg lg:text-3xl">Cantitate: {quantity}</h4>
            <h3 className="text-xl lg:text-4xl">{price} RON, TVA inclus</h3>
            <p className="text-lg lg:text-2xl">
              Transportul nu este inclus in pret
            </p>
          </div>
          {/* Button Container */}
          <div className="mt-2 space-y-2 lg:mt-20 lg:space-y-3">
            <Link href="/contact">
              <button className="w-48 rounded-full bg-fireOrange p-2 text-xl hover:scale-95 hover:bg-fireRed lg:w-full lg:p-4 lg:text-3xl">
                Comanda
              </button>
            </Link>
            <p className="max-w-md text-lg lg:text-2xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
