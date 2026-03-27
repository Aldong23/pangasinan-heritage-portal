import DestinationCards from "@/components/layouts/DestinationCards";


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

      <DestinationCards items={destinations} />

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