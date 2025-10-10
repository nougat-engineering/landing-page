import { ImageResponse } from 'next/og'
import { siteConfig } from './lib/seo'

export const dynamic = 'force-static'

export const alt = siteConfig.title
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          backgroundImage:
            'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          <h1
            style={{
              fontSize: '80px',
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #fff 0%, #888 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            {siteConfig.title}
          </h1>

          <p
            style={{
              fontSize: '32px',
              color: '#aaa',
              textAlign: 'center',
              maxWidth: '900px',
              marginTop: '0',
            }}
          >
            {siteConfig.description}
          </p>

          <div
            style={{
              display: 'flex',
              marginTop: '40px',
              padding: '12px 32px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <span
              style={{
                fontSize: '24px',
                color: '#fff',
                fontWeight: 'bold',
              }}
            >
              {siteConfig.name}
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
