import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://koodu.com.br";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/servicos`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/criacao-de-sites`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/loja-virtual`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/landing-pages`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/seo`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
    },
  ];
}