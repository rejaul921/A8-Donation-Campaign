import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DonationDescrip from "../pages/DonationDescrip/DonationDescrip";


const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
                {
                    path:"/",
                    element: <Home></Home>,
                    loader: ()=>fetch('/donation.json')
                },
                {
                    path: "/Donation",
                    element: <Donation></Donation>
                },
                {
                    path: "/Statistics",
                    element: <Statistics></Statistics>
                },
                {
                    path: "/Donation/:ID",
                    element: <DonationDescrip></DonationDescrip>,
                    loader: ()=>fetch('/donation.json')
                }
        ]
    }
])
export default Routers;