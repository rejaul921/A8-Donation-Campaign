import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';


const DonationDescrip = () => {

    const [donation, setDonation] = useState({})

    const donationList = useLoaderData()


    const { ID } = useParams()

    useEffect(() => {
        const findDonation = donationList.find(donation => donation.ID == ID)
        setDonation(findDonation)
    }, [ID, donationList])

        
        const donateButton=()=>{
            const donatedArray = [];

            const donatedList=JSON.parse(localStorage.getItem('donated'))
            
            
            
            if(!donatedList){
                donatedArray.push(donation)
                localStorage.setItem('donated', JSON.stringify(donatedArray))
                swal("Thank you for your Donation.");

            }
            
            else{

                const isDonated= donatedList.find((item)=>item.ID == donation.ID)

                if(!isDonated){
                 donatedArray.push(...donatedList, donation)
                 localStorage.setItem('donated', JSON.stringify(donatedArray))
                 swal("Thank you for your Donation.");
                }
                else{
                    swal("You have already donated for this Campaign");
                }
                
            }

            
        }
    return (
        <div>
            <div className=" bg-base-100 shadow-xl">
                <div className="relative">
                    <figure><img className="w-full h-[70vh]" src={donation.Picture} alt="donationPage" /></figure>
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-opacity-75 bg-black text-white">
                        <button onClick={donateButton} className="text-lg font-bold p-2 rounded-lg"
                            style={{ backgroundColor: donation.text_color }}
                        >Donate : <span>{donation.Price
                        }</span>$</button>
                    </div>
                </div>
                <div className="my-6 py-3 px-8">
                    <h2 className="text-xl font-bold mb-2">{donation.Title}</h2>
                    <p>{donation.Description}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default DonationDescrip;