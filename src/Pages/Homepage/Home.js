import React from "react";
import AboutVolunteer from "./AboutVolunteer";
import Campaigns from "./Campaigns";
import Header from "./Header";
import VolunteerService from "./VolunteerService";

const Home = () => {
  return (
    <div>
      <Header />
      <VolunteerService />
      <AboutVolunteer />
      <Campaigns />
    </div>
  );
};

export default Home;
