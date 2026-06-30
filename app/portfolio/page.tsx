import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Luxury Classical Residence",
    category: "Residential",
    image: "/images/architecture/villa1.jpg",
    description:
      "A timeless luxury residence blending classical elegance with modern functionality.",
  },
  {
    title: "Modern Luxury Residence",
    category: "Residential",
    image: "/images/architecture/villa2.jpg",
    description:
      "Contemporary architecture with spacious planning and premium materials.",
  },
  {
    title: "Modern Row House",
    category: "Residential",
    image: "/images/architecture/rowhouse1.jpg",
    description:
      "Efficient planning for compact plots without compromising luxury.",
  },
  {
    title: "Luxury Bedroom",
    category: "Interior Design",
    image: "/images/interiors/bedroom1.jpg",
    description:
      "Elegant bedroom interiors focused on comfort and sophistication.",
  },
  {
    title: "Modern Kitchen",
    category: "Interior Design",
    image: "/images/interiors/kitchen1.jpg",
    description:
      "Functional modular kitchen with premium finishes and smart storage.",
  },
  {
    title: "Luxury Dining",
    category: "Interior Design",
    image: "/images/interiors/dining1.jpg",
    description:
      "Dining spaces designed for warmth, elegance and everyday living.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="pt-36 md:pt-44 pb-16">

        <div className="max-w-7xl mx-auto px-5 md:px-8">

          <p className="uppercase tracking-[8px] text-neutral-500 text-xs mb-4">
            Portfolio
          </p>

          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Selected Projects
          </h1>

          <p className="text-neutral-600 text-lg mt-8 max-w-3xl leading-8">
            A curated collection of residential architecture, luxury interiors
            and thoughtfully planned spaces designed by Divine Architects.
          </p>

        </div>

      </section>

      {/* Categories */}

      <section className="pb-10">

        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-wrap gap-4">

          <span className="px-6 py-3 rounded-full bg-black text-white">
            All
          </span>

          <span className="px-6 py-3 rounded-full border">
            Residential
          </span>

          <span className="px-6 py-3 rounded-full border">
            Interior Design
          </span>

          <span className="px-6 py-3 rounded-full border">
            Commercial
          </span>

        </div>

      </section>

      {/* Portfolio Grid */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-5 md:px-8">

          <div className="grid lg:grid-cols-2 gap-10">

            {projects.map((project) => (

              <div
                key={project.title}
                className="bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >

                <div className="relative aspect-video overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />

                </div>

                <div className="p-8">

                  <p className="uppercase tracking-[5px] text-neutral-500 text-xs mb-3">
                    {project.category}
                  </p>

                  <h2 className="text-3xl font-bold">
                    {project.title}
                  </h2>

                  <p className="text-neutral-600 leading-8 mt-5">
                    {project.description}
                  </p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-8 bg-black text-white px-7 py-4 rounded-full hover:bg-neutral-800 transition"
                  >
                    Discuss a Similar Project →
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-neutral-950 text-white py-20">

        <div className="max-w-5xl mx-auto px-5 text-center">

          <h2 className="text-4xl md:text-6xl font-bold">
            Ready to Build Your Dream Project?
          </h2>

          <p className="text-neutral-400 text-lg mt-8 leading-8">
            Whether you're planning a residence, commercial space or premium
            interior, we'd love to bring your vision to life.
          </p>

          <a
            href="https://wa.me/918840828349"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-neutral-200 transition"
          >
            Start Your Project
          </a>

        </div>

      </section>

    </main>
  );
}