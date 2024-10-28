export default function Location() {
  return (
    <div className="mb-10 bg-wave bg-cover bg-bottom bg-no-repeat">
      {/* Location header */}

      <div className="text-center">
        <h1 className="mt-10 inline-block max-w-lg font-rubik-bold text-3xl tracking-wide md:text-4xl">
          Locația noastră
        </h1>
      </div>
      <section id="location">
        <div className="mt-10 flex justify-center">
          <iframe
            className="aspect-square w-3/4 max-w-screen-lg md:aspect-video xl:w-1/2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4799.481879455958!2d27.974235877422522!3d45.4539542341205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b6dd39bccc02a9%3A0xb5316776aec9def0!2sLemn%20%C8%99i%20Flacari!5e1!3m2!1sen!2sro!4v1730098949913!5m2!1sen!2sro"
            style={{ border: 0 }}
            title="Locatie Lemn si Flacari"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
