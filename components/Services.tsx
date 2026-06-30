"use client";

const services = [
  {
    no: "01",
    title: "Architecture",
    desc: "Thoughtfully designed residential, commercial and mixed-use projects that balance functionality, aesthetics and context.",
  },
  {
    no: "02",
    title: "Interior Design",
    desc: "Elegant interior environments crafted to enhance everyday living, workspaces and customer experiences.",
  },
  {
    no: "03",
    title: "Commercial Spaces",
    desc: "Design for cafés, restaurants, offices, retail stores, fitness centres and hospitality environments.",
  },
  {
    no: "04",
    title: "3D Visualization",
    desc: "Photorealistic renders and walkthroughs that help you experience your project before construction.",
  },
  {
    no: "05",
    title: "Construction Drawings",
    desc: "Detailed working drawings prepared for smooth execution and coordination during construction.",
  },
  {
    no: "06",
    title: "Consultation",
    desc: "Expert architectural guidance from concept planning to final design decisions.",
  },
];

export default function Services() {
  return (
    <section className="bg-black text-white py-36">

      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-24">

          <p className="uppercase tracking-[8px] text-neutral-400 mb-4">
            Services
          </p>

          <h2 className="text-6xl font-bold max-w-4xl leading-tight">
            Design Services
            <br />
            Built Around Your Vision.
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (

            <div
              key={service.no}
              className="group border border-neutral-800 rounded-[32px] p-10 hover:bg-white hover:text-black transition-all duration-500"
            >

              <div className="flex justify-between items-center">

                <span className="text-6xl font-black opacity-20 group-hover:opacity-100">

                  {service.no}

                </span>

                <span className="text-4xl transition group-hover:translate-x-2">

                  →

                </span>

              </div>

              <h3 className="text-3xl font-bold mt-10">

                {service.title}

              </h3>

              <p className="leading-9 mt-8 text-neutral-400 group-hover:text-neutral-700 transition">

                {service.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}