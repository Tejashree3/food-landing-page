import React, { useEffect } from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import BgPng from "../../assets/website/7.jpg";
import { motion, useAnimation } from "framer-motion";

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStore = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const element = document.querySelector("#animated-element");
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 100 });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Run handleScroll on initial render
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <>
      <div className="py-14" style={backgroundStyle}>
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
            <motion.div
              id="animated-element"
              initial={{ opacity: 0, y: 100 }}
              animate={controls}
              transition={{ duration: 2 }}
              className="space-y-6 max-w-xl mx-auto"
            >
              {/* text section */}
              <h1 className="text-2xl text-black text-center sm:text-left sm:text-4xl font-semibold pl-3">
                Food is available for Android and IOS
              </h1>
              {/* img section */}
              <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <a href="#">
                  <img
                    src={PlayStoreImg}
                    alt="Play store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={AppStoreImg}
                    alt="App store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </motion.div>
            {/* Empty div */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
