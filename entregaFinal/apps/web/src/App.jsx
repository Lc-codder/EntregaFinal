import React, { useEffect, useState } from 'react'
import { fetchHello } from './api'


export default function App() {
const [msg, setMsg] = useState('carregando...')
const [offline, setOffline] = useState(!navigator.onLine)


useEffect(() => {
async function load() {
try {
const r = await fetchHello()
setMsg(r.msg)
} catch (e) {
setMsg('Erro ao consultar API')
}
}
load()


function onOff() { setOffline(!navigator.onLine) }
window.addEventListener('online', onOff)
window.addEventListener('offline', onOff)
return () => { window.removeEventListener('online', onOff); window.removeEventListener('offline', onOff) }
}, [])


return (
<main>
<header>
<h1>Bootcamp PWA</h1>
<p data-testid="status">{offline ? 'Offline' : 'Online'}</p>
</header>
<section>
<h2 data-testid="title">{msg}</h2>
<button onClick={() => location.reload()}>Recarregar</button>
</section>
<footer>
<small>Consumindo API: <code data-testid="api-url">{import.meta.env.VITE_API_URL || 'env não definida'}</code></small>
</footer>
</main>
)
}