import Button from "@/components/buttons/Button";

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
      img: "images/hundred-islands.jpg"
    },
    {
      title: "Cape Bolinao Lighthouse",
      location: "Bolinao",
      description: "A historic 1903 landmark standing tall over the West Philippine Sea.",
      detailed: "Perched atop Punta Piedra Point, this sentinel of the sea is the second tallest lighthouse in the Philippines. It has guided vessels for over a century, offering breathtaking panoramic views of the rugged coastline.",
      img: "images/bolinao-lighthouse.jpg"
    },
    {
      title: "Balungao Hotspring",
      location: "Balungao",
      description: "Relaxing volcanic springs nestled at the foot of Mount Balungao.",
      detailed: "Located at the base of an extinct volcano, these therapeutic alkaline springs are famed for their healing properties. Surrounded by lush greenery, the resort balances relaxation with adventure.",
      img: "images/balungao-hotspring.jpg"
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

      <div className="flex flex-col">
        {destinations.map((dest, index) => (
          <div key={index} className="relative">
            <div 
              className="h-[80vh] w-full bg-fixed bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${dest.img})` }}
            >
              <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
            </div>

            <section className="relative -mt-40 mb-20 mx-auto max-w-5xl px-6">
              <div className="bg-white dark:bg-zinc-900 p-8 md:p-16 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-90">
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <div className="flex-1 space-y-4">
                    <span className="inline-block px-4 py-1.5 text-xs font-black tracking-widest uppercase bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-400 rounded-full">
                      {dest.location}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{dest.title}</h2>
                    <p className="text-xl font-semibold text-cyan-700 dark:text-cyan-300">
                      {dest.description}
                    </p>
                  </div>
                  
                  <div className="flex-1 space-y-6">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                      {dest.detailed}
                    </p>
                    <Button className="w-fit px-8 py-4 !font-bold shadow-lg shadow-cyan-500/20">
                      Explore Gallery
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>

      <div className="h-20 bg-white dark:bg-black" />
    </main>
  );
}