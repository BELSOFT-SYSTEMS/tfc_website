export default {
  name: 'ministryGallery',
  title: 'Ministry Gallery',
  type: 'document',
  fields: [
    {
      name: 'ministryName',
      title: 'Ministry Name', 
      type: 'string',
      options: {
        list: [
          {title: 'Lightbearer', value: 'lightbearer'},
          {title: 'Ambassadors', value: 'ambassadors'},
          {title: 'Freedom Fellowship', value: 'freedom-fellowship'},
          {title: 'Queens', value: 'queens'},
          {title: 'Governors', value: 'governors'}
        ]
      }
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true}
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string'
            },
            {
              name: 'order',
              title: 'Display Order',
              type: 'number'
            }
          ]
        }
      ]
    }
  ]
}