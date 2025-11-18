import Link from 'next/link'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to AllNow</h1>
        <p className="mb-6">All-in-one content platform: videos, live, music, gaming, chat and monetization.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/live"><a className="p-4 bg-gray-800 rounded">Live</a></Link>
          <Link href="/gaming"><a className="p-4 bg-gray-800 rounded">Gaming</a></Link>
          <Link href="/explore"><a className="p-4 bg-gray-800 rounded">Explore</a></Link>
        </div>
      </main>
    </div>
  )
}
