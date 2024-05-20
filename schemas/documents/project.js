import { defineType, defineArrayMember, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
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
      name: 'siteLink',
      title: 'Link to Site',
      type: 'url',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'string',
    }),
    defineField({
      name: 'myRoles',
      title: 'My Roles',
      type: 'string',
    }),
    defineField({
      name: 'designedBy',
      title: 'Designed By',
      type: 'object',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'url', title: 'link', type: 'url' },
      ],
    }),
    defineField({
      name: 'developedBy',
      title: 'Developed By',
      type: 'object',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'url', title: 'link', type: 'url' },
      ],
    }),
    defineField({
      name: 'selectColor',
      title: 'Select Color',
      type: 'color',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'portableText',
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'image',
      options: { metadata: ['dimensions'] },
      fields: [
        defineField({
          name: 'background',
          title: 'Background',
          type: 'image',
        }),
      ],
    }),
    defineField({
      name: 'assets',
      title: 'Assets',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { metadata: ['dimensions'] },
          fields: [
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
            defineField({
              name: 'assetGroup',
              title: 'Asset Group',
              type: 'number',
            }),
            defineField({
              name: 'isMobile',
              title: 'Mobile',
              type: 'boolean',
            }),
            defineField({
              name: 'isFullBleed',
              title: 'Full Bleed',
              type: 'boolean',
            }),
            defineField({
              name: 'hasFrame',
              title: 'Framed',
              type: 'boolean',
            }),
            defineField({
              name: 'frameColor',
              title: 'Frame Color',
              type: 'color',
            }),
            defineField({
              name: 'background',
              title: 'Background',
              type: 'image',
            }),
          ],
        }),
        defineArrayMember({
          name: 'video',
          title: 'Video',
          type: 'file',
          fields: [
            defineField({
              name: 'video_sm',
              title: 'Video – Small',
              type: 'file',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
            defineField({
              name: 'assetGroup',
              title: 'Asset Group',
              type: 'number',
            }),
            defineField({
              name: 'isMobile',
              title: 'Mobile',
              type: 'boolean',
            }),
            defineField({
              name: 'isFullBleed',
              title: 'Full Bleed',
              type: 'boolean',
            }),
            defineField({
              name: 'hasFrame',
              title: 'Framed',
              type: 'boolean',
            }),
            defineField({
              name: 'frameColor',
              title: 'Frame Color',
              type: 'color',
            }),
            defineField({
              name: 'width',
              title: 'Width',
              type: 'number',
            }),
            defineField({
              name: 'height',
              title: 'Height',
              type: 'number',
            }),
            defineField({
              name: 'background',
              title: 'Background',
              type: 'image',
            }),
          ],
        }),
      ],
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
