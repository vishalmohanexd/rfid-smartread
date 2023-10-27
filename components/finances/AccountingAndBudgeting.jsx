import Image from "next/image";
import React from "react";

const AccountingAndBudgeting = () => {
  return (
    <div>
      <div className="max-w-[1120px] mx-auto w-full px-3 xl:px-0 md:mt-[100px] sm:mt-[70px] mt-[40px] lg:mt-[150px] ">
        <div className="flex flex-col lg:flex-row lg:justify-start relative">
          <div className="lg:max-w-[500px]  w-full">
            <div className="flex justify-center lg:justify-start">
              <h2 className="ff-inter font-bold sm:text-9xl text-xl text-darkBlack leading-[28px] sm:leading-[53px] text-center lg:text-start max-w-[667px] ">
                Accounting and Budgeting
              </h2>
            </div>
            <div className="flex justify-center lg:justify-start">
              <p className="ff-inter font-normal text-center lg:text-start text-sm sm:text-md text-lightgrey max-w-[702px] mt-[11px] sm:mt-[17px]">
                Enhance financial visibility by managing revenue, cash and risk
                with real time data{" "}
              </p>
            </div>
            <Image
              src="/images/accounting-budgeting-img.webp"
              width={1052}
              height={660}
              alt="mobile accounting img"
              className="lg:hidden mt-2" 
            />

            <div className="border-t-2 mt-4 sm:mt-[15px] xl:mt-[17px] border-dashed xl:max-w-[702px] border-#006D77"></div>
            <div className="flex justify-center xl:justify-start">
              <div className="mt-[15px] xl:mt-[17px] grid sm:grid-cols-2 gap-[20px]  lg:gap-[10px] xl:gap-[15px]">
                <div className="max-w-[325px] mt-[10px] sm:mt-0">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">
                      Automated workflow
                    </p>
                  </div>
                  <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
                    Ensure faster completion of financial statements with
                    automated processes{" "}
                  </p>
                </div>
                <div className="max-w-[325px] mt-[15px] sm:mt-0">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">
                      Chart of Accounts{" "}
                    </p>
                  </div>
                  <p className="font-normal mt-3 ff-inter text-base text-lightgrey ">
                    Create and maintain different accounts which include
                    Revenue, Expenses, Assets and more
                  </p>
                </div>
                <div className=" max-w-[325px] mt-[15px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">
                      Reconciliation
                    </p>
                  </div>
                  <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
                    Compare discrepancies between your financial accounts and
                    bank statement balance
                  </p>
                </div>
                <div className=" max-w-[325px] mt-[15px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className="ff-inter ml-[5px] font-bold text-base text-darkBlack">
                      Integrate budgeting
                    </p>
                  </div>
                  <p className="font-normal mt-3 ff-inter text-base text-lightgrey">
                    Manage budgets with a clear understanding of financial
                    commitments, expenses and payments
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute mt-5 z-[-1] max-w-[600px] mx-auto lg:mx-0 lg:max-w-[700px] xl:max-w-[800px] top-0 right-0"> 
            <Image
              src="/images/accounting-budgeting-img.png"
              width={1052}
              height={660}
              alt="accounting-budgeting-img"
              className="hidden lg:block" 
            />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountingAndBudgeting;
