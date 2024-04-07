import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'playgroundItemsArray',
  title: 'Playground Items',
  type: 'document',
  fields: [
    defineField({
      name: 'playgroundItems',
      title: 'Playground Items',
      type: 'array',
      of: [{ type: 'playgroundItemReference' }],
    }),
  ],
  preview: {
    select: {
      reference: 'playgroundItemReference',
    },
  },
})
