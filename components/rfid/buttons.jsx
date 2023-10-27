import Image from "next/image";

const RfidButtons = ({ data }) => {
  return (
    <>
    
      <div className="container mx-auto mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data?.map((item, index) => (
            <div
              key={index}
              className="md:col-span-1 p-4 flex flex-col items-center"
            >
              <Image className="mb-2" src={item?.image} height={60} width={60} />
              <div className="text-center">{item?.title}</div>
              <div className="text-center">{item?.description}</div>
              <button className="mt-5 sm:mt-4 bg-[#eb804f] w-full sm:w-[143px] h-[34px] sm:h-[35px] justify-center rounded-full text-white text-[14px] flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in hover:shadow-md hover:shadow-lightblue">
                {item?.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RfidButtons;
