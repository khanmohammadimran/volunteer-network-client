import React from "react";
import AboutVolunteer from "./AboutVolunteer";
import Header from "./Header";
import VolunteerService from "./VolunteerService";

const Home = () => {
  return (
    <div>
      <Header />
      <VolunteerService />
      <AboutVolunteer />
    </div>
  );
};

export default Home;
