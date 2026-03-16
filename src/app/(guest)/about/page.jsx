import ButtonLink from "@/components/buttons/ButtonLink";
import Image from "next/image";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  const stats = [
    { label: "Islands to Explore", value: "124" },
    { label: "History Since", value: "1580" },
    { label: "Coastal Length", value: "285km" },
    { label: "Local Towns", value: "44" },
  ];

  return (
    <div className="space-y-24">
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-cyan-800 dark:text-cyan-400">
          Preserving the Soul of the North.
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Pangasinan Heritage is a digital sanctuary dedicated to showcasing the
          unrivaled beauty, rich history, and vibrant culture of our province.
        </p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-slate-200 dark:border-slate-800">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
            <div className="text-sm text-cyan-600 dark:text-cyan-500 font-semibold uppercase tracking-widest mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            From the salt-beds of Dasol to the verdant mountains of Balungao, Pangasinan has
            always been more than just a gateway. It is a destination of legends.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            We started this portal to bridge the gap between tradition and technology.
            Whether you are seeking the tranquility of the <strong>Hundred Islands</strong>,
            the historic guidance of the <strong>Bolinao Lighthouse</strong>, or the
            healing warmth of <strong>Balungao’s springs</strong>, we provide the
            curated insights you need to experience the province authentically.
          </p>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-cyan-500/10 rounded-3xl blur-2xl group-hover:bg-cyan-500/20 transition duration-500" />

          <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="./images/about-pangasinan.jpg"
              alt="Pangasinan Landscape"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

      </section>

      <section className="bg-slate-100 dark:bg-slate-900/50 rounded-3xl p-8 md:p-16 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">What We Stand For</h2>
          <p className="text-slate-500">Our commitment to the heritage of the North.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Eco-Tourism", desc: "Promoting sustainable travel to keep our 124 islands pristine." },
            { title: "Historical Integrity", desc: "Fact-checking every story, from the Galleon trade to the salt industry." },
            { title: "Local Community", desc: "Supporting the artisans and guides who make our province home." }
          ].map((value, i) => (
            <div key={i} className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold mb-3 text-cyan-700 dark:text-cyan-400">{value.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-6">Ready to see it for yourself?</h2>
        <ButtonLink href="/" className="inline-block px-10 py-4 !font-bold !text-md">Explore Destinations</ButtonLink>
      </section>
    </div>
  );
}