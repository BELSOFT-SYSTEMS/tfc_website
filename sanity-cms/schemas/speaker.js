export default {
  name: 'speaker',
  title: 'Speaker',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'title',
      title: 'Title/Position',
      type: 'string',
      description: 'e.g., Pastor, Elder, Guest Speaker'
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 4
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'isMainPastor',
      title: 'Main Pastor',
      type: 'boolean',
      description: 'Check if this is the main pastor (will be selected by default)',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'photo'
    }
  }
}