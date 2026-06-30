"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
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
      <div className="relative z-20 min-h-screen">
        <div className="max-w-7xl mx-auto min-h-screen flex items-start md:items-center px-5 sm:px-6 lg:px-8 pt-36 md:pt-0">
          <div className="w-full max-w-4xl">
            {/* Desktop Tagline */}
            <p className="hidden md:block uppercase tracking-[10px] text-neutral-300 text-sm">
              Architecture • Interiors • Commercial Spaces
            </p>

            {/* Heading */}
            <h1 className="mt-4 md:mt-8 text-white font-black leading-[0.92] text-[52px] sm:text-[64px] md:text-8xl xl:text-[110px]">
              Designing
              <br />
              Extraordinary
              <br />
              Spaces.
            </h1>

            {/* Description */}
            <p className="mt-8 text-neutral-200 text-lg md:text-xl leading-8 md:leading-9 max-w-2xl">
              Divine Architects creates timeless residential,
              commercial and interior environments where
              functionality, aesthetics and craftsmanship come together.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mt-10 md:mt-14">
              <a
                href="/portfolio"
                className="bg-white text-black text-center px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold hover:scale-105 transition duration-300"
              >
                Explore Portfolio
              </a>

              <a
                href="https://wa.me/918840828349"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white text-center px-8 md:px-10 py-4 md:py-5 rounded-full hover:bg-white hover:text-black transition duration-300"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <div className="w-[2px] h-20 bg-white/70 mx-auto"></div>

        <p className="uppercase tracking-[6px] mt-4 text-xs">
          Scroll
        </p>
      </div>
    </section>
  );
}