import Image from "next/image";

const services = [
  {
    title: "Architecture",
    description:
      "Residential, commercial and mixed-use architecture designed around functionality, aesthetics and timeless planning.",
    image: "/images/architecture/villa1.jpg",
  },
  {
    title: "Interior Design",
    description:
      "Elegant interiors crafted to enhance everyday living, working and hospitality experiences.",
    image: "/images/interiors/interior1.jpg",
  },
  {
    title: "Commercial Spaces",
    description:
      "Design for cafés, restaurants, offices, retail stores and fitness centres.",
    image: "/images/architecture/villa2.jpg",
  },
  {
    title: "3D Visualization",
    description:
      "Photorealistic renders and walkthroughs before construction begins.",
    image: "/images/projects/project1.jpg",
  },
  {
    title: "Construction Drawings",
    description:
      "Detailed working drawings prepared for smooth project execution.",
    image: "/images/projects/project2.jpg",
  },
  {
    title: "Design Consultation",
    description:
      "Professional guidance from concept planning to project completion.",
    image: "/images/projects/project3.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">

      {/* HERO */}

      <section className="pt-40 pb-24">

        <div className="max-w-7xl mx-auto px-8">

          <p className="uppercase tracking-[8px] text-neutral-500 mb-4">
            Services
          </p>

          <h1 className="text-7xl font-bold leading-tight">

            Complete
            <br />

            Design
            <br />

            Solutions.

          </h1>

          <p className="mt-10 text-lg leading-9 text-neutral-600 max-w-3xl">

            We create thoughtful architectural and interior solutions
            tailored to every project—from residences and commercial
            buildings to hospitality, retail and workplace environments.

          </p>

        </div>

      </section>

      {/* SERVICES */}

      <section className="pb-32">

        <div className="max-w-7xl mx-auto px-8 space-y-24">

          {services.map((service, index) => (

            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              <div className="relative h-[550px] rounded-[32px] overflow-hidden">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />

              </div>

              <div>

                <h2 className="text-5xl font-bold">

                  {service.title}

                </h2>

                <p className="mt-8 text-lg leading-9 text-neutral-600">

                  {service.description}

                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}