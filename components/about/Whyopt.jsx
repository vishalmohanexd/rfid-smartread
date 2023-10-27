import Image from "next/image";
const WhyOpt = () => {
  return (
    <>
      <div className="container mx-auto bg-[#FFF3EA] rounded-[20px] h-[600px] relative mt-10">
        <div className="flex justify-center absolute top-[-80px] left-0 right-0 md:left-[85px] md:right-[85px] sm:left-[5px] sm:right-[5px]">
          <img
            src="/images/newaboutwhy.png"
            className="w-full h-auto md:w-auto"
            alt="Management img"
          />
          <div className="absolute bottom-[-20em] md:bottom-[-10em] text-center w-full">
            <div className="md:flex justify-between">
              <div className="md:w-1/3 sm:w-full">
                <div className="flex items-center">
                  <Image
                    src="/images/icon1.png"
                    alt="image"
                    height={40}
                    width={40}
                    className="mr-2"
                  />
                  <span className="font-inter text-[15px] text-[#101828] font-[700]">
                    Embracing Commerce Diversity
                  </span>
                </div>
                <p className="text-[#475467]">
                  Our suite speaks to the diversity <br /> within commerce,
                  covering all bases <br />
                  to accommodate your business model
                </p>
              </div>
              <div className="md:w-1/3 sm:w-full ">
                <div className="flex items-center">
                  <Image
                    src="/images/icon2.png"
                    alt="image"
                    height={40}
                    width={40}
                    className="mr-2"
                  />
                  <span className="font-inter text-[15px] text-[#101828] font-[700]">
                    Nurturing Innovation
                  </span>
                </div>
                <p className="text-[#475467]">
                  Innovation is at our core. We provide solutions that keep you
                  ahead of industry trends
                </p>
              </div>
              <div className="md:w-1/3 sm:w-full ">
                <div className="flex items-center">
                  <Image
                    src="/images/icon 3.png"
                    alt="image"
                    height={40}
                    width={40}
                    className="mr-2"
                  />
                  <span className="font-inter text-[15px] text-[#101828] font-[700]">
                    Harmonious Integration
                  </span>
                </div>
                <p className="text-[#475467]">
                  Seamlessly integrating our Enterprise Apps into your existing
                  workflows, we ensure a frictionless adoption process
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyOpt;
