import Link from 'next/link'
export default function Header(){
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        <Link href="/"><a className="text-2xl font-bold">AllNow</a></Link>
        <nav className="space-x-4">
          <Link href="/gaming"><a>Gaming</a></Link>
          <Link href="/live"><a>Live</a></Link>
          <Link href="/profile/me"><a>Profile</a></Link>
        </nav>
      </div>
    </header>
  )
}
