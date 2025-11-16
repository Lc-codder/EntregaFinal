import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'


const root = createRoot(document.getElementById('root'))
root.render(<App />)


// Register service worker in production
if ('serviceWorker' in navigator) {
window.addEventListener('load', () => {
navigator.serviceWorker.register('/src/service-worker.js')
.then(reg => console.log('SW registrado', reg.scope))
.catch(err => console.warn('SW falhou', err))
})
}