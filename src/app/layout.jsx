import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: {
    default: "Pangasinan Heritage Portal",
    template: "%s | Pangasinan Heritage Portal",
  },
  description: "Explore the heritage and culture of Pangasinan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}

          <div className="fixed bottom-6 right-6 z-50">
            <ThemeSwitcher />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
