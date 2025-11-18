import Header from '../components/Header'
import Link from 'next/link'

export default function Gaming(){
  const sample = [
    { id: 'val1', title: 'Top Game Clips' },
    { id: 'val2', title: 'New Releases' },
    { id: 'val3', title: 'Indie Highlights' }
  ]
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl">Gaming Hub</h1>
        <ul className="mt-4 space-y-2">
          {sample.map(s => (
            <li key={s.id} className="p-2 bg-gray-800 rounded">
              <Link href={`/video/${s.id}`}><a>{s.title}</a></Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
