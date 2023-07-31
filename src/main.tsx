import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {GlobalProviders} from "@components/Providers";
import React from "react";
import {RouterProvider} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
        <GlobalProviders>
			<RouterProvider router = {routes}/>
        </GlobalProviders>
)
