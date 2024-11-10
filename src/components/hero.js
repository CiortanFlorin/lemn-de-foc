import Link from "next/link";

export default function Hero() {
  return (
    // Image Container
    <section
      id="hero"
      className="top-right mt-32 bg-fireplace-portrait bg-cover bg-center bg-no-repeat lg:mt-36 md:bg-fireplace-landscape"
    >
      {/* Gradient Container */}
      <div className="content-center bg-white/10 from-black backdrop-brightness-[0.7] md:min-h-[700px] md:bg-gradient-to-r md:backdrop-filter-none">
        {/* Card container */}
        <div className="mx-auto flex max-w-screen-xl items-center justify-center px-10 md:justify-between">
          {/* Text Container */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="2xl:text-7xl 2xl:max-w-xl mt-5 max-w-80 font-rubik-bold text-2xl md:text-5xl">
              Lemn de Foc Premium pentru Confortul Tau
            </h1>
            <h2 className="2xl:max-w-xl mt-24 max-w-xl text-lg md:max-w-96">
              Soluția ideală pentru iarnă. Oferim lemn de foc de calitate,
              livrat rapid, gata de utilizare.
            </h2>
            <h3 className="font-rubik-bold text-lg">
              Prețuri incepand cu <span className="text-2xl">350 RON</span>
            </h3>
            <Link href="/contact">
              <button className="my-5 w-48 rounded-full bg-fireOrange p-2 text-lg hover:scale-95 hover:bg-fireRed">
                Comandă Acum
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
