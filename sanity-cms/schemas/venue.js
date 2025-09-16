export default {
  name: 'venue',
  title: 'Venue',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Venue Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3
    },
    {
      name: 'city',
      title: 'City',
      type: 'string'
    },
    {
      name: 'capacity',
      title: 'Capacity',
      type: 'number'
    },
    {
      name: 'isDefault',
      title: 'Default Venue',
      type: 'boolean',
      description: 'Check if this is the default venue (will be selected by default)',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'city'
    }
  }
}