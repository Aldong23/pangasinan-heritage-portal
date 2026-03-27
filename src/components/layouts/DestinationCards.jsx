import Button from "@/components/buttons/Button";
import Image from "next/image";

export default function DestinationCards({ items = [] }) {
  return (
    <section className="grid grid-cols-1 gap-12">
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative bg-white dark:bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl transition-all hover:shadow-cyan-500/10"
        >
          <div className="flex flex-col lg:flex-row">
            
            {/* Image */}
            <div className="lg:w-1/2 h-72 lg:h-auto relative overflow-hidden group">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center">
              
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300 rounded-full">
                  {item.tag}
                </span>
                <span className="text-sm font-medium text-slate-400">
                  {item.city}
                </span>
              </div>

              <h2 className="text-3xl font-bold mb-4 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                {item.name}
              </h2>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                {item.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-y-3 mb-8">
                {item.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center text-sm text-slate-500 dark:text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button className="px-6 py-3 !font-bold">
                  View Guide
                </Button>
                <Button
                  variant="outline-primary"
                  className="px-6 py-3 !font-bold"
                >
                  Show on Map
                </Button>
              </div>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
}