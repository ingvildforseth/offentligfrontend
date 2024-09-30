import { z, defineCollection } from "astro:content";

/*
 How to define schemas:
 See: https://docs.astro.build/en/guides/content-collections/#defining-datatypes-with-zod
*/

const eventsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    location: z.string(),
  }),
});

// Keys should match collection directory name in "src/content"
export const collections = {
  events: eventsCollection,
};
