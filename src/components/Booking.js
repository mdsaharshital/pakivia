import React from "react";
import { useState } from "react";

const Booking = () => {
  const [parkInfo, setParkInfo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const driversName = e.target.driversName.value;
    const vehicleNumber = e.target.vehicleNumber.value;
    const checkInTime = e.target.checkInTime.value;
    const parkInput = { driversName, vehicleNumber, checkInTime };
    const hello = localStorage.getItem("items");
    let obj = JSON.parse(hello);
    setParkInfo([parkInput, ...parkInfo]);
    if (obj === null) {
      localStorage.setItem("items", JSON.stringify([parkInput, ...parkInfo]));
    } else {
      localStorage.setItem("items", JSON.stringify([...obj, parkInput]));
    }
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Drivers name"
          name="driversName"
          className="input input-bordered m-3 w-64"
          required
        />
        <input
          type="text"
          placeholder="Vehicle number"
          name="vehicleNumber"
          className="input input-bordered m-3 w-64"
          required
        />
        <input
          type="datetime-local"
          placeholder="Type here"
          name="checkInTime"
          className="input input-bordered m-3"
          required
        />
        <input
          type="submit"
          placeholder="Submit"
          className="input input-bordered m-3 bg-green-400 border-none outline-none"
        />
      </form>
    </>
  );
};

export default Booking;
