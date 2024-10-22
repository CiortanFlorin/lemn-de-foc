import Contact from "@/components/contact";

export default function Page() {
  return (
    <>
      // Contact Instructions
      <div className="mt-48 px-4 text-center md:mt-52">
        <h1 className="mb-4 font-rubik-bold text-2xl md:text-3xl">
          Cum poți comanda
        </h1>

        <div className="mx-auto mt-6 max-w-xl rounded-3xl bg-zinc-900 p-6 text-left text-lg leading-relaxed text-zinc-100 shadow-lg shadow-black md:p-8 md:text-xl">
          <p>
            Plasarea unei comenzi se poate face exclusiv prin apel la unul
            dintre numerele de telefon:
            <a href="tel:+40751518501" className="text-fireRed">
              {" "}
              0751518501
            </a>{" "}
            sau
            <a href="tel:+40751518502" className="text-fireRed">
              {" "}
              0751518502
            </a>
            .
          </p>
          <p className="mt-4">
            Dumneavoastră ne spuneți produsul, cantitatea și locația la care să
            livrăm, iar noi vă vom comunica prețul total și data la care vor fi
            livrate.
          </p>
        </div>
      </div>
      <Contact />
    </>
  );
}
