import { useLoaderData } from "react-router-dom";
import DonationList from "../../components/DonationList/DonationList";
import Header from "../../components/Header/Header";


const Home = () => {

    const donationList=useLoaderData()
    

    return (
        <div>
            <Header></Header>
            <DonationList donationList={donationList}></DonationList>
        </div>
    );
};

export default Home;