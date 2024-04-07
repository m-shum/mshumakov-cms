import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'journalEntryReference',
  title: 'Journal Entry',
  type: 'object',
  fields: [
    defineField({
      name: 'journalEntry',
      type: 'reference',
      title: 'Journal Entry',
      to: [{ type: 'journalEntry' }],
    }),
  ],
  preview: {
    select: {
      title: 'journalEntry.title',
      subtitle: 'journalEntry.slug.current',
      media: 'journalEntry.cover',
    },
  },
})
