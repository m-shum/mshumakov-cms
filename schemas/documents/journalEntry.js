import { defineType, defineArrayMember, defineField } from 'sanity'
export default defineType({
  name: 'journalEntry',
  title: 'Journal Entry',
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
      name: 'datePublished',
      title: 'Date Published',
      type: 'date',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'image',
      options: { metadata: ['dimensions'] },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'portableText',
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
