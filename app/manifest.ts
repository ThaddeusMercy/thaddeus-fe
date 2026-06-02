import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mercy Thaddeus — AI educator · Attention Factory',
    short_name: 'Mercy Thaddeus',
    description:
      'Co-founder & CPO at Attention Factory. AI educator — corporate AI training, consulting, custom builds, and technical content.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['technology', 'education', 'developer', 'portfolio', 'web3', 'artificial intelligence'],
    lang: 'en',
    dir: 'ltr',
    orientation: 'portrait-primary',
    scope: '/',
    id: 'mercy-thaddeus-portfolio',
  }
}