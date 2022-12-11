import React from 'react'
import ReactDOM from 'react-dom'
import { Providers } from './app.provider.module'
import './index.scss'
import 'react-toastify/dist/ReactToastify.css'
import 'react-confirm-alert/src/react-confirm-alert.css'
import reportWebVitals from './reportWebVitals'
import Routing from './routing'
import './utils/prototypes'
import './utils/attributes'
import { ToastContainer } from 'react-toastify'

ReactDOM.render(
    <Providers>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        <div className="flex-page">
            <Routing />
        </div>
    </Providers>,
    document.getElementById('root'),
)

reportWebVitals()
