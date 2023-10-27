import React from "react";
import Slider from "react-slick";

const AboutHero = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    infinite: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <>
      <div className="relative">
        <div className="text-center absolute left-1/2 -translate-x-1/2 z-10 top-32 sm:top-20 w-full ">
          <h5 className="text-white text-center font-normal text-lg">
            Our Vision
          </h5>
          <h1 className="text-white font-bold ff-inter text-[32px] xl:text-[60px]">
            One System, Endless Possibilities
          </h1>
        </div>
        {/* <Slider {...settings}> */}
          {/* <div className="relative after:absolute after:left-0 after:top-0 after:bg-black after:bg-opacity-30 sm:after:bg-opacity-10 after:w-full after:h-full">
            <img
              className="w-full  h-[450px] sm:h-full object-cover "
              src="/images/about-bg-onesysytem.webp"
              alt="about-bg-onesysytem"
            />
          </div> */}
          <div className="relative after:absolute after:left-0 after:top-0 after:bg-black after:bg-opacity-30 sm:after:bg-opacity-10 after:w-full after:h-full">
            <img
              className="w-full  h-[450px] sm:h-full  object-cover object-left"
              src="/images/aboutbg.webp"
              alt="about-bg-onesysytem"
            />
          </div>
        {/* </Slider> */}
      </div>
    </>
  );
};

export default AboutHero;
