Deployment checklist (short):
1) Set env vars in Vercel: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_ADSENSE_CLIENT, NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, STRIPE_SECRET_KEY
2) Run the SQL in README.md in Supabase SQL editor to create messages/views/clicks tables
3) Add AdSense script to app/layout.js or AdsPlaceholder
4) For live streaming integrate a provider (e.g. Mux, Livepeer) or implement WebRTC
5) Test locally: npm install && npm run dev
6) Deploy to Vercel. If build fails, send full build log and I will patch immediately.
