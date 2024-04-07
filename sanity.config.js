import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import schemas from './schemas/schema'
import deskStructure from './deskStructure'

export default defineConfig({
  title: 'portfolio-cms',
  projectId: 'nzcunbcl',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
  ],
  schema: {
    types: [schemas],
  },
})
