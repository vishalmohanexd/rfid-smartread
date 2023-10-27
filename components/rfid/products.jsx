import Image from "next/image";

const RfidProducts = ({ heroData, data }) => {
  return (
    <>
      <div className="mb-12">
        <div className="container mx-auto px-3">
          <div className="flex justify-center">
            <h1 className="font-Inter text-[#101828] font-bold sm:mx-0 mx-[5px] leading-[42px] sm:leading-[50px] md:leading-[70px]  mt-[50px] sm:mt-[90px] max-w-[350px] sm:max-w-[794px]  text-center text-2xl md:text-[48px]">
              {heroData.title}
            </h1>
          </div>
          <div className="flex justify-center mt-[17px] sm:mt-[34px]">
            <p className="font-Inter font-normal text-sm sm:text-md max-w-[755px] text-center text-lightgrey">
              {heroData.description}
            </p>
          </div>
          <div className="flex justify-center lg:justify-center flex-col sm:flex-row  sm:mt-[28px]">
            <button className="mt-5 sm:mt-[0px] bg-green   w-full sm:w-[213px]  h-[45px] sm:h-[55px] justify-center rounded-full  text-white text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in hover:shadow-md hover:shadow-lightblue">
              {heroData.buttonText}
            </button>
          </div>
        </div>

        <div className="container mx-auto mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="md:col-span-1 p-4 flex flex-col items-center bg-gray-200"
              >
                <Image src={item.image} height={60} width={60} />
                <div className="text-center h-14 w-full border-b border-gray-300">
                  {item.title}
                </div>
                <button className="mt-5 text-[12px]">{item.description}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RfidProducts;
