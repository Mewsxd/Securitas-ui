import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactPage from "./Pages/ContactPage";
import SectorsPage from "./Pages/SectorsPage";
import RootLayout from "./Pages/RootLayout";
import { useEffect, useState } from "react";
import { action as formSubmitAction } from "./Components/FormComponent";
import { ErrorPage } from "./Pages/ErrorPage";
import MembersPage from "./Pages/MembersPage";
import EventPage from "./Pages/EventPage";

function App() {
  const [myName, setMyName] = useState("");
  useEffect(() => {
    console.log("Hi");
  }, [myName]);
  useEffect(() => {
    fetch(
      "https://shubhsita-18680-default-rtdb.asia-southeast1.firebasedatabase.app/Contacts.json"
    )
      .then((res) => res.json())
      .then((data) => {
        for (const x in data) {
          // console.log(x);
        }
      });
  }, []);
  const router = createBrowserRouter([
    {
      index: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home />, action: formSubmitAction },
        { path: "/about", element: <About />, action: formSubmitAction },
        {
          path: "/contacts",
          element: <ContactPage />,
          action: formSubmitAction,
        },
        { path: "/sectors", element: <SectorsPage /> },
        { path: "/members", element: <MembersPage /> },
        { path: "/event", element: <EventPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
