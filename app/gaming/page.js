import Link from 'next/link'
export default function Gaming(){
  const sample = [{id:'clip1',title:'Top Clips'},{id:'clip2',title:'New Releases'}]
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl mb-4">Gaming Hub</h2>
      <ul className="space-y-2">{sample.map(s=> <li key={s.id} className="p-2 bg-gray-800 rounded"><Link href={'/video/'+s.id}><a>{s.title}</a></Link></li>)}</ul>
    </div>
  )
}
