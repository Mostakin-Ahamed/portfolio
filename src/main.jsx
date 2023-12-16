import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-9/12 mx-auto' >
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
