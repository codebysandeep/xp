import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    featuredImage: z.string().optional(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  pages,
  posts,
  services,
};
