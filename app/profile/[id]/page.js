import ChatBox from '../../../components/ChatBox'
export default function Profile({ params }){ const { id } = params; return (<div className="p-6 max-w-4xl mx-auto"><h2 className="text-2xl mb-2">Profile: {id}</h2><p className="text-sm text-gray-400">User bio and posts placeholder.</p><div className="mt-4"><ChatBox /></div></div>) }
