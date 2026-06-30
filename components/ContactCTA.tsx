"use client";

export default function ContactCTA() {
  return (
    <section className="bg-neutral-950 text-white py-32">

      <div className="max-w-6xl mx-auto px-8 text-center">

        <p className="uppercase tracking-[8px] text-neutral-400 mb-5">
          Let's Work Together
        </p>

        <h2 className="text-5xl md:text-7xl font-bold leading-tight">

          Let's Design
          <br />

          Something
          <br />

          Extraordinary.

        </h2>

        <p className="text-neutral-400 text-lg leading-9 mt-10 max-w-3xl mx-auto">

          Whether you're planning a residence, commercial development,
          café, office, retail space, hospitality project or interior
          transformation, we're here to help turn your vision into reality.

        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-16">

          <a
            href="https://wa.me/918840828349"
            target="_blank"
            className="bg-white text-black px-10 py-5 rounded-full font-semibold hover:bg-neutral-200 transition"
          >
            WhatsApp Us
          </a>

          <a
            href="mailto:divinearchitects0@gmail.com"
            className="border border-white px-10 py-5 rounded-full hover:bg-white hover:text-black transition"
          >
            Email Us
          </a>

        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-24 text-left">

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Call
            </h3>

            <p className="text-neutral-400">
              +91 88408 28349
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Email
            </h3>

            <p className="text-neutral-400 break-all">
              divinearchitects0@gmail.com
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Office
            </h3>

            <p className="text-neutral-400">
              Lucknow, Uttar Pradesh, India
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}