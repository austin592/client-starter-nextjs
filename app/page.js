export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-2xl text-center space-y-8">
        <div className="inline-block px-4 py-1.5 rounded-full bg-black text-white text-sm font-medium">
          Deployed with Claude + Vercel
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
          Your Client Site Starts Here
          <span className="block text-gray-400">Built. Managed. Shipped.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-lg mx-auto">
          This is an agency-ready Next.js starter. Claude writes the code, GitHub manages it, Vercel ships it live.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <a href="https://github.com/austin592/client-starter-nextjs" className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
            View on GitHub
          </a>
          <a href="#how" className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:border-gray-400 transition-colors">
            How It Works
          </a>
        </div>
      </div>
    </main>
  )
}
