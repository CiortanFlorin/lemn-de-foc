import Link from "next/link";

export const metadata = {
  title: "Ghid Complet de Cumpărare Lemn de Foc | Cum Să Alegi Lemnele de Foc Potrivite",
  description: "Descoperă cum să alegi cele mai bune lemne de foc pentru încălzire. Ghidul nostru complet te ajută să faci o alegere informată pentru a avea o iarnă călduroasă și eficientă."
};

export default function Page() {
  return (
    <>
      <div className="mx-auto mt-32 p-5 lg:mt-36 lg:max-w-7xl">
        <section>
          <h1 className="text-center font-rubik-bold text-xl text-fireRed lg:text-3xl">
            Ghid de Cumpărare Lemn de Foc
          </h1>
          <p className="mt-5 lg:text-lg">
            Cumpărarea lemnului de foc poate părea o sarcină simplă, dar pentru
            a te asigura că faci o alegere informată și benefică, este important
            să iei în considerare câțiva factori esențiali. Acest ghid te va
            ajuta să înțelegi ce trebuie să cauți atunci când cumperi lemn de
            foc, astfel încât să te bucuri de o încălzire eficientă și
            economică.
          </p>
        </section>
        <section>
          <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
            1. Tipuri de Lemn de Foc
          </h2>
          <ul className="lg:text-lg">
            <li>
              <Link href="/produse/fag" className="hover:text-fireRed">
                <strong>Lemn de Fag</strong>
              </Link>
              : Este dens și arde lent, oferind o căldură consistentă și de
              durată. Este ideal pentru sobele de lemn și șemineuri.
            </li>
            <li className="mt-2">
              <Link href="/produse/salcie" className="hover:text-fireRed">
                <strong>Lemn de Plop și Salcie</strong>
              </Link>
              : Aceste tipuri de lemn sunt mai ușoare și ard mai repede, fiind
              potrivite pentru focuri rapide sau pentru completarea altor tipuri
              de lemn.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
            2. Umiditatea Lemnului
          </h2>
          <p className="lg:text-lg">
            Unul dintre cei mai importanți factori de luat în considerare este
            umiditatea lemnului. Lemnul umed arde mai greu, produce mai mult fum
            și poate duce la acumularea de gudron în coșul de fum. Este
            recomandat să folosești lemn cu un conținut de umiditate sub 20%.
            Poți verifica acest lucru cu un umidometru pentru lemn sau
            achiziționând lemn uscat.
          </p>
        </section>
        <section>
          <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
            3. Dimensiunea Bucăților de Lemn
          </h2>
          <p className="lg:text-lg">
            Asigură-te că bucățile de lemn sunt de dimensiunea potrivită pentru
            soba sau șemineul tău. Lemnul prea mare poate fi dificil de manevrat
            și de aprins, în timp ce lemnul prea mic poate arde prea repede. În
            general, bucățile de 25-30 cm lungime sunt ideale pentru majoritatea
            sobelor.
          </p>
        </section>
        <section>
          <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
            4. Proveniența Lemnului
          </h2>
          <p className="lg:text-lg">
            Cumpără lemn de la furnizori de încredere, care îți pot garanta că
            lemnul provine din surse sustenabile. În România, este important să
            sprijini practicile ecologice și să eviți lemnul tăiat ilegal.
          </p>
        </section>
        <section>
          <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
            5. Livrarea Lemnului
          </h2>
          <p className="lg:text-lg">
            Verifică opțiunile de livrare oferite de furnizor. Lemnul de foc
            poate fi voluminos și greu de transportat, așa că este convenabil să
            alegi un furnizor care oferă livrare la domiciliu.
          </p>
        </section>
        <section>
          <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
            6. Prețul și Cantitatea
          </h2>
          <p className="lg:text-lg">
            Compară prețurile de la mai mulți furnizori și asigură-te că
            înțelegi unitatea de măsură folosită (metri steri, metri cubi etc.).
            Uneori, un preț mai mic poate însemna o cantitate mai mică de lemn
            sau o calitate inferioară.
          </p>
        </section>
        <section>
          <h2 className="mt-5 font-rubik-bold text-lg text-fireRed lg:text-2xl">
            Concluzie
          </h2>
          <p className="lg:text-lg">
            Cumpărarea lemnului de foc potrivit poate face diferența între o
            iarnă confortabilă și una plină de neplăceri. Informează-te bine,
            alege lemnul de foc de calitate și bucură-te de căldura plăcută a
            unui foc sănătos. La <em>Lemn și Flăcări</em>, îți oferim lemn de
            foc de cea mai bună calitate, livrat direct la tine acasă, pentru o
            experiență de încălzire fără griji.
          </p>
        </section>
      </div>
    </>
  );
}
