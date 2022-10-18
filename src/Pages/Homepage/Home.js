import React from "react";
import ScrollTop from "../ScrollTop/ScrollTop";
import AboutVolunteer from "./AboutVolunteer";
import BecomeVolunteer from "./BecomeVolunteer";
import Campaigns from "./Campaigns/Campaigns";
import Donate from "./Donate/DonateCard";
import Header from "./Header";
import OurMission from "./OurMission";
import Testimonial from "./Testimonial/Testimonial";
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
      <Donate />
      <BecomeVolunteer />
      <Testimonial />
    </div>
  );
};

export default Home;
