import { Link } from "react-router-dom";

const DonatedList = ({ donation }) => {
    const { ID } = donation
    return (
        <div>
            
                <div className={`h-52 flex gap-4 justify-between items-center bg-base-100 shadow-xl`}
                    style={{
                        backgroundColor: donation.Card_bg
                    }}
                >
                    <div className="w-1/3"><figure><img className="w-full h-fit bg-[${donation.Card_bg
                            }]" src={donation.Picture} alt="" />
                        </figure>
                    </div>
                    <div className="w-2/3 py-2">
                        <p className={`text-xl w-28 rounded-lg p-1 font-bold`}
                            style={{ backgroundColor: donation.Category_bg, color: donation.text_color }}
                        >{donation.Category}</p>
                        <p className="text-lg text-black font-semibold">   
                            {donation.Title}
                        </p>
                        <p style={{ color: donation.text_color}}
                        ><span>{donation.Price}</span>$</p>
                        <Link to={`/Donation/${ID}`}>
                        <button className="my-3 rounded-lg p-2 font-bold text-white"
                        style={{ backgroundColor: donation.text_color }}
                        >View Details</button>
                        </Link>
                    </div>
                </div>
            
        </div>
    );
};

export default DonatedList;