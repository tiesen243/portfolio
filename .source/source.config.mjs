// source.config.ts
import { remarkImage } from "fumadocs-core/mdx-plugins";
import { remarkInstall } from "fumadocs-docgen";
import {
  defineConfig,
  defineDocs,
  frontmatterSchema
} from "fumadocs-mdx/config";
import { z } from "zod";
var docs = defineDocs({
  dir: "content/blogs",
  docs: {
    // options for `doc` collection
    schema: frontmatterSchema.extend({
      publishedAt: z.date(),
      tags: z.array(z.string())
    })
  },
  meta: {
    // options for `meta` collection
  }
});
var source_config_default = defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkInstall, remarkImage],
    rehypeCodeOptions: {
      themes: {
        light: "github-light",
        dark: "github-dark-default"
      }
    }
  }
});
export {
  source_config_default as default,
  docs
};
