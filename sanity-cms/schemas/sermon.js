export default {
  name: 'sermon',
  title: 'Sermon',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Sermon Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'speaker',
      title: 'Speaker',
      type: 'reference',
      to: [{type: 'speaker'}],
      validation: (Rule) => Rule.required()
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'series',
      title: 'Series',
      type: 'string',
      description: 'Name of the sermon series (optional)'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    },
    {
      name: 'scripture',
      title: 'Scripture Reference',
      type: 'string',
      description: 'e.g., John 3:16, Matthew 5:1-12'
    },
    {
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      description: 'Full YouTube URL (any format: watch, youtu.be, embed)'
    },
    {
      name: 'youtubeId',
      title: 'YouTube Video ID',
      type: 'string',
      description: 'YouTube video ID (will be extracted automatically from URL if provided)'
    },
    {
      name: 'thumbnail',
      title: 'Custom Thumbnail',
      type: 'image',
      description: 'Optional custom thumbnail (YouTube thumbnail will be used if not provided)',
      options: {
        hotspot: true
      }
    },
    {
      name: 'audioUrl',
      title: 'Audio URL',
      type: 'url',
      description: 'Link to audio version (optional)'
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'email'
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string'
        }
      ]
    },
    {
      name: 'featured',
      title: 'Featured Sermon',
      type: 'boolean',
      description: 'Mark as featured to display prominently',
      initialValue: false
    }
  ],
  orderings: [
    {
      title: 'Date, New',
      name: 'dateDesc',
      by: [
        {field: 'date', direction: 'desc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      speaker: 'speaker.name',
      date: 'date',
      media: 'thumbnail'
    },
    prepare(selection) {
      const {speaker, date} = selection
      return Object.assign({}, selection, {
        subtitle: speaker && date ? `${speaker} • ${date}` : 'No speaker or date'
      })
    }
  }
}