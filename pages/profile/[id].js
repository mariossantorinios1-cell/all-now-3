import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Profile(){
  const router = useRouter()
  const { id } = router.query
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto p-4">
        <h2 className="text-3xl">Profile: {id}</h2>
        <p className="mt-2">This page is a placeholder for user profile with posts, bio, supports and donate button.</p>
      </main>
      <Footer />
    </div>
  )
}
