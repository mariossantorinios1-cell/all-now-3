import Player from '../../components/Player'
import ChatBox from '../../components/ChatBox'

export default function Video({ params }){
  const { id } = params
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl mb-4">Video {id}</h2>
      <Player src={id} />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">Comments placeholder</div>
        <div><ChatBox /></div>
      </div>
    </div>
  )
}
