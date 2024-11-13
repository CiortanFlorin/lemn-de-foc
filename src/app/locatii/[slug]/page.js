import Link from "next/link";

export default function Page({ params }) {
  const oras = params.slug;
  return (
    <div className="mx-auto mt-32 p-5 lg:mt-36 lg:max-w-7xl">
      <h1 className="text-center font-rubik-bold text-xl text-fireRed lg:text-3xl">
        Lemne de Foc {oras}
        <br />
        Livrare Rapidă Lemne de Foc la Ușa Ta
      </h1>

      <p className="mt-5 lg:text-lg">
        <strong>Bine ai venit!</strong> Dacă ești în căutarea unui furnizor de{" "}
        <strong>lemn de foc în {oras}</strong>, ai ajuns în locul potrivit.
        Oferim <strong>lemne de foc uscate și gata de utilizare</strong>, ideale
        pentru încălzirea casei, grătare sau focuri de tabără, direct la tine
        acasă.
      </p>

      <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
        De ce să alegi lemnele noastre de foc în {oras}?
      </h2>
      <ul className="lg:text-lg">
        <li>
          <strong>Lemn de foc de calitate superioară</strong> – Oferim lemn de
          fag, plop și salcie, ideale pentru diferite nevoi de încălzire sau
          focuri de exterior.
        </li>
        <li className="mt-2">
          <strong>Gata de utilizare</strong> – Lemnele noastre sunt crăpate și
          uscate, astfel încât le poți folosi imediat fără efort suplimentar.
        </li>
        <li className="mt-2">
          <strong>Căldură constantă și eficientă</strong> – Lemnul de foc pe
          care îl oferim asigură o ardere intensă, perfectă pentru sobe și
          șeminee.
        </li>
      </ul>

      <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
        Livrare Rapidă Lemn de Foc în Galați, Brăila și Tulcea
      </h2>
      <p className="lg:text-lg">
        Ne angajăm să îți livrăm <strong>lemnele de foc</strong> direct la ușă
        în {oras}, a doua zi lucrătoare după confirmarea comenzii. Calculăm
        tariful de transport în funcție de locația ta, pentru a-ți oferi un
        serviciu accesibil și rapid.
      </p>

      <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
        Gama noastră de lemne de foc pentru {oras}
      </h2>
      <ul className="lg:text-lg">
        <li>
          <Link href={"/produse/fag"}>
            <strong>Lemn de Fag</strong>
          </Link>{" "}
          – Ideal pentru o ardere intensă și eficientă, oferind o căldură de
          lungă durată pentru iarna ta.
        </li>

        <li className="mt-2">
          <Link href={"/produse/salcie"}>
            <strong>Lemn de Plop și Salcie</strong>
          </Link>{" "}
          – Perfect pentru focuri rapide, grătare și activități de exterior.
        </li>

        <li className="mt-2">
          <Link href={"/produse/scandura"}>
            <strong>Scânduri de Fag</strong>
          </Link>{" "}
          – Excelente pentru proiecte de construcții și amenajări interioare.
        </li>
      </ul>

      <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
        Comandă Lemne de Foc în {oras}
      </h2>
      <p className="lg:text-lg">
        Pentru a comanda <strong>lemn de foc în {oras}</strong>, sună la
        numerele noastre de contact: <strong>0751 518 501</strong> sau{" "}
        <strong>0751 518 502</strong>. Acceptăm plata cu numerar, card sau
        tichete de energie, pentru confortul tău.
      </p>

      <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
        Întrebări Frecvente
      </h2>
      <h3 className="font-rubik-bold text-lg lg:text-xl">
        Transportul este inclus în preț?
      </h3>
      <p className="lg:text-lg">
        Transportul este calculat separat, în funcție de distanță și este
        disponibil în județele Galați, Brăila și Tulcea.
      </p>

      <h3 className="mt-2 font-rubik-bold text-lg lg:text-xl">
        Cât de repede pot primi lemnele de foc în {oras}?
      </h3>
      <p className="lg:text-lg">
        Comenzile confirmate sunt livrate în următoarea zi lucrătoare,
        asigurându-ne că beneficiezi rapid de <strong>lemnele de foc</strong>{" "}
        necesare.
      </p>

      <p className="mt-5 lg:mb-24 lg:text-lg">
        Pentru mai multe detalii și informații despre lemnul de foc disponibil
        în {oras}, te invităm să ne contactezi. Găsește{" "}
        <strong>lemne de foc</strong> de calitate și asigură-te că iarna aceasta
        te bucuri de confortul căldurii naturale.
      </p>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const oras = params.slug;

  return {
    title: `Lemn de Foc ${oras} - Livrare Rapidă Lemne de Foc în ${oras}`,
    description: `Cauți lemn de foc în ${oras}? Oferim lemne de foc de calitate, livrate rapid în ${oras}. Lemne de foc uscate și gata de utilizare pentru soba sau șemineul tău.`,
  };
}
