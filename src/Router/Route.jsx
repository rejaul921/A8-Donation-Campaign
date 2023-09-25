import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path: "/Donation",
                element: <Donation></Donation>
            },
            {
                path: "/Statistics",
                element: <Statistics></Statistics>
            }
        ]
    }
])
export default Route;