"use client";

export default function ContactCTA() {
  return (
    <section className="bg-neutral-950 text-white py-24 md:py-32">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[8px] text-neutral-400 text-xs md:text-sm mb-5">
          Let's Work Together
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">

          Let's Design
          <br />

          Something
          <br />

          Extraordinary.

        </h2>

        <p className="text-neutral-400 text-base md:text-lg leading-8 md:leading-9 mt-10 max-w-3xl mx-auto">

          Whether you're planning a residence, commercial development,
          café, office, retail space, hospitality project or interior
          transformation, we're here to help turn your vision into reality.

        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-14">

          <a
            href="https://wa.me/918840828349"
            target="_blank"
            rel="noopener noreferrer"
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

      </div>

    </section>
  );
}