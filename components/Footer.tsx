"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid lg:grid-cols-4 gap-14">

          <div>

            <h2 className="text-3xl font-bold">
              Divine Architects
            </h2>

            <p className="text-neutral-400 leading-8 mt-6">

              Creating timeless residential, commercial and interior
              spaces through thoughtful planning, refined aesthetics
              and functional design.

            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-neutral-400">

              <li>Home</li>
              <li>Portfolio</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-neutral-400">

              <li>Architecture</li>
              <li>Interior Design</li>
              <li>Commercial Design</li>
              <li>3D Visualization</li>
              <li>Construction Drawings</li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <p className="text-neutral-400">
              📍 Lucknow, Uttar Pradesh
            </p>

            <p className="text-neutral-400 mt-4">
              📞 +91 8840828349
            </p>

            <p className="text-neutral-400 mt-4 break-all">
              ✉ divinearchitects0@gmail.com
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="https://www.instagram.com/_divine_architects_/"
                target="_blank"
                className="border border-neutral-700 px-5 py-3 rounded-full hover:bg-white hover:text-black transition"
              >
                Instagram
              </a>

              <a
                href="https://www.youtube.com/@DivineArchitects-DVA"
                target="_blank"
                className="border border-neutral-700 px-5 py-3 rounded-full hover:bg-white hover:text-black transition"
              >
                YouTube
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-neutral-800 mt-20 pt-8 flex flex-col md:flex-row justify-between gap-6 text-neutral-500">

          <p>
            © 2026 Divine Architects. All Rights Reserved.
          </p>

          <p>
            Designed by Divine Architects
          </p>

        </div>

      </div>

    </footer>
  );
}