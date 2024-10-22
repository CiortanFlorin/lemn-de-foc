import Header from "@/components/header";
import "./globals.css";
import { Rubik } from "next/font/google";
import Footer from "@/components/footer";

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
  title: "Lemn de Foc",
  description: "Cumparati lemn de foc Galati",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.variable} ${rubikBold.variable}`}>
      <body className="font-rubik bg-fireBlack text-white">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}