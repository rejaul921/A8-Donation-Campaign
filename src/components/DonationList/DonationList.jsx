import DonationCard from "./DonationCard";


const DonationList = ({ donationList }) => {
    
    return (
        <div>
            <div className="grid gap-3 py-10 md:grid-cols-2 lg:grid-cols-4">
                {
                    donationList.map(donation =><DonationCard key={donation.ID} donation={donation}>

                    </DonationCard>)
                }
            </div>
        </div>
    );
};

export default DonationList;