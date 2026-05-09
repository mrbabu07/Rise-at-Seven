import 'core-js/stable'
import React from 'react'
import { createRoot } from 'react-dom/client'
import Alpine from 'alpinejs'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'swiper/css'
import './styles/global.css'
import { SimpleApp } from './app/SimpleApp.jsx'

window.Alpine = Alpine
Alpine.start()

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleApp />
  </React.StrictMode>,
)
