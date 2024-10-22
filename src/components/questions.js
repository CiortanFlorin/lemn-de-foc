import QuestionTab from "./question-tab";

export default function Questions() {
  return (
    <section id="faq-accordion">
      {/* Questions Header */}
      <div className="text-center">
        <h1 className="mt-20 inline-block max-w-lg font-rubik-bold text-3xl tracking-wide md:text-4xl">
        Întrebări și răspunsuri frecvente
        </h1>
      </div>
      <div>
        <container className="mx-auto mb-32 px-6">
          <div className="m-8 mx-auto max-w-2xl overflow-hidden lg:max-w-4xl">
            <QuestionTab
              question={"Unde livrăm?"}
              answer={"Oferim livrare în județele: Galați, Brăila și Tulcea."}
            ></QuestionTab>
            <QuestionTab
              question={"Cum comand?"}
              answer={
                "Comenzile pot fi plasate doar la telefon, la 0751518501 sau 0751518502."
              }
            ></QuestionTab>
            <QuestionTab
              question={"Transportul este inclus în preț?"}
              answer={
                "Prețul transportului nu este inclus în prețul afișat și variază în funcție de distanță."
              }
            ></QuestionTab>
            <QuestionTab
              question={"Cât de rapid livrăm?"}
              answer={
                "Comenzile ajung în următoarea zi lucrătoare de după ziua în care a fost confirmată plasarea comenzii."
              }
            ></QuestionTab>
            <QuestionTab
              question={"Cum puteți achita comanda?"}
              answer={"Acceptăm plata cu cash, card sau tichete de energie"}
            ></QuestionTab>
          </div>
        </container>
      </div>
    </section>
  );
}
