import { useEffect, useState } from "react";

const Statistics = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [remainingDonation, setRemainingDonation] = useState(605);

  useEffect(() => {
    const donatedList = JSON.parse(localStorage.getItem("donated")) || [];
    const total = donatedList.reduce((preValue, currentItem) => preValue + currentItem.Price, 0);
    setTotalPrice(total);
  }, []);

  useEffect(() => {
    setRemainingDonation(prevRemaining => prevRemaining - totalPrice);
  }, [totalPrice]);

  return (
    <div>
      <p className="text-4xl font-bold mt-8 text-center">
        Total you have donated: <span>{totalPrice}</span>$
      </p>
    </div>
  );
};

export default Statistics;
