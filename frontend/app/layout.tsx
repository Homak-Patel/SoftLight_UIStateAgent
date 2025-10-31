import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agent B - UI State Capture',
  description: 'Production-grade UI state capture agent',
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
