"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-2xl font-bold">

              Divine Architects

            </h2>

            <p className="text-neutral-500 mt-2">

              Architecture • Interiors • Commercial Spaces

            </p>

            <p className="text-neutral-400 leading-8 mt-6">

              Designing timeless spaces through thoughtful planning,
              refined aesthetics and functional excellence.

            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-lg font-semibold mb-6">

              Navigation

            </h3>

            <ul className="space-y-4 text-neutral-400">

              <li><Link href="/" className="hover:text-white transition">Home</Link></li>

              <li><Link href="/about" className="hover:text-white transition">About</Link></li>

              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>

              <li><Link href="/portfolio" className="hover:text-white transition">Portfolio</Link></li>

              <li><Link href="/youtube" className="hover:text-white transition">YouTube</Link></li>

              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-lg font-semibold mb-6">

              Services

            </h3>

            <ul className="space-y-4 text-neutral-400">

              <li>Residential Architecture</li>

              <li>Commercial Architecture</li>

              <li>Interior Design</li>

              <li>3D Visualization</li>

              <li>Construction Drawings</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg font-semibold mb-6">

              Contact

            </h3>

            <p className="text-neutral-400">

              📍 Lucknow, Uttar Pradesh, India

            </p>

            <p className="text-neutral-400 mt-4">

              📞 +91 8840828349

            </p>

            <a
              href="mailto:divinearchitects0@gmail.com"
              className="block text-neutral-400 hover:text-white transition mt-4 break-all"
            >
              ✉️ divinearchitects0@gmail.com
            </a>

            <div className="flex flex-wrap gap-3 mt-8">

              <a
                href="https://www.instagram.com/_divine_architects_/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-neutral-700 rounded-full hover:bg-white hover:text-black transition"
              >
                Instagram
              </a>

              <a
                href="https://www.youtube.com/@DivineArchitects-DVA"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-neutral-700 rounded-full hover:bg-white hover:text-black transition"
              >
                YouTube
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-neutral-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">

          <p>

            © {new Date().getFullYear()} Divine Architects. All Rights Reserved.

          </p>

          <p>

            Designed & Developed by Divine Architects

          </p>

        </div>

      </div>

    </footer>
  );
}