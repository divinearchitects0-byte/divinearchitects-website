"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-24 px-8 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-4">

            <Image
              src="/logo/logo.png"
              alt="Divine Architects"
              width={55}
              height={55}
              priority
            />

            <div>

              <h2
                className={`font-bold tracking-wide transition ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                DIVINE ARCHITECTS
              </h2>

              <p
                className={`text-xs tracking-[3px] transition ${
                  scrolled ? "text-neutral-600" : "text-neutral-300"
                }`}
              >
                Architecture Studio
              </p>

            </div>

          </Link>

          {/* Desktop */}

          <nav
            className={`hidden lg:flex gap-10 transition ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}

          <a
            href="https://wa.me/918840828349"
            target="_blank"
            className={`hidden lg:block px-7 py-3 rounded-full transition ${
              scrolled
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            Consultation
          </a>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden text-3xl transition ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            ☰
          </button>

        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 bg-black text-white z-40 transition-all duration-500 ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        <div className="h-full flex flex-col justify-center items-center gap-10 text-3xl">

          {links.map((link) => (

            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>

          ))}

          <a
            href="https://wa.me/918840828349"
            target="_blank"
            className="mt-10 bg-white text-black px-8 py-4 rounded-full text-lg"
          >
            WhatsApp
          </a>

        </div>

      </div>
    </>
  );
}