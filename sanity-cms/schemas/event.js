export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required()
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'text',
      rows: 6,
      description: 'Detailed description for the event modal'
    },
    {
      name: 'date',
      title: 'Event Date',
      type: 'datetime',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'endDate',
      title: 'End Date (Optional)',
      type: 'datetime',
      description: 'For multi-day events'
    },
    {
      name: 'isRecurring',
      title: 'Recurring Event',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'recurrencePattern',
      title: 'Recurrence Pattern',
      type: 'string',
      description: 'e.g., "Every Wednesday", "Monthly", "Weekly"',
      hidden: ({document}) => !document?.isRecurring
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'reference',
      to: [{type: 'venue'}],
      validation: (Rule) => Rule.required()
    },
    {
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
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
      name: 'registrationRequired',
      title: 'Registration Required',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'registrationUrl',
      title: 'Registration URL',
      type: 'url',
      hidden: ({document}) => !document?.registrationRequired
    },
    {
      name: 'maxAttendees',
      title: 'Maximum Attendees',
      type: 'number',
      hidden: ({document}) => !document?.registrationRequired
    },
    {
      name: 'featured',
      title: 'Featured Event',
      type: 'boolean',
      description: 'Mark as featured to display prominently',
      initialValue: false
    },
    {
      name: 'visible',
      title: 'Visible on Website',
      type: 'boolean',
      description: 'Uncheck to hide this event from the website',
      initialValue: true
    }
  ],
  orderings: [
    {
      title: 'Date, New',
      name: 'dateDesc',
      by: [
        {field: 'date', direction: 'desc'}
      ]
    },
    {
      title: 'Date, Old',
      name: 'dateAsc',
      by: [
        {field: 'date', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      venue: 'venue.name',
      media: 'image'
    },
    prepare(selection) {
      const {venue, date} = selection
      const dateStr = date ? new Date(date).toLocaleDateString() : 'No date'
      return Object.assign({}, selection, {
        subtitle: venue && date ? `${venue} • ${dateStr}` : 'No venue or date'
      })
    }
  }
}