import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const products = defineCollection({
  loader: file("src/content/products/products.yaml"),
  schema: ({image}) => 
    z.object({
      coverImage: image(),
      displayName: z.string(),
      description: z.string().optional()
    })
});

export const collections = {
  products
};