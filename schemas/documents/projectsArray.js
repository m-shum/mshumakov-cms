import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'projectsArray',
  title: 'Projects Array',
  type: 'document',
  fields: [
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{ type: 'projectReference' }],
    }),
  ],
  preview: {
    select: {
      reference: 'projectReference',
    },
  },
})
