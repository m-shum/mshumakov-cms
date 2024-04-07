import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'
import schemas from './schemas/schema'
import deskStructure from './deskStructure'
import { dashboardTool } from '@sanity/dashboard'
import { media } from 'sanity-plugin-media'
import { muxInput } from 'sanity-plugin-mux-input'

export default defineConfig({
  title: 'portfolio-cms',
  projectId: 'nzcunbcl',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool(),
    colorInput(),
    dashboardTool({}),
    media(),
    muxInput(),
  ],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },
  schema: {
    types: [schemas],
  },
})
