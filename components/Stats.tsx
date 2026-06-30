export default function Stats() {
  const stats = [
    { number: "100+", label: "Design Concepts" },
    { number: "50+", label: "Residential Projects" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="bg-neutral-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((item) => (
            <div key={item.label}>
              <h2 className="text-5xl font-bold">{item.number}</h2>
              <p className="mt-3 text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}