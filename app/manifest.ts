import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mercy Thaddeus - Software Engineer',
    short_name: 'Mercy Thaddeus',
    description: 'Software Engineer specializing in React, Next.js, blockchain development, and AI integration. Building innovative software experiences from scribble to unicorn.',
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
    categories: ['technology', 'developer', 'portfolio', 'web3', 'blockchain'],
    lang: 'en',
    dir: 'ltr',
    orientation: 'portrait-primary',
    scope: '/',
    id: 'mercy-thaddeus-portfolio',
  }
}