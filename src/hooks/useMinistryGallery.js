import { useState, useEffect } from 'react'
import { getMinistryGallery } from '../lib/sanity'

// Fallback data for ministries during transition
const fallbackData = {
  lightbearer: [
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-3_ln0foj.jpg',
      description: 'Description for image 1'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-5_yfhrji.jpg',
      description: 'Description for image 2'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-6_d7cnxv.jpg',
      description: 'Description for image 3'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-2_zgt3zv.jpg',
      description: 'Description for image 4'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-1_rtpjig.jpg',
      description: 'Description for image 5'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-4_khb1et.jpg',
      description: 'Description for image 6'
    }
  ],
  ambassadors: [
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-3_ln0foj.jpg',
      description: 'Description for image 1'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-5_yfhrji.jpg',
      description: 'Description for image 2'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-6_d7cnxv.jpg',
      description: 'Description for image 3'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-2_zgt3zv.jpg',
      description: 'Description for image 4'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-1_rtpjig.jpg',
      description: 'Description for image 5'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-4_khb1et.jpg',
      description: 'Description for image 6'
    }
  ],
  'freedom-fellowship': [
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-3_ln0foj.jpg',
      description: 'Description for image 1'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-5_yfhrji.jpg',
      description: 'Description for image 2'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-6_d7cnxv.jpg',
      description: 'Description for image 3'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-2_zgt3zv.jpg',
      description: 'Description for image 4'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-1_rtpjig.jpg',
      description: 'Description for image 5'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-4_khb1et.jpg',
      description: 'Description for image 6'
    }
  ],
  queens: [
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-3_ln0foj.jpg',
      description: 'Description for image 1'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-5_yfhrji.jpg',
      description: 'Description for image 2'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-6_d7cnxv.jpg',
      description: 'Description for image 3'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-2_zgt3zv.jpg',
      description: 'Description for image 4'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-1_rtpjig.jpg',
      description: 'Description for image 5'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-4_khb1et.jpg',
      description: 'Description for image 6'
    }
  ],
  governors: [
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-3_ln0foj.jpg',
      description: 'Description for image 1'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-5_yfhrji.jpg',
      description: 'Description for image 2'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-6_d7cnxv.jpg',
      description: 'Description for image 3'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-2_zgt3zv.jpg',
      description: 'Description for image 4'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-1_rtpjig.jpg',
      description: 'Description for image 5'
    },
    {
      url: 'https://res.cloudinary.com/dbnrmhckx/image/upload/v1715248400/TFC/lightbearers/light-4_khb1et.jpg',
      description: 'Description for image 6'
    }
  ]
}

export function useMinistryGallery(ministryName) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        console.log(`🎯 [Hook] Fetching gallery for ministry: ${ministryName}`)
        
        // Try to get data from Sanity
        const gallery = await getMinistryGallery(ministryName)
        
        if (gallery && gallery.images && gallery.images.length > 0) {
          // Transform Sanity data to match expected format
          const transformedData = gallery.images.map(item => ({
            url: item.image?.asset?.url,
            description: item.description || '',
            _sanitySource: true
          }))
          
          console.log(`✅ [Hook] Successfully loaded ${transformedData.length} images from Sanity for ${ministryName}`)
          setData(transformedData)
        } else {
          // Fall back to static data if no Sanity data exists
          const fallback = fallbackData[ministryName] || []
          console.log(`⚠️ [Hook] Using fallback data for ${ministryName}: ${fallback.length} images`)
          setData(fallback)
        }
      } catch (err) {
        console.error(`❌ [Hook] Error fetching ministry gallery for ${ministryName}:`, err)
        setError(err)
        
        // Fall back to static data on error
        const fallback = fallbackData[ministryName] || []
        setData(fallback)
      } finally {
        setLoading(false)
      }
    }

    if (ministryName) {
      fetchData()
    } else {
      setLoading(false)
      setError(new Error('No ministry name provided'))
    }
  }, [ministryName])

  return { data, loading, error }
}