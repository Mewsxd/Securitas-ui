import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactPage from "./Pages/ContactPage";
import SectorsPage from "./Pages/SectorsPage";
import RootLayout from "./Pages/RootLayout";
import { action as formSubmitAction } from "./Components/FormComponent";
import { ErrorPage } from "./Pages/ErrorPage";
import MembersPage from "./Pages/MembersPage";
import EventPage from "./Pages/EventPage";

function App() {
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
