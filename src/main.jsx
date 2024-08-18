import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import "./index.css";
import About from "./pages/About.jsx";
import Loginpage from "./pages/loginpage.jsx";
import Signuppage from "./pages/signuppage.jsx";
import HomePage from "./pages/homepage.jsx";
import InternshipPage from "./pages/InternshipPage.jsx";
import Forgotpassword from "./pages/Forgotpassword.jsx";
import Verifyotp from "./pages/Verifyotp.jsx";
import Updatepassword from "./pages/Updatepassword.jsx";
import Contact from "./pages/contact.jsx";
import Jobs from "./pages/Jobs.jsx";
import Hackathons from "./pages/Hackathons.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Loginpage />,
      },
      {
        path: "/signup",
        element: <Signuppage />,
      },
      {
        path: "/internships",
        element: <InternshipPage />,
      },
      {
        path: "/forgotpassword",
        element: <Forgotpassword />,
      },
      {
        path: "/verify-otp",
        element: <Verifyotp />,
      },
      {
        path: "/updatepassword/:token",
        element: <Updatepassword />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path:"/jobs",
        element:<Jobs/>
      },
      {
        path:"/hackathons",
        element:<Hackathons/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
