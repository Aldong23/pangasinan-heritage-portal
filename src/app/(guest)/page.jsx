import FeatureSections from "@/components/layouts/FeatureSections";


export const metadata = {
  title: "Home",
};

export default function HomePage() {
  const destinations = [
    {
      title: "Hundred Islands",
      location: "Alaminos City",
      description: "A sprawling archipelago of 124 islands offering white sands and limestone cliffs.",
      detailed: "Scattered like emeralds across the Lingayen Gulf, this national park is a geological marvel. Formed millions of years ago, these mushroom-shaped islands offer everything from secluded white-sand beaches to hidden caves and thriving coral reefs.",
      img: "./images/hundred-islands.jpg"
    },
    {
      title: "Cape Bolinao Lighthouse",
      location: "Bolinao",
      description: "A historic 1903 landmark standing tall over the West Philippine Sea.",
      detailed: "Perched atop Punta Piedra Point, this sentinel of the sea is the second tallest lighthouse in the Philippines. It has guided vessels for over a century, offering breathtaking panoramic views of the rugged coastline.",
      img: "./images/bolinao-lighthouse.jpg"
    },
    {
      title: "Balungao Hotspring",
      location: "Balungao",
      description: "Relaxing volcanic springs nestled at the foot of Mount Balungao.",
      detailed: "Located at the base of an extinct volcano, these therapeutic alkaline springs are famed for their healing properties. Surrounded by lush greenery, the resort balances relaxation with adventure.",
      img: "./images/balungao-hotspring.jpg"
    }
  ];

  return (
    <main className="transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-black dark:text-slate-100">

      <header className="h-[60vh] flex flex-col items-center justify-center text-center p-6 bg-white dark:bg-black">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-cyan-800 dark:text-cyan-400 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          PANGASINAN
        </h1>
        <p className="mt-4 text-xl opacity-80 max-w-2xl mx-auto font-medium">
          Experience the natural wonders and historical landmarks of the gateway to the North.
        </p>
      </header>

      <FeatureSections items={destinations} />

      <div className="h-20 bg-white dark:bg-black" />
    </main>
  );
}