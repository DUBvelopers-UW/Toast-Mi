import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'bahnmi',
  title: 'Bahn Mi',
  type: 'document',
  _type: 'bahnmi',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    })
  ],
})