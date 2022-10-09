import React from "react";
import ScrollTop from "../ScrollTop/ScrollTop";
import AboutVolunteer from "./AboutVolunteer";
import Campaigns from "./Campaigns/Campaigns";
import Header from "./Header";
import VolunteerService from "./VolunteerService";

const Home = () => {
  return (
    <div>
      <ScrollTop />
      <Header />
      <VolunteerService />
      <AboutVolunteer />
      <Campaigns />
    </div>
  );
};

export default Home;
