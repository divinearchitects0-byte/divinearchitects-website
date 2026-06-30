import Image from "next/image";

const services = [
  {
    title: "Residential Architecture",
    description:
      "Custom-designed villas, duplexes, row houses and luxury residences planned with functionality, aesthetics and Vastu principles where required.",
    image: "/images/architecture/villa1.jpg",
  },
  {
    title: "Interior Design",
    description:
      "Elegant interior solutions for living rooms, bedrooms, kitchens, dining spaces and complete residential interiors.",
    image: "/images/interiors/bedroom1.jpg",
  },
  {
    title: "Commercial Architecture",
    description:
      "Architectural design for offices, cafés, restaurants, retail stores, clinics and commercial developments.",
    image: "/images/architecture/villa2.jpg",
  },
  {
    title: "3D Visualization",
    description:
      "Photorealistic renders and cinematic walkthroughs that help you visualize your project before construction begins.",
    image: "/images/architecture/rowhouse1.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="pt-36 md:pt-44 pb-20">

        <div className="max-w-7xl mx-auto px-5 md:px-8">

          <p className="uppercase tracking-[8px] text-neutral-500 text-xs mb-4">
            Services
          </p>

          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Complete
            <br />
            Design Solutions.
          </h1>

          <p className="mt-8 text-lg text-neutral-600 leading-8 max-w-3xl">
            From concept planning to construction drawings and premium
            interiors, Divine Architects delivers complete design
            solutions tailored to your vision.
          </p>

        </div>

      </section>

      {/* Services */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-20">

          {services.map((service, index) => (

            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              <div className="relative aspect-video rounded-[30px] overflow-hidden shadow-xl">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />

              </div>

              <div>

                <p className="uppercase tracking-[6px] text-neutral-500 text-xs mb-3">

                  Divine Architects

                </p>

                <h2 className="text-3xl md:text-5xl font-bold leading-tight">

                  {service.title}

                </h2>

                <p className="mt-6 text-neutral-600 text-lg leading-8">

                  {service.description}

                </p>

                <a
                  href="/contact"
                  className="inline-flex items-center mt-8 bg-black text-white px-8 py-4 rounded-full hover:bg-neutral-800 transition"
                >
                  Start Your Project →
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-neutral-950 text-white py-20">

        <div className="max-w-5xl mx-auto px-5 text-center">

          <h2 className="text-4xl md:text-6xl font-bold">

            Ready to Build Something Exceptional?

          </h2>

          <p className="text-neutral-400 mt-8 text-lg leading-8">

            Let's discuss your ideas and transform them into thoughtfully
            designed spaces that inspire for years to come.

          </p>

          <a
            href="/contact"
            className="inline-flex items-center mt-10 bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-neutral-200 transition"
          >
            Book a Consultation →
          </a>

        </div>

      </section>

    </main>
  );
}