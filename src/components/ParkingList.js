import React from "react";

const ParkingList = () => {
  const hello = localStorage.getItem("items");
  let obj = JSON.parse(hello);
  console.log(obj);
  return (
    <div className="p-3">
      <h1>{obj === null ? "0 entries" : obj?.length + "Entries"}</h1>
      {obj?.map((parkInfo, index) => (
        <div key={index}>
          <h1>Driver's name: {parkInfo?.driversName}</h1>
          <h1>Vehicle number: {parkInfo?.vehicleNumber}</h1>
        </div>
      ))}
    </div>
  );
};

export default ParkingList;
