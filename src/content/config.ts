import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const products = defineCollection({
  loader: file("src/content/products/products.yaml"),
  schema: ({image}) => 
    z.object({
      name: z.string(),
      coverImage: image()
    })
});

export const collections = {
  products
};