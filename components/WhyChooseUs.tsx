export default function WhyChooseUs() {
  const features = [
    {
      title: "Tailor-Made Design",
      description:
        "Every project is designed from scratch to reflect your vision, lifestyle and business goals.",
    },
    {
      title: "Residential & Commercial",
      description:
        "From luxury residences to cafés, offices, retail spaces and fitness centres, we create spaces with purpose.",
    },
    {
      title: "Function First",
      description:
        "Beautiful architecture is meaningful only when every space works effortlessly for the people using it.",
    },
    {
      title: "Contemporary Design",
      description:
        "Clean forms, timeless materials and thoughtful detailing create spaces that remain relevant for years.",
    },
    {
      title: "3D Visualization",
      description:
        "Experience your project before construction through realistic architectural visualization.",
    },
    {
      title: "End-to-End Guidance",
      description:
        "From concept development to construction drawings, we guide every stage of the design journey.",
    },
  ];

  return (
    <section className="bg-black text-white py-28">

      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-gray-400 mb-4">
          Why Choose Us
        </p>

        <h2 className="text-5xl md:text-6xl font-bold max-w-3xl leading-tight">
          Designing Spaces
          <br />
          That Create Lasting Experiences.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((item) => (

            <div
              key={item.title}
              className="border border-neutral-700 rounded-3xl p-10 hover:bg-neutral-900 transition duration-500"
            >

              <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-2xl font-bold">

                +

              </div>

              <h3 className="text-2xl font-semibold mt-8">

                {item.title}

              </h3>

              <p className="text-gray-400 leading-8 mt-5">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}