import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* HERO */}

      <section className="pt-40 pb-28">

        <div className="max-w-7xl mx-auto px-8">

          <p className="uppercase tracking-[8px] text-neutral-500 mb-4">
            About Divine Architects
          </p>

          <h1 className="text-7xl font-bold leading-tight">

            We Design
            <br />
            Spaces That
            <br />
            Inspire.

          </h1>

          <p className="text-lg text-neutral-600 leading-9 mt-10 max-w-3xl">

            Divine Architects is an architecture and interior design studio
            based in Lucknow, creating thoughtful residential,
            commercial and hospitality spaces with timeless aesthetics,
            functionality and attention to detail.

          </p>

        </div>

      </section>

      {/* IMAGE */}

      <section className="pb-32">

        <div className="max-w-7xl mx-auto px-8">

          <div className="relative h-[750px] rounded-[40px] overflow-hidden">

            <Image
              src="/images/architecture/villa1.jpg"
              alt="Divine Architects"
              fill
              className="object-cover"
            />

          </div>

        </div>

      </section>

      {/* STORY */}

      <section className="pb-32">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-20">

            <div>

              <h2 className="text-5xl font-bold">

                Our Philosophy

              </h2>

              <p className="mt-10 text-neutral-600 leading-9 text-lg">

                We believe architecture should enhance the way people
                live, work and experience spaces. Every project is
                carefully designed to balance aesthetics, functionality
                and long-term value.

              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold">

                What We Do

              </h2>

              <p className="mt-10 text-neutral-600 leading-9 text-lg">

                We work across residential architecture, commercial
                projects, cafés, restaurants, offices, retail spaces,
                hospitality environments, interiors, 3D visualization
                and architectural planning.

              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}