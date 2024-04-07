import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'projectReference',
  title: 'Project Item',
  type: 'object',
  fields: [
    defineField({
      name: 'project',
      type: 'reference',
      title: 'Project',
      to: [{ type: 'project' }],
    }),
  ],
  preview: {
    select: {
      title: 'project.title',
      subtitle: 'project.slug.current',
      media: 'project.cover',
    },
  },
})
