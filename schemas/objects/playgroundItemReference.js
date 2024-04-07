import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'playgroundItemReference',
  title: 'Playground Item',
  type: 'object',
  fields: [
    defineField({
      name: 'playgroundItem',
      type: 'reference',
      title: 'Playground Item',
      to: [{ type: 'playgroundItem' }],
    }),
  ],
  preview: {
    select: {
      title: 'playgroundItem.title',
      subtitle: 'playgroundItem.slug.current',
      media: 'playgroundItem.cover',
    },
  },
})
