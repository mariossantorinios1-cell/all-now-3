export async function POST(req){ const body = await req.json(); // { content_id, user_id? }
 // In production save to Supabase 'views' table or analytics
 return new Response(JSON.stringify({ ok:true }), { status:200 }) }
