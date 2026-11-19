import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./i18n"
import Head from "./Head/Head"


createRoot(document.body!).render(
    <StrictMode>
        <Head/>
        <App />
    </StrictMode>
)
