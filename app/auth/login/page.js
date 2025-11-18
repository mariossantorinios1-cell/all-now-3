'use client'
import { useState } from 'react'
import { supabase } from '../../../lib/supabase'

export default function Login(){
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const send = async ()=>{
    const { error } = await supabase.auth.signInWithOtp({ email })
    setMsg(error ? error.message : 'Check your email for login link.')
  }
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Login</h2>
      <input className="w-full p-2 mb-2 bg-gray-900 rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <button className="px-4 py-2 bg-yellow-500 rounded" onClick={send}>Send Login Link</button>
      <p className="mt-2 text-sm text-gray-400">{msg}</p>
    </div>
  )
}
