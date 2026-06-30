"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

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
        <div className="max-w-7xl mx-auto h-20 md:h-24 px-5 md:px-8 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-3">

            <Image
              src="/logo/logo.png"
              alt="Divine Architects"
              width={46}
              height={46}
              priority
            />

            <div>

              <h2
                className={`font-bold text-sm md:text-base tracking-wide transition ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                DIVINE ARCHITECTS
              </h2>

              <p
                className={`text-[10px] md:text-xs tracking-[3px] transition ${
                  scrolled ? "text-neutral-600" : "text-neutral-300"
                }`}
              >
                Architecture Studio
              </p>

            </div>

          </Link>

          {/* Desktop */}

          <nav
            className={`hidden lg:flex items-center gap-10 transition ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {links.map((link) => (

              <Link
                key={link.name}
                href={link.href}
                className={`transition hover:opacity-70 ${
                  pathname === link.href ? "font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>

            ))}
          </nav>

          {/* Desktop CTA */}

          <a
            href="https://wa.me/918840828349"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden lg:block px-7 py-3 rounded-full transition ${
              scrolled
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            Consultation
          </a>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(true)}
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
        className={`fixed inset-0 z-50 bg-black text-white transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Close */}

        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-7 right-7 text-4xl"
        >
          ✕
        </button>

        <div className="h-full flex flex-col items-center justify-center gap-8">

          {links.map((link) => (

            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl transition ${
                pathname === link.href
                  ? "font-bold"
                  : "text-neutral-300"
              }`}
            >
              {link.name}
            </Link>

          ))}

          <a
            href="https://wa.me/918840828349"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-8 bg-white text-black px-8 py-4 rounded-full font-medium"
          >
            WhatsApp Consultation
          </a>

        </div>

      </div>
    </>
  );
}