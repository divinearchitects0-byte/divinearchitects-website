export default function YouTubePage() {
  return (
    <main className="min-h-screen bg-white pt-40 pb-24">

      <div className="max-w-7xl mx-auto px-8">

        <p className="uppercase tracking-[8px] text-neutral-500 mb-4">
          YouTube
        </p>

        <h1 className="text-7xl font-bold">
          Project Walkthroughs
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-neutral-600">
          Explore our latest architectural walkthroughs, design concepts,
          planning ideas and completed projects on our YouTube channel.
        </p>

        <a
          href="https://www.youtube.com/@DivineArchitects-DVA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 bg-red-600 text-white px-10 py-5 rounded-full hover:bg-red-700 transition"
        >
          Visit YouTube Channel
        </a>

      </div>

    </main>
  );
}