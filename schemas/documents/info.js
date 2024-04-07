import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'info',
  title: 'Info',
  type: 'document',
  fields: [
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'portableText',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'image',
      options: {
        metadata: ['dimensions'],
      },
    }),
    defineField({
      name: 'contactLinks',
      title: 'Contact Links',
      type: 'contactLinks',
    }),
    defineField({
      name: 'resume',
      title: 'Resume',
      type: 'file',
      accept: '.pdf',
    }),
  ],
})
