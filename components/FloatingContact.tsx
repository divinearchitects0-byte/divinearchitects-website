"use client";

import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  Calendar,
  Plus,
  X,
} from "lucide-react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  const actions = [
    {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSdLb3fu1BT-80JjhFfY5FcZkwi8xrJM28p34hiHrOpjA212EQ/viewform?usp=header",
      title: "Book Consultation",
      icon: Calendar,
      color: "bg-black",
    },
    {
      href: "https://wa.me/918840828349",
      title: "WhatsApp",
      icon: MessageCircle,
      color: "bg-green-600",
    },
    {
      href: "tel:+918840828349",
      title: "Call",
      icon: Phone,
      color: "bg-blue-600",
    },
    {
      href: "mailto:divinearchitects0@gmail.com",
      title: "Email",
      icon: Mail,
      color: "bg-red-600",
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end">

      {open && (
        <div className="flex flex-col items-end gap-3 mb-4">

          {actions.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-3"
              >
                {/* Desktop Label */}
                <div className="hidden md:block bg-white px-4 py-2 rounded-full shadow-lg whitespace-nowrap text-sm font-medium">
                  {item.title}
                </div>

                {/* Icon */}
                <div
                  className={`${item.color} w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white hover:scale-110 transition`}
                >
                  <Icon size={24} />
                </div>
              </a>
            );
          })}
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full bg-green-600 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition"
      >
        {open ? <X size={28} /> : <Plus size={28} />}
      </button>

    </div>
  );
}