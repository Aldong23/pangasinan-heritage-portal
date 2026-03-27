import Button from "@/components/buttons/Button";

export default function FeatureSections({ items = [] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <div key={index} className="relative">
          
          {/* Background */}
          <div
            className="h-[80vh] w-full bg-fixed bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
          </div>

          {/* Card */}
          <section className="relative -mt-40 mb-20 mx-auto max-w-5xl px-6">
            <div className="bg-white dark:bg-zinc-900 p-8 md:p-16 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-90">
              
              <div className="flex flex-col md:flex-row gap-10 items-start">
                
                {/* Left */}
                <div className="flex-1 space-y-4">
                  <span className="inline-block px-4 py-1.5 text-xs font-black tracking-widest uppercase bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-400 rounded-full">
                    {item.location}
                  </span>

                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    {item.title}
                  </h2>

                  <p className="text-xl font-semibold text-cyan-700 dark:text-cyan-300">
                    {item.description}
                  </p>
                </div>

                {/* Right */}
                <div className="flex-1 space-y-6">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    {item.detailed}
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
  );
}