import productsData from "@/data/productsData";
import locationsData from "@/data/locationsData";

const siteUrl = "https://www.lemnsiflacari.ro";

const articleSlugs = [
  "ghid-alegere-lemne",
  "cum-depozitam-lemnele",
  "cat-lemn-trebuie-sa-cumpar",
  "aprinderea-mentinerea-focului",
  "cum-sa-eviti-lemnul-de-calitate-slaba",
  "sustenabilitate-si-ecologie",
  "istoria-lemnului-de-foc",
];

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const productRoutes = Object.keys(productsData).map((slug) => ({
    url: `${siteUrl}/produse/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const locationRoutes = Object.keys(locationsData).map((slug) => ({
    url: `${siteUrl}/locatii/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const articleRoutes = articleSlugs.map((slug) => ({
    url: `${siteUrl}/articole/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes, ...locationRoutes, ...articleRoutes];
}
