export async function POST(req){ const body = await req.json(); // { target, user_id? }
 return new Response(JSON.stringify({ ok:true }), { status:200 }) }
