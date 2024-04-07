import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'journalEntriesArray',
  title: 'Journal Entries',
  type: 'document',
  fields: [
    defineField({
      name: 'journalEntries',
      title: 'Journal Entries',
      type: 'array',
      of: [{ type: 'journalEntryReference' }],
    }),
  ],
  preview: {
    select: {
      reference: 'journalEntryReference',
    },
  },
})
