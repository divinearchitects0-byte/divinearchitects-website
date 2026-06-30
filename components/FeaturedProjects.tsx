"use client";

import Image from "next/image";

const projects = [
  {
    title: "Luxury Classical Residence",
    category: "Residential Architecture",
    image: "/images/architecture/villa1.jpg",
  },
  {
    title: "Modern Residence",
    category: "Architecture",
    image: "/images/architecture/villa2.jpg",
  },
  {
    title: "Contemporary Row House",
    category: "Residential Design",
    image: "/images/architecture/rowhouse1.jpg",
  },
  {
    title: "Interior Design",
    category: "Interior",
    image: "/images/interiors/interior1.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-36">

      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-24">

          <p className="uppercase tracking-[8px] text-neutral-500 mb-4">
            Selected Projects
          </p>

          <h2 className="text-6xl font-bold max-w-4xl">
            Architecture that
            <br />
            tells a story.
          </h2>

        </div>

        <div className="space-y-24">

          {projects.map((project, index) => (

            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              <div className="relative h-[650px] rounded-[40px] overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />

              </div>

              <div>

                <p className="uppercase tracking-[6px] text-neutral-500">

                  {project.category}

                </p>

                <h3 className="text-5xl font-bold mt-6">

                  {project.title}

                </h3>

                <p className="text-neutral-600 leading-9 mt-8 text-lg">

                  Every project is approached with a balance of
                  creativity, functionality and timeless aesthetics,
                  ensuring spaces that remain relevant for years to
                  come.

                </p>

                <button className="mt-12 bg-black text-white px-10 py-5 rounded-full hover:bg-neutral-800 transition">

                  View Project

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}