import Image from "next/image";
import React from "react";

const CreateAccountWrapper = () => {
  return (
    <>
      {" "}
      <div className="container flex justify-between mx-auto px-3">
        <div className="max-w-[100px] sm:max-w-[200px]">
          <Image
            src="/images/cwsuite-logo.png"
            width={216}
            height={31}
            alt="LOGO"
          />
        </div>
        <div className="flex items-center">
          <button className="text-blue px-8 text-sm  ff-Inter font-bold flex items-center transition-all duration-200 ease-in hover:opacity-60">
            Ready to get started?
          </button>
          <button className="bg-blue px-6 py-3 xl:py-[12px] rounded-[4px]  text-white text-xs flex items-center transition-all duration-200 ease-in hover:shadow-lg hover:shadow-blue">
            Create an Account
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateAccountWrapper;
