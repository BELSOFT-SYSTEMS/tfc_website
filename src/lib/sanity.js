import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'bgv1t6l8',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

// Helper function to extract YouTube video ID from various URL formats
export function getYouTubeVideoId(url) {
  if (!url) return null

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([^#&?]*)/,
    /youtube\.com\/watch\?.*v=([^#&?]*)/,
    /youtu\.be\/([^#&?]*)/,
    /youtube\.com\/embed\/([^#&?]*)/
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1].substring(0, 11) // YouTube IDs are 11 characters
    }
  }

  return null
}

// Fetch all sermons
export async function getSermons() {
  try {
    return await client.fetch(`
      *[_type == "sermon"] | order(date desc) {
        _id,
        title,
        speaker->{
          name,
          title,
          photo
        },
        date,
        series,
        description,
        scripture,
        youtubeUrl,
        youtubeId,
        thumbnail,
        audioUrl,
        contact,
        featured
      }
    `)
  } catch (error) {
    console.error('Error fetching sermons:', error)
    return []
  }
}

// Fetch all events
export async function getEvents() {
  try {
    console.log('🔧 Sanity client config:', {
      projectId: client.config().projectId,
      dataset: client.config().dataset,
      apiVersion: client.config().apiVersion
    });

    // First try a simple query to test connection and see ALL events
    const testQuery = `*[_type == "event"] { _id, title, visible, _updatedAt }`;
    console.log('🧪 Testing connection and checking ALL events:', testQuery);

    try {
      const testResult = await client.fetch(testQuery);
      console.log('✅ ALL events in Sanity (including drafts):', testResult);
      console.log('📊 Total events found:', testResult.length);

      if (testResult.length > 0) {
        console.log('🔍 Event visibility check:');
        testResult.forEach((event, index) => {
          console.log(`   Event ${index + 1}: "${event.title}" - visible: ${event.visible}`);
        });
      } else {
        console.warn('⚠️ No events found AT ALL. You need to create events in Sanity Studio first!');
      }
    } catch (testError) {
      console.error('❌ Connection test failed:', testError);
      throw new Error(`Sanity connection failed: ${testError.message}`);
    }

    // Now try the full query - treat null/undefined as visible for now
    const query = `*[_type == "event" && (visible == true || !defined(visible))] | order(date asc) {
      _id,
      title,
      description,
      longDescription,
      date,
      endDate,
      isRecurring,
      recurrencePattern,
      targetAudience,
      venue->{
        name,
        address,
        city
      },
      image,
      contact,
      registrationRequired,
      registrationUrl,
      maxAttendees,
      featured,
      visible
    }`;

    console.log('📝 Executing full query:', query);
    const result = await client.fetch(query);
    console.log('✅ Full query result:', result);
    return result;
  } catch (error) {
    console.error('❌ Error in getEvents:', error);
    throw error;
  }
}

// Fetch events by target audience/ministry
export async function getEventsByAudience(targetAudience) {
  try {
    console.log(`🎯 Fetching events for audience: ${targetAudience}`);

    const query = `*[_type == "event" && (visible == true || !defined(visible)) && (targetAudience == $targetAudience || targetAudience == "general")] | order(date asc) {
      _id,
      title,
      description,
      longDescription,
      date,
      endDate,
      isRecurring,
      recurrencePattern,
      targetAudience,
      venue->{
        name,
        address,
        city
      },
      image,
      contact,
      registrationRequired,
      registrationUrl,
      maxAttendees,
      featured,
      visible
    }`;

    const result = await client.fetch(query, { targetAudience });
    console.log(`✅ Found ${result.length} events for ${targetAudience}:`, result);
    return result;
  } catch (error) {
    console.error(`❌ Error fetching events for ${targetAudience}:`, error);
    throw error;
  }
}

// Fetch all speakers
export async function getSpeakers() {
  try {
    return await client.fetch(`
      *[_type == "speaker"] | order(name asc) {
        _id,
        name,
        title,
        bio,
        photo,
        isMainPastor
      }
    `)
  } catch (error) {
    console.error('Error fetching speakers:', error)
    return []
  }
}

// Fetch all venues
export async function getVenues() {
  try {
    return await client.fetch(`
      *[_type == "venue"] | order(name asc) {
        _id,
        name,
        address,
        city,
        capacity,
        isDefault
      }
    `)
  } catch (error) {
    console.error('Error fetching venues:', error)
    return []
  }
}

// Utility function to get image URL from Sanity
export function urlFor(source) {
  if (!source?.asset?._ref) return null

  const ref = source.asset._ref

  // Handle fallback image references (just filenames)
  if (!ref.includes('-')) {
    return `/${ref}`
  }

  const parts = ref.split('-')
  if (parts.length < 3) return null

  const [, id, dimensions, format] = parts
  if (!dimensions || !dimensions.includes('x')) return null

  const [width, height] = dimensions.split('x')

  return `https://cdn.sanity.io/images/${client.config().projectId}/${client.config().dataset}/${id}-${dimensions}.${format}`
}