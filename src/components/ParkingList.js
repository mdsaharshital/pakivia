import React, { useState } from "react";
import { useEffect } from "react";

const ParkingList = () => {
  const [parks, setParks] = useState([]);
  const hello = localStorage.getItem("items");
  let obj = JSON.parse(hello);
  //
  useEffect(() => {
    setParks(obj);
  }, []);
  //
  return (
    <div className="p-3">
      <h1>{parks === null ? "No car parked" : parks?.length + "Entries"}</h1>
      <div className="overflow-x-auto">
        {parks === null ? (
          <> </>
        ) : (
          <table className="table table-zebra w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Driver's name</th>
                <th>Vehicle number</th>
                <th>CheckInTime</th>
              </tr>
            </thead>
            <tbody>
              {parks?.map((parkInfo, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{parkInfo?.driversName}</td>
                  <td>{parkInfo?.vehicleNumber}</td>
                  <td>{parkInfo?.checkInTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ParkingList;
