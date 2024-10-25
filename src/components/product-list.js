import Link from "next/link";
import Image from "next/image";
export default function ProductList() {
  return (
    <section id="ProductList">
      {/* Products Header */}
      <div className="text-center" >
        <h1 className="mt-10 font-rubik-bold text-3xl tracking-wide md:text-4xl">
        Produsele noastre te așteaptă.
        </h1>
        <p className="mt-3 inline-block max-w-sm text-lg md:text-xl">
          Comandă acum și asigură-ți căldura pentru sezonul rece!
        </p>
      </div>
      <section  className="mt-10">
        {/* Card Container */}
        <div className="mx-auto text-center">
          {/* Product-List Container */}
          <div className="mt-5 flex flex-col space-y-12 lg:flex-row lg:items-end lg:justify-center lg:space-y-0">
            {/* Product 1 */}
            <div className="flex shrink-0 flex-col items-center p-5 lg:max-w-sm xl:max-w-lg">
              <Image src="/salcie.webp" alt="Lemn de salcie pentru foc" className="z-10 -mb-10 w-5/12" width={200} height={200}/>
              {/* Text Container */}
              <div className="flex flex-col items-center rounded-3xl bg-zinc-900 shadow-xl shadow-black">
                <h3 className="mt-10 text-2xl">Pachet salcie de foc</h3>
                <p className="mt-8 w-3/4 text-lg">
                  Lemn de salcie ușor de aprins, ideal pentru focuri care
                  necesită o flacără constantă și căldură rapidă.
                </p>
                <Link href="produse/salcie">
                  <button className="mb-15 my-5 w-52 rounded-full bg-fireOrange p-3 text-xl hover:scale-95 hover:bg-fireRed">
                    Detalii
                  </button>
                </Link>
              </div>
            </div>
            {/* Product 2 */}
            <div className="flex shrink flex-col items-center p-5 lg:max-w-sm xl:max-w-lg">
              <Image src="/fag.webp" alt="Lemn de fag pentru foc" className="z-10 -mb-10 w-5/12" width={200} height={200}/>
              {/* Text Container */}
              <div className="flex flex-col items-center rounded-3xl bg-zinc-900 shadow-xl shadow-black">
                <h3 className="mt-10 text-2xl">Pachet fag de foc</h3>
                <p className="mt-8 w-3/4 text-lg">
                  Lemn de fag de calitate superioară, ideal pentru o ardere
                  îndelungată și căldură intensă.
                </p>
                <Link href="produse/fag">
                  <button className="mb-15 my-5 w-52 rounded-full bg-fireOrange p-3 text-xl hover:scale-95 hover:bg-fireRed">
                    Detalii
                  </button>
                </Link>
              </div>
            </div>
            {/* Product 3 */}
            <div className="flex shrink-0 flex-col items-center p-5 lg:max-w-sm xl:max-w-lg">
              <Image src="/scanduri.webp" alt="Scanduri de fag" className="z-10 -mb-10 w-5/12" width={200} height={200}/>
              {/* Text Container */}
              <div className="flex flex-col items-center rounded-3xl bg-zinc-900 shadow-xl shadow-black">
                <h3 className="mt-10 text-2xl">Pachet scânduri de fag</h3>
                <p className="mt-8 w-3/4 text-lg">
                  Lemn dur și dens de fag, asigură o ardere stabilă și căldură
                  constantă pe termen lung.
                </p>
                <Link href="produse/scandura">
                  <button className="mb-15 my-5 w-52 rounded-full bg-fireOrange p-3 text-xl hover:scale-95 hover:bg-fireRed">
                    Detalii
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
