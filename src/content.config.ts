import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const project = defineCollection({
  // Load Markdown in the `src/content/blog/` directory.
  loader: glob({ base: "./src/projects", pattern: "**/*.md" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { project };
