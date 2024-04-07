import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import schemas from './schemas/schema'

export default defineConfig({
  title: 'portfolio-cms',
  projectId: 'nzcunbcl',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [schemas],
  },
})
