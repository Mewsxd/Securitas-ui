import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactPage from "./Pages/ContactPage";
import SectorsPage from "./Pages/SectorsPage";
import RootLayout from "./Pages/RootLayout";
import { useEffect } from "react";
import { action as formSubmitAction } from "./Components/FormComponent";

function App() {
  const hello = "Hello everynyan";
  // useEffect(() => {
  //   fetch(
  //     "https://shubhsita-18680-default-rtdb.asia-southeast1.firebasedatabase.app/Contacts.json",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(hello),
  //     }
  //   );
  // }, []);
  useEffect(() => {
    fetch(
      "https://shubhsita-18680-default-rtdb.asia-southeast1.firebasedatabase.app/Contacts.json"
    )
      .then((res) => res.json())
      .then((data) => {
        for (const x in data) {
          console.log(x);
        }
      });
  }, []);
  const router = createBrowserRouter([
    {
      index: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home />, action: formSubmitAction },
        { path: "/about", element: <About />, action: formSubmitAction },
        {
          path: "/contacts",
          element: <ContactPage />,
          action: formSubmitAction,
        },
        { path: "/sectors", element: <SectorsPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
