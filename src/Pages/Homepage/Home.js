import React from "react";
import ScrollTop from "../ScrollTop/ScrollTop";
import AboutVolunteer from "./AboutVolunteer";
import Campaigns from "./Campaigns/Campaigns";
import Header from "./Header";
import OurMission from "./OurMission";
import VolunteerService from "./VolunteerService";

const Home = () => {
  return (
    <div>
      <ScrollTop />
      <Header />
      <VolunteerService />
      <Campaigns />
      <OurMission />
      <AboutVolunteer />
    </div>
  );
};

export default Home;
