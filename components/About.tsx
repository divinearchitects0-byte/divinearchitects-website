"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  "Residential Architecture",
  "Commercial Architecture",
  "Interior Design",
  "3D Visualization",
];

export default function About() {
  return (
    <section className="bg-neutral-50 py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Heading */}

        <div className="max-w-4xl">

          <p className="uppercase tracking-[8px] text-neutral-500 text-xs mb-4">

            About Studio

          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">

            We Design
            <br />
            Spaces That Last.

          </h2>

          <p className="mt-8 text-lg text-neutral-600 leading-9 max-w-3xl">

            Divine Architects is a Lucknow-based architecture and interior
            design studio creating timeless residences, commercial spaces,
            interiors and bespoke architectural experiences.

            Every project is driven by thoughtful planning, functional
            excellence and elegant design.

          </p>

        </div>

        {/* Large Image */}

        <div className="relative aspect-[21/9] mt-16 rounded-[36px] overflow-hidden shadow-2xl group">

          <Image
            src="/images/architecture/villa1.jpg"
            alt="Divine Architects"
            fill
            priority
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        </div>

        {/* Services */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          {services.map((service) => (

            <div
              key={service}
              className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 hover:shadow-lg transition"
            >

              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-lg mb-5">

                ✓

              </div>

              <h3 className="font-semibold text-lg leading-7">

                {service}

              </h3>

            </div>

          ))}
                  </div>

        {/* Bottom Section */}

        <div className="mt-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

          <div className="max-w-3xl">

            <h3 className="text-3xl md:text-4xl font-bold">

              Thoughtfully Designed.
              <br />
              Beautifully Built.

            </h3>

            <p className="text-neutral-600 leading-8 mt-6 text-lg">

              Whether it's a luxury residence, a contemporary office,
              a café, a retail environment or a premium interior,
              every project is designed to reflect its purpose while
              creating a timeless architectural identity.

            </p>

          </div>

          <div className="flex-shrink-0">

            <Link
              href="/about"
              className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full hover:bg-neutral-800 transition"
            >
              Learn More
              <span className="text-xl">→</span>
            </Link>

          </div>

        </div>
              </div>

    </section>
  );
}