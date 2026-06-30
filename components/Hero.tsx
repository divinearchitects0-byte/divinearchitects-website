"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background */}

      <Image
        src="/images/hero.jpg"
        alt="Divine Architects"
        fill
        priority
        className="object-cover scale-110 animate-[slowZoom_18s_linear_infinite_alternate]"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />

      {/* Content */}

      <div className="relative z-20 h-full">

        <div className="max-w-7xl mx-auto h-full px-8 flex items-center">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[10px] text-neutral-300 text-sm">

              Architecture • Interiors • Commercial Spaces

            </p>

            <h1 className="mt-8 text-white font-black leading-[0.9] text-6xl md:text-8xl xl:text-[110px]">

              Designing
              <br />

              Extraordinary
              <br />

              Spaces.

            </h1>

            <p className="mt-10 text-neutral-200 text-xl leading-9 max-w-2xl">

              Divine Architects creates timeless residential,
              commercial and interior environments where
              functionality, aesthetics and craftsmanship come together.

            </p>

            <div className="flex flex-wrap gap-6 mt-14">

              <a
                href="/portfolio"
                className="bg-white text-black px-10 py-5 rounded-full font-semibold hover:scale-105 transition duration-300"
              >
                Explore Portfolio
              </a>

              <a
                href="https://wa.me/918840828349"
                target="_blank"
                className="border border-white text-white px-10 py-5 rounded-full hover:bg-white hover:text-black transition duration-300"
              >
                Start Your Project
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">

        <div className="w-[2px] h-20 bg-white/70 mx-auto"></div>

        <p className="uppercase tracking-[6px] mt-4 text-xs">

          Scroll

        </p>

      </div>

    </section>
  );
}