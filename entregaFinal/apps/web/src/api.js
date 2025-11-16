export async function fetchHello() {
const base = import.meta.env.VITE_API_URL || ''
const url = base + '/api/hello'
const res = await fetch(url)
if (!res.ok) throw new Error('fetch error')
return res.json()
}