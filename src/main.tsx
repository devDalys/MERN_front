import ReactDOM from 'react-dom/client'
import './index.css'
import {GlobalProviders} from "@components/Providers";
import {RouterProvider} from 'react-router-dom';
import {router} from "@configroutes/router.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
        <GlobalProviders>
			<RouterProvider router = {router}/>
        </GlobalProviders>
)
