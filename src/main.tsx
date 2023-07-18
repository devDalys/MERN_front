import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {GlobalProviders} from "./components/Providers";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalProviders>
            <App/>
        </GlobalProviders>
    </React.StrictMode>,
)
