import React from "react";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import ParkingList from "../../components/ParkingList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ParkingList />
    </div>
  );
};

export default Home;
