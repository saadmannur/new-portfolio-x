import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import ScrollProgress from "@/components/ScrollProgress";
import { siteConfig } from "@/data/site-config";

export const metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"), // update after deploy
  title: `${siteConfig.name} — ${siteConfig.designation}`,
  description: siteConfig.tagline,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.designation}`,
    description: siteConfig.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollProgress />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}