import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

export default defineConfig({
  title: 'portfolio-cms',
  projectId: 'nzcunbcl',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [],
  },
})
