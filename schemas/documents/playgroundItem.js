import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'playgroundItem',
  title: 'Playground Item',
  type: 'document',

  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'image',
      options: { metadata: ['dimensions'] },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'cover',
    },
  },
})
