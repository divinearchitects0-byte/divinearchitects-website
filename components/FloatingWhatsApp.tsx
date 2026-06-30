"use client";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918840828349"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
    >
      <div className="relative">

        {/* Pulse Ring */}

        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>

        {/* Button */}

        <div className="relative w-16 h-16 rounded-full bg-green-600 hover:bg-green-700 transition flex items-center justify-center shadow-2xl">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="30"
            height="30"
            fill="white"
          >
            <path d="M19.11 17.24c-.29-.14-1.72-.85-1.99-.95-.27-.1-.46-.14-.66.15-.19.29-.76.95-.93 1.15-.17.19-.34.22-.63.07-.29-.14-1.23-.45-2.34-1.43-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.66-1.58-.9-2.17-.24-.58-.48-.5-.66-.5h-.56c-.19 0-.5.07-.76.36-.26.29-1 1-.98 2.43.02 1.43 1.02 2.8 1.16 2.99.14.19 2.01 3.08 4.87 4.31.68.29 1.22.46 1.64.59.69.22 1.31.19 1.8.12.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z"/>
          </svg>

        </div>

      </div>
    </a>
  );
}