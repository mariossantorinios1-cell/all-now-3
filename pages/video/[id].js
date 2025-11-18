import { useRouter } from 'next/router'
import Header from '../../components/Header'

export default function Video(){
  const router = useRouter()
  const { id } = router.query
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl">Video {id}</h2>
        <div className="mt-4 bg-black p-4 rounded">Player placeholder for video {id}</div>
        <section className="mt-6">
          <h3 className="text-xl">Comments</h3>
          <p className="text-sm text-gray-400">Comments area (connect to Firestore for real comments)</p>
        </section>
      </main>
    </div>
  )
}
