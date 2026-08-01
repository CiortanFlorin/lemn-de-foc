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

const siteUrl = "https://www.lemnsiflacari.ro";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Lemn de Foc cu Livrare în Galați, Brăila, Tulcea | Lemn și Flăcări',
  description: 'Cumpără lemne de foc tăiat și crăpat, inclusiv plop, salcie, și fag, cu livrare rapidă în Galați, Brăila, și Tulcea. Lemn și Flăcări te ajută cu cea mai bună ofertă.',
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: "Lemn și Flăcări",
    title: 'Lemn de Foc cu Livrare în Galați, Brăila, Tulcea | Lemn și Flăcări',
    description: 'Cumpără lemne de foc tăiat și crăpat, inclusiv plop, salcie, și fag, cu livrare rapidă în Galați, Brăila, și Tulcea.',
    url: siteUrl,
    images: ["/fireplace-landscape.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lemn de Foc cu Livrare în Galați, Brăila, Tulcea | Lemn și Flăcări',
    description: 'Cumpără lemne de foc tăiat și crăpat, inclusiv plop, salcie, și fag, cu livrare rapidă în Galați, Brăila, și Tulcea.',
    images: ["/fireplace-landscape.webp"],
  },
  verification: {
    google: 'saYFspyXTSvSDjC7Gnz_XwAxkJ8o-aZNC_lC5Lqq7_I',
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Lemn și Flăcări",
  image: `${siteUrl}/fireplace-landscape.webp`,
  url: siteUrl,
  telephone: "+40751518502",
  email: "viorelciortan2@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calea Smârdan nr. 2",
    addressLocality: "Galați",
    addressCountry: "RO",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Galați" },
    { "@type": "AdministrativeArea", name: "Brăila" },
    { "@type": "AdministrativeArea", name: "Tulcea" },
  ],
  priceRange: "RON",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro" className={`${rubik.variable} ${rubikBold.variable}`}>
      <body className="font-rubik bg-fireBlack text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header></Header>
        {children}
        <Footer></Footer>
        <Analytics mode={'production'} />
      </body>
    </html>
  );
}
