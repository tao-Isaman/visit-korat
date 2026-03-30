import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const langEnum = z.enum(["en", "th", "zh"]);

const attractions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/attractions" }),
  schema: z.object({
    lang: langEnum,
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "temple",
      "historical",
      "nature",
      "museum",
      "market",
      "landmark",
    ]),
    image: z.string(),
    images: z.array(z.string()).optional(),
    address: z.string().optional(),
    openingHours: z.string().optional(),
    admission: z.string().optional(),
    duration: z.string().optional(),
    neighborhood: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const food = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/food" }),
  schema: z.object({
    lang: langEnum,
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "street-food",
      "restaurant",
      "market",
      "cafe",
      "local-dish",
    ]),
    image: z.string(),
    priceRange: z.enum(["$", "$$", "$$$"]).default("$"),
    mustTry: z.array(z.string()).default([]),
    address: z.string().optional(),
    openingHours: z.string().optional(),
    neighborhood: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const neighborhoods = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/neighborhoods" }),
  schema: z.object({
    lang: langEnum,
    title: z.string(),
    description: z.string(),
    image: z.string(),
    highlights: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    lang: langEnum,
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.coerce.date(),
    author: z.string().default("Visit Korat"),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const festivals = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/festivals" }),
  schema: z.object({
    lang: langEnum,
    title: z.string(),
    description: z.string(),
    image: z.string(),
    month: z.number().min(1).max(12),
    dateRange: z.string(),
    location: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { attractions, food, neighborhoods, blog, festivals };
