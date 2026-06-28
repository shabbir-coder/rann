import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rannutsavgujarat.net";

  const routes = [
    "",
    "/packages",
    "/gallery",
    "/activities",
    "/attractions",
    "/special-dates",
    "/accommodation",
    "/contact-us",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}