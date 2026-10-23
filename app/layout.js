
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";

export const metadata = {
  title: {
    default: "KanchanFlow | Manufacturing CRM",
    template: "%s | KanchanFlow",
  },
  description:
    "Manage manufacturing quotations, work orders and sales pipelines with KanchanFlow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        <ParticleBackground />

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
