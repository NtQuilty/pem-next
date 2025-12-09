import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "./components/ClientProviders";
import { Header } from "./ui/Header/Header";
import { Footer } from "./ui/Footer/Footer";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Петроэнергомаш - Лазерная резка и металлообработка",
  description: "Профессиональная лазерная резка металла и металлообработка в Санкт-Петербурге",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={robotoSans.className}>
      <body className="antialiased">
        <ClientProviders>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
