import React, { useEffect, useState } from "react";

const AboutSlider = () => {
  const aboutsliderdata = [
    {
      heading: "One Passion - One Mission",
      lefticon: "/aboutus/goal-icon.webp",
      lefticonclasses: "absolute left-0 bottom-0",
      righticon: "/aboutus/check-goal.webp",
      righticonclasses: "absolute right-0 top-0",
      memberimgone: "/aboutus/teamImage1.webp",
      memberimgtwo: "/aboutus/teamImage2.webp",
      memberimgthree: "/aboutus/teamImage3.webp",
    },
    {
      heading: "Sustainable growth for all",
      lefticon: "/aboutus/growth-icon-leaves.webp",
      lefticonclasses: "absolute left-0 top-0",
      //  righticon: "/aboutus/growth-right-icon-world.png",
      righticonclasses: "absolute -right-20 -top-20 z-[-2]",
      memberimgone: "/aboutus/teamImage4.webp",
      memberimgtwo: "/aboutus/teamImage5.webp",
      memberimgthree: "/aboutus/teamImage6.webp",
    },
  ];

  const [active, setActive] = useState(0);
  const [sliderState, setSliderState] = useState(aboutsliderdata[active]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (active < aboutsliderdata.length - 1) {
        setActive((active) => active + 1);
      } else {
        setActive((active) => active - 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [active]);

  useEffect(() => {
    setSliderState(aboutsliderdata[active]);
  }, [active]);

  return (
    <>
      <div id="our-team" className="py-10 sm:py-20 px-3 max-w-[1120px] mx-auto">
        <span className="text-maryblue rounded-full bg-[#BEE1E6] px-6 py-2 font-normal text-xs">
          Our Team
        </span>

        {sliderState && (
          <>
            <h2 className="text-darkBlack text-[36px] sm:text-3xl font-bold ff-inter mt-4 mb-3">
              {sliderState.heading}
            </h2>
            <div className="relative h-[880px] lg:h-[500px]">
              <img
                className={sliderState.lefticonclasses}
                src={sliderState.lefticon}
                alt="goal"
              />
              <img
                className={sliderState.righticonclasses}
                src={sliderState.righticon}
               
              />
              <div className="z-1 max-w-[310px] absolute left-[7%] sm:left-[20%] top-[300px] lg:top-[80px] rotate-[-8.52deg] px-3 pt-3 pb-6 bg-white rounded-[16px] shadow-[0px_15px_80px_rgba(0,0,0,0.08)]">
                <img
                  className="w-full"
                  src={sliderState.memberimgone}
                  alt="team"
                />
              </div>
              <div className="z-1 max-w-[230px] absolute left-[6%] sm:left-[42%] top-[140px] lg:top-[220px] rotate-[3.65deg] px-3 pt-3 pb-6 bg-white rounded-[16px] shadow-[0px_15px_80px_rgba(0,0,0,0.08)]">
                <img src={sliderState.memberimgtwo} alt="team" />
              </div>
              <div className="z-[-1] max-w-[230px] absolute left-[27%] sm:left-[59%] top-[530px] lg:top-[100px] rotate-[3.65deg]  px-3 pt-3 pb-6 bg-white rounded-[16px] shadow-[0px_15px_80px_rgba(0,0,0,0.08)]">
                <img
                  className="w-full"
                  src={sliderState.memberimgthree}
                  alt="team"
                />
              </div>{" "}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AboutSlider;
