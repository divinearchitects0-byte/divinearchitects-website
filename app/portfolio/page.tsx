import Image from "next/image";

const projects = [
  {
    title: "Luxury Classical Residence",
    category: "Residential",
    image: "/images/architecture/villa1.jpg",
  },
  {
    title: "Modern Luxury Residence",
    category: "Residential",
    image: "/images/architecture/villa2.jpg",
  },
  {
    title: "Modern Row House",
    category: "Residential",
    image: "/images/architecture/rowhouse1.jpg",
  },
  {
    title: "Luxury Bedroom",
    category: "Interior Design",
    image: "/images/interiors/bedroom1.jpg",
  },
  {
    title: "Modern Kitchen",
    category: "Interior Design",
    image: "/images/interiors/kitchen1.jpg",
  },
  {
    title: "Luxury Dining",
    category: "Interior Design",
    image: "/images/interiors/dining1.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-white min-h-screen">

      <section className="pt-40 pb-20">

        <div className="max-w-7xl mx-auto px-8">

          <p className="uppercase tracking-[8px] text-neutral-500 mb-4">
            Portfolio
          </p>

          <h1 className="text-7xl font-bold">
            Selected Projects
          </h1>

        </div>

      </section>

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project) => (

              <div key={project.title}>

                <div className="relative h-[450px] rounded-3xl overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition duration-700"
                  />

                </div>

                <p className="mt-5 text-neutral-500 uppercase tracking-[4px]">
                  {project.category}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {project.title}
                </h2>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}