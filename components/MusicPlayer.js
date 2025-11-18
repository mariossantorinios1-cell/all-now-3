'use client'
import { useState } from 'react'
export default function MusicPlayer(){ const [playing,setPlaying]=useState(false); return (<div className="p-4 bg-gray-800 rounded flex items-center gap-4"><div>🎵</div><div>Now playing — placeholder</div><button onClick={()=>setPlaying(!playing)} className="px-3 py-1 bg-yellow-500 rounded">{playing ? 'Pause' : 'Play'}</button></div>) }
