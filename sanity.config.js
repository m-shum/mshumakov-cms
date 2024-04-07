import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { dashboardTool } from '@sanity/dashboard'
import { schemaTypes } from './schemas'
import { colorInput } from '@sanity/color-input'
import { media } from 'sanity-plugin-media'
import { codeInput } from '@sanity/code-input'
import deskStructure from './deskStructure'

export default defineConfig({
  name: 'portfolio-cms',
  title: 'portfolio-cms',

  projectId: 'nzcunbcl',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool(),
    dashboardTool(),
    colorInput(),
    media(),
    codeInput(),
  ],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },
  schema: {
    types: schemaTypes,
  },
})
