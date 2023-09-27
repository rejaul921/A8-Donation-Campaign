import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";




const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-auto w-11/12 px-5">
            <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Root;