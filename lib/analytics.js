export function trackEvent(name, data) {
  // Hook this to Google Analytics / Firebase Analytics
  if (typeof window !== 'undefined') {
    // placeholder
    console.log('[ANALYTICS]', name, data)
  }
}
