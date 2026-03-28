import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    link: z.string().url().optional(),
    github: z.string().url().optional(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    company: z.string(),
    period: z.string(),
    role: z.string(),
  }),
});

const blogs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blogs" }),
  schema: z.object({
    title: z.string().optional(),
    date: z.string().optional(),
    excerpt: z.string().optional(),
  }),
});

export const collections = { projects, experience, blogs };
