// Simple Tripleseat API client
const BASE_URL = 'https://api.tripleseat.com/v1/leads/create.js'
const PUBLIC_KEY = import.meta.env.VITE_TRIPLESEAT_PUBLIC_KEY

if (!PUBLIC_KEY) {
  throw new Error('Tripleseat public key is not set')
}

export interface TripleseatLeadPayload {
  lead: Record<string, unknown>
  lead_form_id: number
  location_id?: number
}

export async function submitTripleseatLead(data: TripleseatLeadPayload) {
  const url = `${BASE_URL}?public_key=${PUBLIC_KEY}`
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Tripleseat request failed: ${res.status} ${text}`)
  }

  return res.json()
}
