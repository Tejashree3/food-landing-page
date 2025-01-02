import React, { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import SwiperSlider from "./components/Swiper/SwiperSlider.jsx";
import Settings from "./components/Setting.jsx";

const App = () => {
  const [primaryColor, setPrimaryColor] = useState(
    localStorage.getItem("primaryColor") || "#d0b200"
  );

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", primaryColor);
    localStorage.setItem("primaryColor", primaryColor);
  }, [primaryColor]);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
      <Navbar />
      <Settings setPrimaryColor={setPrimaryColor} />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <SwiperSlider/>
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default App;
