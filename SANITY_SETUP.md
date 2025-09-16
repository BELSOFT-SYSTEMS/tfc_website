# Sanity CMS Setup Guide for TFC Website

This guide will help you set up Sanity CMS for managing sermons and events on The Father's Church website.

## Prerequisites

- Node.js 18+ installed
- Sanity account (sign up at https://sanity.io)

## Step 1: Create a Sanity Project

1. Go to https://sanity.io and sign up or log in
2. Create a new project:
   - Choose a project name (e.g., "TFC Website")
   - Choose a dataset name (use "production")
   - Note down your **Project ID** - you'll need this

## Step 2: Configure Project Settings

1. Update the project ID in these files:
   - `sanity-cms/sanity.config.js` - Replace `'your-project-id'` with your actual project ID
   - `sanity-cms/sanity.cli.js` - Replace `'your-project-id'` with your actual project ID
   - `src/lib/sanity.js` - Replace `'your-project-id'` with your actual project ID

## Step 3: Install Sanity Studio Dependencies

```bash
cd sanity-cms
npm install
```

## Step 4: Set up CORS

1. Go to your Sanity project dashboard at https://sanity.io/manage
2. Navigate to your project
3. Go to "API" section
4. Under "CORS Origins", add:
   - `http://localhost:3000` (for local development)
   - Your production domain (e.g., `https://yourwebsite.com`)

## Step 5: Deploy Sanity Studio

```bash
cd sanity-cms
npm run deploy
```

This will give you a studio URL like `https://your-project-id.sanity.studio`

## Step 6: Add Initial Content

### Create Default Venue
1. Go to your Sanity Studio
2. Create a new "Venue" document:
   - **Name**: The Father's Church
   - **Address**: Your church address
   - **City**: Jahi, Abuja
   - **Default Venue**: Check this box

### Create Default Speaker
1. Create a new "Speaker" document:
   - **Name**: Your pastor's name
   - **Title**: Lead Pastor
   - **Bio**: Pastor biography
   - **Main Pastor**: Check this box
   - **Photo**: Upload pastor's photo

### Add Your First Sermon
1. Create a new "Sermon" document:
   - **Title**: Your sermon title
   - **Speaker**: Select the speaker you created
   - **Date**: Sermon date
   - **Description**: Brief description
   - **YouTube URL**: Full YouTube URL (any format works)
   - **Scripture**: Bible reference
   - **Contact**: Email and phone

### Add Your First Event
1. Create a new "Event" document:
   - **Title**: Event name
   - **Description**: Short description
   - **Date**: Event date and time
   - **Venue**: Select the venue you created
   - **Image**: Upload event image
   - **Visible on Website**: Check this box

## Step 7: Content Management Tips

### YouTube URLs
The system supports all YouTube URL formats:
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`

### Image Management
- Use high-quality images (minimum 800x600px)
- Event images work best at 16:9 aspect ratio
- Speaker photos work best as square/portrait

### Content Organization
- Use the "Featured" option to highlight important sermons/events
- Set "Visible on Website" to false to hide events temporarily
- Use recurring events for regular programs

## Troubleshooting

### "Connection Error" Messages
1. Check that your project ID is correct in all config files
2. Verify CORS settings include your domain
3. Ensure content is published (not just saved as draft)

### No Content Showing
1. Make sure "Visible on Website" is checked for events
2. Verify content is published, not draft
3. Check browser console for error messages

### YouTube Videos Not Embedding
1. Ensure YouTube URL is complete and valid
2. Check that video is public (not private/unlisted)
3. Try different YouTube URL formats

## Content Schema Reference

### Sermon Fields
- **Title** (required): Sermon title
- **Speaker** (required): Reference to speaker
- **Date** (required): Date of sermon
- **Series**: Sermon series name
- **Description**: Detailed description
- **Scripture**: Bible reference
- **YouTube URL**: Video URL
- **Thumbnail**: Custom thumbnail (optional)
- **Audio URL**: Audio version link
- **Contact**: Email and phone
- **Featured**: Highlight this sermon

### Event Fields
- **Title** (required): Event name
- **Description** (required): Short description
- **Long Description**: Detailed description for modal
- **Date** (required): Event date/time
- **End Date**: For multi-day events
- **Recurring**: Check for recurring events
- **Recurrence Pattern**: Description (e.g., "Every Wednesday")
- **Venue** (required): Reference to venue
- **Image** (required): Event image
- **Contact**: Email and phone
- **Registration Required**: Check if registration needed
- **Registration URL**: Link to registration
- **Max Attendees**: Attendee limit
- **Featured**: Highlight this event
- **Visible**: Show/hide on website

### Speaker Fields
- **Name** (required): Speaker's full name
- **Title**: Position/role
- **Bio**: Biography
- **Photo**: Profile photo
- **Main Pastor**: Default selection

### Venue Fields
- **Name** (required): Venue name
- **Address**: Full address
- **City**: City name
- **Capacity**: Maximum capacity
- **Default**: Default selection

## Support

For technical issues:
1. Check the browser console for error messages
2. Verify all configuration steps were completed
3. Test with sample content first
4. Ensure internet connection is stable

The website includes fallback content, so it will continue working even if Sanity is temporarily unavailable.