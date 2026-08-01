import QuestionTab from "./question-tab";

const faqs = [
  {
    question: "Unde livrăm?",
    answer: "Oferim livrare în județele: Galați, Brăila și Tulcea.",
  },
  {
    question: "Cum comand?",
    answer: "Comenzile pot fi plasate doar la telefon, la 0751518502.",
  },
  {
    question: "Transportul este inclus în preț?",
    answer:
      "Prețul transportului nu este inclus în prețul afișat și variază în funcție de distanță.",
  },
  {
    question: "Cât de rapid livrăm?",
    answer:
      "Comenzile ajung în următoarea zi lucrătoare de după ziua în care a fost confirmată plasarea comenzii.",
  },
  {
    question: "Cum puteți achita comanda?",
    answer: "Acceptăm plata cu cash, card sau tichete de energie",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function Questions() {
  return (
    <section id="faq-accordion">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Questions Header */}
      <div className="text-center">
        <h2 className="mt-20 inline-block max-w-lg font-rubik-bold text-3xl tracking-wide md:text-4xl">
        Întrebări și răspunsuri frecvente
        </h2>
      </div>
      <div>
        <div className="mx-auto mb-16 px-6">
          <div className="m-8 mx-auto max-w-2xl overflow-hidden lg:max-w-4xl">
            {faqs.map(({ question, answer }) => (
              <QuestionTab key={question} question={question} answer={answer}></QuestionTab>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
