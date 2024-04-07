import { defineType } from 'sanity'

const services = ['email', 'github', 'twitter', 'instagram']

export default defineType({
  name: 'contactLinks',
  title: 'Contact',
  type: 'object',
  fields: services.map((name) => ({
    name,
    title: name,
    type: 'url',
    validation: (Rule) =>
      Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel'],
      }),
  })),
})
