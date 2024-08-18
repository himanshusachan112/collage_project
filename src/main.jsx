import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import './index.css';
import Loginpage from './pages/loginpage.jsx'
import Signuppage from './pages/signuppage.jsx'
import HomePage from './pages/homepage.jsx'
import InternshipPage from './pages/InternshipPage.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/login",
        element:<Loginpage/>
      },{
        path:"/signup",
        element:<Signuppage/>
      },{
        path:"/internships",
        element:<InternshipPage/>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
