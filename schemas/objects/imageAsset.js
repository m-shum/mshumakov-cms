import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'imageAsset',
  title: 'Image',
  type: 'image',
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
  ],
  options: { metadata: ['dimensions'] },
})
