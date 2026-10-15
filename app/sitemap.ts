import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://koodu.com.br",
      lastModified: new Date(),
    },
  ];
}