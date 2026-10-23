
import "./globals.css";
import Navbar from "../components/Navbar";

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
