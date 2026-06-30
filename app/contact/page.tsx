export default function ContactPage() {
  return (
    <main className="bg-white">

      {/* HERO */}

      <section className="pt-40 pb-24">

        <div className="max-w-7xl mx-auto px-8">

          <p className="uppercase tracking-[8px] text-neutral-500 mb-4">
            Contact
          </p>

          <h1 className="text-7xl font-bold leading-tight">

            Let's Create
            <br />

            Something
            <br />

            Exceptional.

          </h1>

          <p className="mt-10 text-lg leading-9 text-neutral-600 max-w-3xl">

            Whether you're planning a residence, commercial project,
            café, office, hospitality space or interior design project,
            we'd love to hear your ideas.

          </p>

        </div>

      </section>

      {/* CONTACT */}

      <section className="pb-32">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-20">

            {/* FORM */}

            <form className="space-y-8">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-neutral-300 rounded-2xl p-5 outline-none focus:border-black"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-neutral-300 rounded-2xl p-5 outline-none focus:border-black"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-neutral-300 rounded-2xl p-5 outline-none focus:border-black"
              />

              <select className="w-full border border-neutral-300 rounded-2xl p-5 outline-none focus:border-black">

                <option>Select Service</option>

                <option>Architecture</option>

                <option>Interior Design</option>

                <option>Commercial Design</option>

                <option>3D Visualization</option>

                <option>Consultation</option>

              </select>

              <textarea
                rows={7}
                placeholder="Tell us about your project..."
                className="w-full border border-neutral-300 rounded-2xl p-5 outline-none focus:border-black"
              />

              <button className="bg-black text-white px-10 py-5 rounded-full hover:bg-neutral-800 transition">

                Send Enquiry

              </button>

            </form>

            {/* INFO */}

            <div>

              <h2 className="text-5xl font-bold">

                Contact Information

              </h2>

              <div className="space-y-10 mt-14">

                <div>

                  <h3 className="font-semibold text-xl">

                    Phone

                  </h3>

                  <p className="text-neutral-600 mt-3">

                    +91 88408 28349

                  </p>

                </div>

                <div>

                  <h3 className="font-semibold text-xl">

                    Email

                  </h3>

                  <p className="text-neutral-600 mt-3">

                    divinearchitects0@gmail.com

                  </p>

                </div>

                <div>

                  <h3 className="font-semibold text-xl">

                    Location

                  </h3>

                  <p className="text-neutral-600 mt-3">

                    Lucknow, Uttar Pradesh, India

                  </p>

                </div>

                <div>

                  <h3 className="font-semibold text-xl">

                    Working Hours

                  </h3>

                  <p className="text-neutral-600 mt-3">

                    Monday – Saturday

                    <br />

                    10:00 AM – 7:00 PM

                  </p>

                </div>

              </div>

              <a
                href="https://wa.me/918840828349"
                target="_blank"
                className="inline-block mt-16 bg-green-600 text-white px-10 py-5 rounded-full hover:bg-green-700 transition"
              >
                Chat on WhatsApp
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}