import React from "react";
import Banner from "../Components/Banner/Banner";
import Faq from "../Components/Faq/Faq";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import PromoVideo from "../Components/PromoVideo/PromoVideo";
import Schedule from "../Components/schedule/Schedule";
import WebinarSection from "../Components/WebinarSection/WebinarSection";
import { motion } from "framer-motion";
import useTop from "../helpers/ScrollToTop";
import Speakers from "./Speakers";

const Home = () => {
  useTop();
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Navbar />
      <Banner />
      <Schedule />
      <WebinarSection />
      <PromoVideo />
      <Faq />
      <Footer />
    </motion.div>
  );
};

export default Home;
