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
      name: 'targetAudience',
      title: 'Target Audience / Ministry',
      type: 'string',
      description: 'Select which ministry or audience this event is for',
      options: {
        list: [
          { title: 'General / All Ministries', value: 'general' },
          { title: 'Ambassadors (Youth)', value: 'ambassadors' },
          { title: 'Eden (Kids)', value: 'eden' },
          { title: 'Enugu Campus', value: 'enugu' },
          { title: 'Evangelism', value: 'evangelism' },
          { title: 'Freedom Fellowship', value: 'freedom-fellowship' },
          { title: 'Governors (Young Adults)', value: 'governors' },
          { title: 'Joyforce Academy', value: 'joyforce' },
          { title: 'Kingdom Ladies', value: 'kingdom-ladies' },
          { title: 'Lightbearer', value: 'lightbearer' },
          { title: 'Mpape Campus', value: 'mpape' },
          { title: 'Prayer Ministry', value: 'prayer-ministry' },
          { title: 'Queens (Ladies)', value: 'queens' }
        ],
        layout: 'dropdown'
      },
      initialValue: 'general',
      validation: (Rule) => Rule.required()
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
      targetAudience: 'targetAudience',
      media: 'image'
    },
    prepare(selection) {
      const {venue, date, targetAudience} = selection
      const dateStr = date ? new Date(date).toLocaleDateString() : 'No date'
      const audienceMap = {
        'general': 'General',
        'eden': 'Eden (Kids)',
        'joyforce': 'Joyforce',
        'ambassadors': 'Ambassadors',
        'governors': 'Governors',
        'queens': 'Queens',
        'kingdom-ladies': 'Kingdom Ladies',
        'lightbearers': 'Lightbearers',
        'prayer-ministry': 'Prayer Ministry',
        'evangelism': 'Evangelism',
        'marriage-course': 'Marriage Course',
        'believers-foundation': 'Believers Foundation',
        'freedom-fellowship': 'Freedom Fellowship',
        'mpape': 'Mpape Campus',
        'enugu': 'Enugu Campus'
      }
      const audienceLabel = audienceMap[targetAudience] || targetAudience || 'General'

      return Object.assign({}, selection, {
        subtitle: `${audienceLabel} • ${venue || 'No venue'} • ${dateStr}`
      })
    }
  }
}