import { Link } from "react-router-dom";


const DonationCard = ({ donation }) => {
    
    const {ID}= donation
    return (
        <div>
            <Link to={`/Donation/${ID}`}>
            <div className={`h-80 card bg-base-100 shadow-xl`}
            style={{ backgroundColor: donation.Card_bg
            }}
            >
                <figure><img className="w-fit h-60 bg-[${donation.Card_bg
}]" src={donation.Picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className={`text-xl w-28 rounded-lg p-1 font-bold`}
                    style={{ backgroundColor: donation.Category_bg, color:donation.text_color }}
                    >{donation.Category}</p>
                    <p className="text-lg font-semibold"
                    style={{ color:donation.text_color }}
                    >{donation.Title
                    }</p>
                </div>
            </div>
            </Link>

        </div>
    );
};

export default DonationCard;