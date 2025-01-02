import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './swiper.css';
import imag1 from "../../assets/website/40.jpeg";
import imag2 from "../../assets/website/41.jpeg";
import imag3 from "../../assets/website/42.jpeg";
import imag4 from "../../assets/website/43.jpeg";
import imag5 from "../../assets/website/44.jpeg";
import imag6 from "../../assets/website/45.jpeg";
import imag7 from "../../assets/website/46.jpeg";
import imag9 from "../../assets/website/48.jpeg";
import imag10 from "../../assets/website/49.jpeg";

import { motion, useAnimation, useScroll } from "framer-motion";

const testimonialData = [
  {
    id: 1,
    title: "Nature 1",
    description: "Beautiful view of nature 1",
    imgSrc: imag5,
  },
  {
    id: 2,
    title: "Nature 2",
    description: "Beautiful view of nature 2",
    imgSrc: imag5,
  },
  {
    id: 3,
    title: "Nature 3",
    description: "Beautiful view of nature 3",
    imgSrc: imag5,
  },
  {
    id: 4,
    title: "Nature 4",
    description: "Beautiful view of nature 4",
    imgSrc: imag5,
  },
  {
    id: 5,
    title: "Nature 5",
    description: "Beautiful view of nature 5",
    imgSrc: imag5,
  },
  {
    id: 6,
    title: "Nature 6",
    description: "Beautiful view of nature 6",
    imgSrc: imag5,
  },
  {
    id: 7,
    title: "Nature 7",
    description: "Beautiful view of nature 7",
    imgSrc: imag5,
  },
  {
    id: 8,
    title: "Nature 8",
    description: "Beautiful view of nature 8",
    imgSrc: imag5,
  },
  {
    id: 9,
    title: "Nature 9",
    description: "Beautiful view of nature 9",
    imgSrc: imag5,
  }
];

const SwiperSlider = () => {
  const controls = useAnimation();
  const swiperRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: swiperRef,
    offset: ["start end", "end start"]
  });

  React.useEffect(() => {
    scrollYProgress.onChange((progress) => {
      if (progress > 0.1) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 100 });
      }
    });
  }, [controls, scrollYProgress]);

  return (
    <>
      <span id="swiper"></span>
      <div className="py-10">
        <div className="container">
          <motion.div 
            ref={swiperRef}
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
            transition={{ duration: 2 }}
            className="swiper-container"
          >
            <div className="text-center mb-20">
              <h1 className="text-4xl font-bold font-cursive text-gray-800">
                Best Food For You
              </h1>
            </div>

            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {testimonialData.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonial-slide">
                    <img src={testimonial.imgSrc} alt={testimonial.title} />
                    <div className="overlay">
                      <h3 className='text-2xl text-white mb-2'>{testimonial.title}</h3>
                      <p className='text-xl text-white mb-2'>{testimonial.description}</p>
                      <button className=' text-xl rounded-full text-white bg-primary/70 py-4 px-7 '>View</button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SwiperSlider;
