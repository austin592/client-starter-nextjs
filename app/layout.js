import './globals.css'

export const metadata = {
  title: 'Client Starter | Built with Next.js',
  description: 'Agency-ready Next.js starter. Claude-managed GitHub to Vercel pipeline.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
