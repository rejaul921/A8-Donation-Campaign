import { Outlet } from "react-router-dom";
import Banner from "../components/Headed/Header/Banner/Banner";


const Root = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
            <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Root;