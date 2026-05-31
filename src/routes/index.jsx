import App from "../App.jsx";
import { createBrowserRouter } from "react-router-dom";
import MainRice from "../components/MainRice.jsx";
import Basmati1121 from "../components/RiceType/Basmati/Basmati1121.jsx";
import Basmati1509 from "../components/RiceType/Basmati/Basmati1509.jsx";
import Basmati1401 from "../components/RiceType/Basmati/Basmati1401.jsx";
import BasmatiPusa from "../components/RiceType/Pusa.jsx";
import IR64 from "../components/RiceType/NonBasmati/IR64.jsx";
import SonaMasoori from "../components/RiceType/SonaMasoori.jsx";
import PR11 from "../components/RiceType/NonBasmati/PR11.jsx";
import Basmati from "../components/RiceType/Basmati.jsx";
import NonBasmati from "../components/RiceType/NonBasmati.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import Sugandha from "../components/RiceType/Sugandha.jsx";
import Sharbati from "../components/RiceType/Sharbati.jsx";
import Pusa from "../components/RiceType/Pusa.jsx";
import PR106 from "../components/RiceType/NonBasmati/PR106.jsx";
import IR36 from "../components/RiceType/NonBasmati/IR36.jsx";
import RS10 from "../components/RiceType/NonBasmati/RS10.jsx";
import IR8 from "../components/RiceType/NonBasmati/IR8.jsx";


export const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <>
      <ScrollToTop/>
        <App />
      </>
    )
  },
  


{
    path: "/basmati",
    element: <MainRice />, 
     children: [
       {
         index: true,
         element:<Basmati/>
      
    },
      {
        path: "basmati-1121",
        element: <Basmati1121 />,
      },
      {
        path: "basmati-1401",
        element: <Basmati1401 />,
      },
      {
        path: "basmati-1509",
        element: <Basmati1509 />,
      },
      {
        path: "pusa",
        element: <BasmatiPusa />,
      },
      
    ],
  },

   {
    path: "/non-basmati",
    element: <MainRice />, 
     children: [
       {
         index: true,
         element: <NonBasmati/>
     },
      
      {
        path: "ir64",
        element: <IR64 />,
      },
     
      {
        path: "pr11",
        element: <PR11 />,
      },
      {
        path: "pr106",
        element: <PR106 />,
       },
       {
        path: "ir36",
        element: <IR36/>,
       },
        {
        path: "ir8",
        element: <IR8 />,
       },
         {
        path: "rs10",
        element: <RS10 />,
      },

      
    ],
  },
  {
    path: "/sugandha",
    element: <MainRice />,
    children: [
      {
        index: true,
        element: <Sugandha />
      },
    ]
  },
  {
    path: "/sharbati",
    element: <MainRice />,
    children: [
      {
        index: true,
        element: <Sharbati />
      },
    ]
  },
  {
    path: "/sona-masuri",
    element: <MainRice />,
    children: [
      {
        index: true,
        element: <SonaMasoori />
      },
    ]
  },
   {
    path: "/pusa",
    element: <MainRice />,
    children: [
      {
        index: true,
        element: <Pusa />
      },
    ]
  }
   
  
]);