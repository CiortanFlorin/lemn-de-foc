import Link from "next/link";

export const metadata = {
  title: "Cum să Calculezi Cantitatea de Lemn de Foc pentru Iarnă | Economisește Lemnele de Foc",
  description: "Învață cum să estimezi corect cantitatea de lemn de foc necesară pentru o iarnă întreagă. Evită lipsurile sau surplusurile și planifică eficient pentru un sezon rece confortabil.",
  alternates: {
    canonical: "/articole/cat-lemn-trebuie-sa-cumpar",
  },
};

export default function Page() {
  return (
    <div className="mx-auto mt-32 p-5 lg:mt-36 lg:max-w-7xl">
      <section>
        <h1 className="text-center font-rubik-bold text-xl text-fireRed lg:text-3xl">
          Cum să Calculezi Cantitatea de Lemn de Foc Necesară pentru Iarnă
        </h1>
        <p className="mt-5 lg:text-lg">
          Calcularea cantității de lemn de foc necesară pentru iarnă depinde de
          mai mulți factori, inclusiv:
        </p>
        <ul>
          <li className="mt-5 lg:text-lg">
            <strong>Dimensiunea locuinței</strong>: Mai mult spațiu necesită mai
            mult lemn pentru încălzire.
          </li>
          <li className="mt-5 lg:mt-2 lg:text-lg">
            <strong>Tipul de lemn</strong>: Lemnul de fag oferă o ardere mai
            lungă și mai eficientă decât lemnul de plop.
          </li>
          <li className="mt-5 lg:mt-2 lg:text-lg">
            <strong>Durata sezonului rece</strong>: O iarnă mai lungă va
            necesita mai mult lemn.
          </li>
          <li className="mt-5 lg:mt-2 lg:text-lg">
            <strong>Eficiența sistemului de încălzire</strong>: O sobă sau un
            șemineu eficient va consuma mai puțin lemn pentru a încălzi aceleași
            spații.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
          Formula generală pentru calcul
        </h2>
        <p className="mt-5 lg:text-lg">
          Pentru a estima cantitatea de lemn de foc necesară, poți utiliza o
          formulă generală bazată pe suprafața locuinței și tipul de lemn:
        </p>
        <p className="mt-5 lg:text-lg">
          <strong>
            Cantitatea de lemn (m³) = Suprafața locuinței (m²) × 0.1 – 0.2 m³ de
            lemn pe lună
          </strong>
        </p>
        <p className="mt-5 lg:text-lg">
          Aceasta este o estimare de bază. Dacă locuința are un sistem de
          încălzire mai eficient, poți reduce această valoare.
        </p>
        <h3 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-xl">
          Explicație detaliată:
        </h3>
        <p className="mt-5 lg:text-lg">
          Formula presupune că pentru fiecare metru pătrat din casa ta vei
          consuma între 0.1 și 0.2 metri cubi de lemn pe lună. Această valoare
          variază în funcție de factori precum:
        </p>
        <ul>
          <li className="mt-5 lg:text-lg">
            <strong>Izolarea locuinței</strong>: O locuință bine izolată va
            necesita mai puțin lemn decât una mai slab izolată.
          </li>
          <li className="mt-5 lg:mt-2 lg:text-lg">
            <strong>Eficiența sistemului de încălzire</strong>: Dacă folosești o
            sobă eficientă, consumul de lemn va fi mai mic.
          </li>
          <li className="mt-5 lg:mt-2 lg:text-lg">
            <strong>Temperatura exterioară</strong>: Zilele mai reci vor
            necesita mai mult lemn pentru a menține o temperatură confortabilă
            în casă.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
          Exemplu de calcul
        </h2>
        <p className="mt-5 lg:text-lg">
          Să presupunem că locuința ta are 100 m² și iarna durează aproximativ 5
          luni. Folosind formula de mai sus:
        </p>
        <p className="mt-5 lg:text-lg">
          <strong>
            100 m² × 0.15 m³ pe lună = 15 m³ de lemn pentru iarnă.
          </strong>
        </p>
        <p className="mt-5 lg:text-lg">
          Așadar, pentru această locuință, ar fi necesar aproximativ 15 m³ de
          lemn pentru întreaga iarnă.
        </p>
      </section>

      <section>
        <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
          Ce tip de lemn să alegi
        </h2>
        <p className="mt-5 lg:text-lg">
          Alegerea tipului de lemn afectează și cantitatea de lemn de foc pe
          care trebuie să o achiziționezi. De exemplu:
        </p>
        <ul>
          <li className="mt-5 lg:text-lg">
            <Link href="/produse/fag" className="hover:text-fireRed">
              <strong>Lemn de fag</strong>
            </Link>
            : Ideal pentru ardere eficientă și pe termen lung. Pentru o
            încălzire constantă, vei avea nevoie de mai puțin lemn.
          </li>
          <li className="mt-5 lg:mt-2 lg:text-lg">
            <Link href="/produse/salcie" className="hover:text-fireRed">
              <strong>Lemn de plop</strong>
            </Link>
            : Arde rapid și este mai ușor de procurat, dar necesită mai mult
            lemn pentru a menține aceeași temperatură.
          </li>
          <li className="mt-5 lg:mt-2 lg:text-lg">
            <strong>Lemn de stejar</strong>: Are un randament caloric foarte
            bun, dar poate fi mai greu de manevrat și mai costisitor.
          </li>
        </ul>
      </section>
    </div>
  );
}
