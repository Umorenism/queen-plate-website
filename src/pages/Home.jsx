import React from "react";
import {FeaturedMenu} from "../sections/home/FeaturedMenu";
import Hero from "../sections/home/Hero";
import { Testimonial } from "../sections/home/Testimonials";
import { AboutSection } from "../sections/about/AboutSection";
import ServiceList from "../sections/services/ServiceList";
import { HowToOrder } from "../sections/how/HowToOrder";
import ContactUs from "../sections/contact/Contact";



const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <FeaturedMenu />
      <AboutSection/>
      
      <ServiceList/>
      <Testimonial />
      <HowToOrder/>
      <ContactUs/>
    </main>
  );
};

export default Home;