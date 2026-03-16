import Button from "@/components/buttons/Button";
import Image from "next/image";

export const metadata = {
  title: "Destinations",
};

export default function DestinationsPage() {
  const destinations = [
    {
      id: "hundred-islands",
      name: "Hundred Islands National Park",
      city: "Alaminos City",
      tag: "Adventure",
      description: "A world-renowned archipelago of 124 islands (123 at high tide) scattered across the turquoise waters of the Lingayen Gulf.",
      features: ["Island Hopping", "Ziplining", "Helmet Diving", "Kayaking"],
      img: "./images/hundred-islands1.jpg",
    },
    {
      id: "bolinao-lighthouse",
      name: "Cape Bolinao Lighthouse",
      city: "Bolinao",
      tag: "History",
      description: "Standing atop Punta Piedra Point, this historic sentinel has guided ships entering the West Philippine Sea since 1903.",
      features: ["Panoramic Views", "Historical Marker", "Sunset Photography", "Nearby Rock Formations"],
      img: "./images/bolinao-lighthouse1.jpg",
    },
    {
      id: "balungao-springs",
      name: "Balungao Hot & Cold Springs",
      city: "Balungao",
      tag: "Wellness",
      description: "Nestled at the foot of Mount Balungao, these volcanic springs offer therapeutic waters ranging from steaming hot to refreshing cold.",
      features: ["Hot Springs", "Hilltop Adventure", "Mountain Trekking", "Longest Zipline"],
      img: "./images/balungao-hotspring1.jpg",
    }
  ];

  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
          Explore <span className="text-cyan-700 dark:text-cyan-400">Pangasinan</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          From the salt-beds to the summits, discover the diverse landscapes that make our province the ultimate gateway to the North.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-12">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="group relative bg-white dark:bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl transition-all hover:shadow-cyan-500/10"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 h-72 lg:h-auto relative overflow-hidden group">
                <Image
                  src={dest.img}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300 rounded-full">
                    {dest.tag}
                  </span>
                  <span className="text-sm font-medium text-slate-400">{dest.city}</span>
                </div>

                <h2 className="text-3xl font-bold mb-4 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                  {dest.name}
                </h2>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  {dest.description}
                </p>

                <div className="grid grid-cols-2 gap-y-3 mb-8">
                  {dest.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-slate-500 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button className="px-6 py-3 !font-bold">View Guide</Button>
                  <Button variant="outline-primary" className="px-6 py-3 !font-bold">Show on Map</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-cyan-900 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-bold italic">“Pangasinan”</h2>
          <p className="text-cyan-100 opacity-90">
            Did you know? The name Pangasinan means <span className="font-bold text-white uppercase tracking-tighter">"place of salt"</span> or <span className="font-bold text-white uppercase tracking-tighter">"where salt is made,"</span> referring to the province's primary industry of salt-making.
          </p>
        </div>
        <div className="h-px w-20 bg-cyan-700 md:h-20 md:w-px hidden md:block" />
        <div className="flex-1 text-center md:text-right">
          <p className="text-sm uppercase tracking-widest text-cyan-300 font-bold mb-2">Best Time to Visit</p>
          <p className="text-xl font-semibold">November to April</p>
          <p className="text-xs text-cyan-200 mt-2">Dry season for optimal island hopping.</p>
        </div>
      </section>
    </div>
  );
}