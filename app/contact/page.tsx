import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="pt-36 md:pt-44 pb-20">

        <div className="max-w-7xl mx-auto px-5 md:px-8">

          <p className="uppercase tracking-[8px] text-neutral-500 text-xs mb-4">
            Contact
          </p>

          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Let's Create
            <br />
            Something
            <br />
            Exceptional.
          </h1>

          <p className="mt-8 text-lg text-neutral-600 leading-8 max-w-3xl">
            Planning a residence, commercial building, interior design,
            renovation or 3D visualization project? We'd love to understand
            your vision and help you bring it to life.
          </p>

        </div>

      </section>

      {/* Consultation */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-5 md:px-8">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left */}

            <div className="bg-neutral-50 rounded-[32px] p-10">

              <p className="uppercase tracking-[6px] text-neutral-500 text-xs mb-3">
                Project Consultation
              </p>

              <h2 className="text-4xl font-bold leading-tight">
                Tell Us About
                <br />
                Your Project
              </h2>

              <p className="text-neutral-600 leading-8 mt-6">
                Complete our consultation form with your project details.
                Our team will carefully review your requirements and get
                back to you within 24 hours.
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdLb3fu1BT-80JjhFfY5FcZkwi8xrJM28p34hiHrOpjA212EQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-10 bg-black text-white px-8 py-4 rounded-full hover:bg-neutral-800 transition"
              >
                Open Consultation Form →
              </a>

            </div>

            {/* Right */}

            <div className="space-y-6">

              <div className="border rounded-[28px] p-8">

                <h3 className="text-2xl font-bold">
                  📞 Call Us
                </h3>

                <p className="text-neutral-600 mt-4">
                  Speak directly with our team.
                </p>

                <a
                  href="tel:+918840828349"
                  className="inline-block mt-6 font-semibold hover:underline"
                >
                  +91 88408 28349
                </a>

              </div>

              <div className="border rounded-[28px] p-8">

                <h3 className="text-2xl font-bold">
                  💬 WhatsApp
                </h3>

                <p className="text-neutral-600 mt-4">
                  Quick responses for project discussions.
                </p>

                <a
                  href="https://wa.me/918840828349"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
                >
                  Chat on WhatsApp
                </a>

              </div>

              <div className="border rounded-[28px] p-8">

                <h3 className="text-2xl font-bold">
                  ✉️ Email
                </h3>

                <p className="text-neutral-600 mt-4">
                  Prefer email? We'd be happy to hear from you.
                </p>

                <a
                  href="mailto:divinearchitects0@gmail.com"
                  className="inline-block mt-6 font-semibold hover:underline break-all"
                >
                  divinearchitects0@gmail.com
                </a>

              </div>

              <div className="border rounded-[28px] p-8">

                <h3 className="text-2xl font-bold">
                  📍 Studio
                </h3>

                <p className="text-neutral-600 mt-4">
                  Lucknow, Uttar Pradesh, India
                </p>

                <p className="text-neutral-600 mt-4">
                  Monday – Saturday
                  <br />
                  10:00 AM – 7:00 PM
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}