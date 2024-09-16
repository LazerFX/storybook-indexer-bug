import type { StorybookConfig } from "@storybook/vue3-vite";
import type { Indexer, IndexInput } from "@storybook/types";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.teststories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  experimental_indexers: async (existingIndexers) : Promise<Indexer[]> => {
    const customIdx: Indexer = {
      test: /teststories\.ts?$/,
      createIndex: async (filename, opts): Promise<IndexInput[]> => {
        debugger;
        return [];
      }
    }
    return [...(existingIndexers || []), customIdx];
  }
};
export default config;
