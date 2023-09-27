import { useEffect, useState } from "react";
import DonatedList from "./DonatedList/DonatedList";


const Donation = () => {
    const[donationList, setDonationList]= useState([])
    const[noDonation, setNoDonation]= useState(false)
    const[isShow, setIsShow]=useState(false)
    

    useEffect(()=>{
        const donatedList=JSON.parse(localStorage.getItem('donated'))
        if (donatedList){
            setDonationList(donatedList)
        }
        else{
            setNoDonation("You did not Donate yet.")

        }
        
    },[])

    return (
        <div>
            {
              noDonation? <p className="h-[60vh] flex justify-center items-center text-lg font-bold">{noDonation}</p> : <div>
                <div className="grid gap-4 md:grid-cols-2">
                    {
                        isShow? donationList.map(donation=> <DonatedList key={donation.ID} donation={donation}></DonatedList>) 
                        : donationList.slice(0,4).map(donation=> <DonatedList key={donation.ID} donation={donation}></DonatedList>)
                    }
                </div>
                {
                    donationList.length>4 && <div className=" text-center mx-auto mt-9 mb-5 ">
                    <button onClick={()=>setIsShow(!isShow)} className="bg-green-800 p-2 mx-auto rounded-lg text-white font-bold text-lg">
                        {isShow? "Show Less":"Show All"}
                    </button>
                </div>
                }
              </div> 
            }
        </div>
    );
};

export default Donation;