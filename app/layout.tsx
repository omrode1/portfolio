import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Om Rode - Computer Vision Engineer',
  description: 'Personal portfolio of Om Rode, Computer Vision Engineer specializing in ML pipelines, RTSP systems, and robotics.',
  keywords: ['Computer Vision', 'Machine Learning', 'Robotics', 'YOLO', 'PyTorch', 'Next.js'],
  authors: [{ name: 'Om Rode' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
