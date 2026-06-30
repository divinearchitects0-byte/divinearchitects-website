"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="bg-neutral-50 py-36">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* IMAGE */}

          <div className="lg:col-span-7">

            <div className="relative h-[780px] rounded-[40px] overflow-hidden shadow-2xl">

              <Image
                src="/images/architecture/villa1.jpg"
                alt="Divine Architects"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />

            </div>

          </div>

          {/* CONTENT */}

          <div className="lg:col-span-5">

            <p className="uppercase tracking-[8px] text-neutral-500 mb-5">

              About Studio

            </p>

            <h2 className="text-6xl leading-tight font-bold">

              We Design
              <br />

              Spaces
              <br />

              That Last.

            </h2>

            <p className="mt-10 text-lg text-neutral-600 leading-9">

              Divine Architects is a Lucknow-based architecture and
              interior design studio creating spaces that balance
              timeless aesthetics, thoughtful planning and practical
              functionality.

            </p>

            <p className="mt-8 text-lg text-neutral-600 leading-9">

              Our portfolio includes residences, cafés, restaurants,
              offices, retail environments, hospitality spaces,
              interiors and bespoke architectural solutions tailored to
              every client.

            </p>

            <div className="grid grid-cols-2 gap-10 mt-16">

              <div>

                <h3 className="text-4xl font-bold">

                  Residential

                </h3>

                <p className="mt-3 text-neutral-500">

                  Villas, residences & row houses

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold">

                  Commercial

                </h3>

                <p className="mt-3 text-neutral-500">

                  Offices, cafés & retail

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold">

                  Interiors

                </h3>

                <p className="mt-3 text-neutral-500">

                  Residential & commercial interiors

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold">

                  Visualization

                </h3>

                <p className="mt-3 text-neutral-500">

                  3D renders & walkthroughs

                </p>

              </div>

            </div>

            <a
              href="/about"
              className="inline-block mt-16 bg-black text-white px-10 py-5 rounded-full hover:bg-neutral-800 transition"
            >
              Learn More
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}