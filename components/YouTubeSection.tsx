"use client";

import Image from "next/image";

const videos = [
  {
    title: "Modern Residence Walkthrough",
    image: "/images/youtube/thumb1.jpg",
  },
  {
    title: "Luxury Villa Design",
    image: "/images/youtube/thumb2.jpg",
  },
  {
    title: "Interior Design Walkthrough",
    image: "/images/youtube/thumb1.jpg",
  },
];

export default function YouTubeSection() {
  return (
    <section className="bg-white py-32">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex justify-between items-end flex-wrap gap-8">

          <div>

            <p className="uppercase tracking-[8px] text-neutral-500 mb-4">
              YouTube
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">
              Project
              <br />
              Walkthroughs
            </h2>

          </div>

          <a
            href="https://www.youtube.com/@DivineArchitects-DVA"
            target="_blank"
            className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition"
          >
            Visit Channel
          </a>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {videos.map((video) => (

            <div
              key={video.title}
              className="group"
            >

              <div className="relative h-[250px] rounded-[30px] overflow-hidden">

                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/35"></div>

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-3xl">

                    ▶

                  </div>

                </div>

              </div>

              <h3 className="text-2xl font-semibold mt-8">

                {video.title}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}