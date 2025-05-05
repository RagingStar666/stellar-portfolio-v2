import { defineCollection, z } from "astro:content"

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.union([z.coerce.date(), z.string()]),
    dateEnd: z.union([z.coerce.date(), z.string()]),
    image: z.string().optional(),
    type: z.string().optional(),
  }),
})

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    image: z.string().optional(),
  }),
})

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    image: z.string().optional(),
  }),
})

const legal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
})

const education = defineCollection({
  type: "content",
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    dateStart: z.string(),
    dateEnd: z.string(),
    image: z.string().optional(),
    description: z.string(),
  }),
})

const extracurricular = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    organizer: z.string(),
    role: z.string(),
    date: z.string(),
    period: z.string().optional(),
    image: z.string().optional(),
    description: z.string(),
  }),
})

export const collections = { 
  work, 
  blog, 
  projects, 
  legal, 
  education, 
  extracurricular 
}
