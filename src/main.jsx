import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import './index.css';
import Loginpage from './pages/loginpage.jsx'
import Signuppage from './pages/signuppage.jsx'
import Homepage from './pages/homepage.jsx'
import SearchResultsPage from './pages/searchresult.jsx'
import Contact from './pages/contact.jsx'
import InternshipsPage from './pages/internships.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Homepage/>
        
      },
      {
        path:"/searchresult",
        element:<SearchResultsPage/>
      },
      {
        path:"/login",
        element:<Loginpage/>
      },
      {
        path:"/signup",
        element:<Signuppage/>
      },
      {
        path:"/contact",
        element:<Contact/>
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
