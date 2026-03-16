import GuestNavbar from "../navigation/GuestNavbar";

export default function GuestLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-black dark:text-slate-100 transition-colors duration-300">
      <GuestNavbar />
      <main className="relative flex-1 flex flex-col">

        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-[10%] left-[5%] w-[40%] h-[30%] bg-cyan-200/20 dark:bg-cyan-900/10 blur-[120px] rounded-full" />
          <div className="absolute top-[40%] right-[5%] w-[30%] h-[40%] bg-blue-200/20 dark:bg-blue-900/10 blur-[120px] rounded-full" />
        </div>

        <div className="flex-1 w-full max-w-7xl mx-auto px-6 py-12 lg:py-24">
          {children}
        </div>

      </main>

      <footer className="bg-white dark:bg-black border-t border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-cyan-800 dark:text-cyan-400">
                Pangasinan Heritage
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Exploring the 124 islands, historic lighthouses, and the healing waters of the North.
              </p>
            </div>

            <div className="flex flex-col space-y-3">
              <h4 className="font-bold text-sm uppercase tracking-widest opacity-50">Discovery</h4>
              <nav className="flex flex-col space-y-2 text-sm font-medium">
                <a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Hundred Islands</a>
                <a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Bolinao Light</a>
                <a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Balungao Springs</a>
              </nav>
            </div>

            <div className="flex flex-col space-y-3">
              <h4 className="font-bold text-sm uppercase tracking-widest opacity-50">Community</h4>
              <nav className="flex flex-col space-y-2 text-sm font-medium">
                <a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Admin Login</a>
              </nav>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400">
              © 2026 Pangasinan Heritage Portal. Crafted for the North.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 hover:scale-110 transition"
              >
                <img
                  src="images/icons/facebook.jpg"
                  alt="Facebook"
                  className="w-4 h-4"
                />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 hover:scale-110 transition"
              >
                <img
                  src="images/icons/instagram.jpg"
                  alt="Instagram"
                  className="w-4 h-4"
                />
              </a>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}