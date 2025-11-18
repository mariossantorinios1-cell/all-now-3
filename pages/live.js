import Header from '../components/Header'

export default function Live(){
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl">Live Streams</h1>
        <p className="mt-2">List of live streams (use a streaming provider or WebRTC for real live TV).</p>
      </main>
    </div>
  )
}
