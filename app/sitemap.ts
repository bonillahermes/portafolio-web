import { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/mdx"
import { getAllProjects } from "@/lib/lab"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const projects = getAllProjects()

  const blogEntries = posts.map((post) => ({
    url: `https://hermesbonilla.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const labEntries = projects.map((project) => ({
    url: `https://hermesbonilla.com/laboratorio/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: "https://hermesbonilla.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://hermesbonilla.com/laboratorio",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://hermesbonilla.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://hermesbonilla.com/brochure",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://hermesbonilla.com/legal",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...labEntries,
    ...blogEntries,
  ]
}
