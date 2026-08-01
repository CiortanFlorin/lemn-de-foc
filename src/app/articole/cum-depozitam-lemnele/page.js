export const metadata = {
  title: "Ghid de Depozitare Lemn de Foc | Păstrează Lemnele Uscate și Gata de Folosit",
  description: "Află cele mai bune metode de depozitare a lemnului de foc. Păstrează lemnele uscate și pregătite pentru foc, maximizând eficiența arderii și reducând pierderile.",
  alternates: {
    canonical: "/articole/cum-depozitam-lemnele",
  },
};

export default function Page() {
  return (
    <>
      <div className="mx-auto mt-32 p-5 lg:mt-36 lg:max-w-7xl">
        <section>
          <h1 className="text-center font-rubik-bold text-xl text-fireRed lg:text-3xl">
            Ghid de Depozitare Lemn de Foc
          </h1>
          <p className="mt-5 lg:text-lg">
            Depozitarea corectă a lemnului de foc este esențială pentru a
            asigura o ardere eficientă și pentru a menține calitatea lemnului pe
            termen lung. În acest ghid, vei descoperi cele mai bune practici
            pentru stocarea lemnului de foc, astfel încât să îl păstrezi uscat,
            protejat de intemperii și ușor accesibil.
          </p>

          <div className="flex justify-center my-8 lg:px-8">
            <iframe className="w-full aspect-video rounded-lg shadow-lg "
              src="https://www.youtube.com/embed/xZfoxS8gho0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <section>
          <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
            1. Alege un Loc Potrivit
          </h2>
          <p className="mt-5 lg:text-lg">
            Alege un loc bine ventilat pentru a stoca lemnul de foc. Evită
            zonele joase unde apa se poate acumula și asigură-te că lemnul este
            așezat pe o suprafață ridicată, cum ar fi paleți, pentru a evita
            contactul direct cu solul.
          </p>
        </section>
        <section>
          <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
            2. Protejează Lemnul de Umiditate
          </h2>
          <p className="mt-5 lg:text-lg">
            Păstrează lemnul de foc acoperit pentru a-l proteja de ploaie și
            zăpadă. O copertină sau o prelată impermeabilă pot fi soluții bune,
            dar asigură-te că există suficientă ventilare pentru a preveni
            acumularea umezelii.
          </p>
        </section>
        <section>
          <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
            3. Păstrează Lemnul Uscat
          </h2>
          <p className="mt-5 lg:text-lg">
            Lemnul de foc trebuie să fie uscat pentru a arde eficient.
            Asigură-te că este bine aerisit, așezându-l în stive care permit
            aerului să circule între bucăți. Evită să îl stochezi în spații
            închise fără ventilație.
          </p>
        </section>
        <section>
          <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
            4. Organizarea Stivelor de Lemn
          </h2>
          <p className="mt-5 lg:text-lg">
            Stivuirea corectă a lemnului poate economisi spațiu și poate
            facilita accesul. Aranjează lemnul în stive compacte, dar asigură-te
            că nu sunt prea mari pentru a preveni riscul de prăbușire. Lasă un
            mic spațiu între rânduri pentru circulația aerului.
          </p>
        </section>
        <section>
          <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
            5. Evită Depozitarea în Interior
          </h2>
          <p className="mt-5 lg:text-lg">
            Depozitarea lemnului de foc în interior poate atrage insecte și
            poate introduce umezeală în locuință. Este recomandat să stochezi
            lemnul în exterior sau într-un adăpost special destinat acestuia.
          </p>
        </section>
        <section>
          <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
            6. Rotirea Stocului
          </h2>
          <p className="mt-5 lg:text-lg">
            Folosește mai întâi lemnul cel mai vechi pentru a preveni
            deteriorarea. Organizarea corectă a stocului te va ajuta să accesezi
            mai ușor lemnul uscat și să păstrezi rezervele în stare bună pe
            termen lung.
          </p>
        </section>
      </div>
    </>
  );
}
