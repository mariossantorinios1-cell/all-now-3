'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export default function ChatBox(){
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')

  useEffect(()=>{
    const fetchMessages = async ()=>{
      try{
        const { data } = await supabase.from('messages').select('*').order('created_at', { ascending: true }).limit(200)
        setMessages(data || [])
      }catch(e){
        console.log('fetch error', e)
      }
    }
    fetchMessages()

    const subscription = supabase.channel('public:messages').on('postgres_changes', { event: '*', schema: 'public', table: 'messages' }, payload => {
      fetchMessages()
    }).subscribe()

    return ()=> { supabase.removeChannel(subscription) }
  },[])

  const send = async ()=>{
    if(!text) return
    try{
      await supabase.from('messages').insert([{ text }])
      setText('')
    }catch(e){ console.log('send error', e) }
  }

  return (
    <div className="border border-gray-700 p-3 rounded bg-gray-800">
      <div className="h-40 overflow-auto mb-2">
        {messages.map(m=> <div key={m.id} className="py-1">{m.username ? m.username + ': ' : ''}{m.text}</div>)}
      </div>
      <div className="flex gap-2">
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="Type a message" className="flex-1 p-2 bg-gray-900 rounded"/>
        <button onClick={send} className="px-3 py-2 bg-yellow-500 text-black rounded">Send</button>
      </div>
    </div>
  )
}
