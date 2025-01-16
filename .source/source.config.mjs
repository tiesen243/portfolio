// source.config.ts
import { remarkInstall } from "fumadocs-docgen";
import {
  defineCollections,
  defineConfig,
  frontmatterSchema,
  metaSchema
} from "fumadocs-mdx/config";
import { z } from "zod";
var docs = defineCollections({
  type: "doc",
  dir: "content/blogs",
  schema: frontmatterSchema.extend({
    publishedAt: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional()
  })
});
var meta = defineCollections({
  type: "meta",
  dir: "content/blogs",
  schema: metaSchema
});
var source_config_default = defineConfig({
  lastModifiedTime: "git",
  generateManifest: true,
  mdxOptions: {
    remarkPlugins: [remarkInstall],
    rehypeCodeOptions: {
      themes: {
        light: "github-light-default",
        dark: "tokyo-night"
      }
    }
  }
});
export {
  source_config_default as default,
  docs,
  meta
};
