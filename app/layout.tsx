import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { OrderFormProvider } from "./contexts/OrderFormContext";
import { Header } from "./ui/Header/Header";
import { Footer } from "./ui/Footer/Footer";
import { OrderFormWrapper } from "./ui/OrderFormWrapper";
import { CookieConsent } from "./ui/CookieConsent/CookieConsent";
import { ScrollToTop } from "./ui/ScrollToTop/ScrollToTop";

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
    <html lang="ru" className={robotoSans.variable}>
      <body className="antialiased">
        <OrderFormProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <OrderFormWrapper />
          <CookieConsent />
          <ScrollToTop />
        </OrderFormProvider>
      </body>
    </html>
  );
}
