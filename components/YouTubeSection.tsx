"use client";

import Image from "next/image";

const videos = [
  {
    title: "40x50 Duplex House Tour",
    subtitle: "5 BHK • East Facing",
    thumbnail: "https://img.youtube.com/vi/6dUOS_L8LBA/maxresdefault.jpg",
    link: "https://youtu.be/6dUOS_L8LBA?si=g0u9oyB89wRbn-Hm",
  },
  {
    title: "25x50 Row House Tour",
    subtitle: "4 BHK • Internal Courtyard",
    thumbnail: "https://img.youtube.com/vi/9jVN5Y3xWq0/maxresdefault.jpg",
    link: "https://youtu.be/9jVN5Y3xWq0?si=4dgNSxEBXxOPPXYA",
  },
  {
    title: "20x30 West Facing House",
    subtitle: "3 BHK • Vastu Friendly",
    thumbnail: "https://img.youtube.com/vi/dQUF7FMW2no/maxresdefault.jpg",
    link: "https://youtu.be/dQUF7FMW2no?si=SCV6eEMrw6B1Wsc0",
  },
];

export default function YouTubeSection() {
  return (
    <section className="bg-white py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

          <div>

            <p className="uppercase tracking-[6px] text-neutral-500 text-xs mb-3">
              YouTube
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Project
              <br />
              Walkthroughs
            </h2>

          </div>

          <a
            href="https://www.youtube.com/@DivineArchitects-DVA"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition"
          >
            Visit Channel
          </a>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {videos.map((video) => (

            <a
              key={video.title}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[28px] overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >

              <div className="relative aspect-video overflow-hidden">

                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  unoptimized
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl text-2xl group-hover:scale-110 transition">

                    ▶

                  </div>

                </div>

              </div>

              <div className="p-6 flex flex-col h-[190px]">

                <h3 className="text-2xl font-bold leading-tight">

                  {video.title}

                </h3>

                <p className="text-neutral-500 mt-3 text-sm">

                  {video.subtitle}

                </p>

                <div className="mt-auto">

                  <span className="text-red-600 font-semibold group-hover:translate-x-1 inline-block transition">

                    Watch on YouTube →

                  </span>

                </div>

              </div>

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}