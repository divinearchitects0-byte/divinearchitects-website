export default function DesignProcess() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "Understanding your vision, project requirements, site conditions and design goals.",
    },
    {
      number: "02",
      title: "Concept Design",
      description:
        "Developing layouts, planning ideas and architectural concepts tailored to your project.",
    },
    {
      number: "03",
      title: "3D Visualization",
      description:
        "Photorealistic renders and walkthroughs to help you experience the project before execution.",
    },
    {
      number: "04",
      title: "Working Drawings",
      description:
        "Detailed construction drawings for smooth on-site execution with complete clarity.",
    },
  ];

  return (
    <section className="bg-neutral-100 py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-gray-500">
            Design Process
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            From Vision to Reality
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 mt-6 leading-8">
            Every successful project begins with understanding your vision.
            Our process ensures creativity, technical precision and seamless execution.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 gap-8 mt-20">

          {steps.map((step) => (

            <div
              key={step.number}
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
            >

              <h3 className="text-6xl font-bold text-gray-200">
                {step.number}
              </h3>

              <h4 className="text-2xl font-semibold mt-8">
                {step.title}
              </h4>

              <p className="text-gray-600 leading-8 mt-6">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}