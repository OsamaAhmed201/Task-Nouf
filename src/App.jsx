import { RouterProvider } from "react-router-dom"

import { createBrowserRouter } from "react-router-dom"
import Layout from "./Modules/Component/Layout/Layout"
import Home from "./Modules/Component/Home/Home"
import { useTranslation } from "react-i18next";

import { useEffect } from "react";
import Features from "./Modules/Component/Features/Features";
import Benefits from "./Modules/Component/Benefits/Benefits";
import Pricing from "./Modules/Component/Pricing/Pricing";
import Conversation from "./Modules/Component/Conversation/Conversation";

function App() {

  const { i18n } = useTranslation();

  useEffect(() => {

    if (i18n.language === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  }, [i18n.language]);
  let routs = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: < Home /> },
        { path: "/home", element: <Home /> },
        { path: "/features", element: <Features /> },
        { path: "/about", element: <Benefits /> },
        { path: "/platforms", element: <Pricing /> },
        { path: "/testimonials", element: <Conversation /> },


      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routs} ></RouterProvider>
    </>
  )
}

export default App
