import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luxe Jewelry - Exquisite Handcrafted Jewelry',
  description: 'Discover our collection of exquisite handcrafted jewelry pieces. From elegant necklaces to stunning rings, each piece tells a unique story.',
  keywords: 'jewelry, luxury, handcrafted, rings, necklaces, earrings, bracelets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
