import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HelloWorldComponent from './components/HelloWorldComponent.jsx'
import EventsComponents from './components/EventsComponents.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <EventsComponents />
  </StrictMode>,
)
