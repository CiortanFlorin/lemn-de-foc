import Header from "@/components/header";
import "./globals.css";
import { Rubik } from "next/font/google";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react"

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-rubik",
});
const rubikBold = Rubik({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
  variable: "--font-rubik-bold",
});

export const metadata = {
  title: 'Lemn de Foc cu Livrare în Galați, Brăila, Tulcea | Lemn și Flăcări',
  description: 'Cumpără lemne de foc de calitate, inclusiv plop, salcie, și fag, cu livrare rapidă în Galați, Brăila, și Tulcea. Lemn și Flăcări te ajută cu cea mai bună ofertă.',
  verification: {
    google: 'saYFspyXTSvSDjC7Gnz_XwAxkJ8o-aZNC_lC5Lqq7_I',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.variable} ${rubikBold.variable}`}>
      <body className="font-rubik bg-fireBlack text-white">
        <Header></Header>
        {children}
        <Footer></Footer>
        <Analytics mode={'production'} />
      </body>
    </html>
  );
}
