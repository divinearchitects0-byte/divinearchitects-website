"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Luxury Classical Residence",
    category: "Residential Architecture",
    image: "/images/architecture/villa1.jpg",
    description:
      "Elegant classical architecture blended with modern planning and luxurious living.",
  },
  {
    title: "Modern Residence",
    category: "Architecture",
    image: "/images/architecture/villa2.jpg",
    description:
      "Contemporary architecture focused on light, openness and timeless aesthetics.",
  },
  {
    title: "Contemporary Row House",
    category: "Residential Design",
    image: "/images/architecture/rowhouse1.jpg",
    description:
      "Smart planning for compact plots without compromising space or comfort.",
  },
  {
    title: "Luxury Interior",
    category: "Interior Design",
    image: "/images/interiors/bedroom1.jpg",
    description:
      "Premium interiors designed with elegance, warmth and functionality.",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 md:py-28 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">

          <div>

            <p className="uppercase tracking-[6px] text-neutral-500 text-xs mb-3">
              Selected Projects
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Architecture that
              <br />
              tells a story.
            </h2>

          </div>

          <p className="text-neutral-600 text-lg max-w-md mt-6 lg:mt-0 leading-8">
            Every project reflects our commitment to thoughtful planning,
            timeless design and exceptional craftsmanship.
          </p>

        </div>

        {/* 2x2 Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="group bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >

              <div className="relative aspect-video overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-7 md:p-8">

                <p className="uppercase tracking-[5px] text-[11px] text-neutral-500 mb-3">

                  {project.category}

                </p>

                <h3 className="text-2xl md:text-4xl font-bold">

                  {project.title}

                </h3>

                <p className="text-neutral-600 mt-4 leading-7">

                  {project.description}

                </p>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 mt-7 px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 transition"
                >
                  View Project →
                </Link>

              </div>

            </div>

          ))}

        </div>

        <div className="text-center mt-16">

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 border border-black px-10 py-4 rounded-full hover:bg-black hover:text-white transition"
          >
            View All Projects →
          </Link>

        </div>

      </div>

    </section>
  );
}