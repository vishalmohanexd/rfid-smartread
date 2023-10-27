import Link from "next/link";
import React from "react";

const IndustryNav = () => {
  return (
    <>
      <div className="z-20 top-[38px] w-[240px] absolute left-0 flex flex-col xl:flex-row py-3 bg-white shadow rounded">
        <ul className="flex flex-col items-start w-full ff-Inter">
          <li className="footer-text   text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/smart-reads/rfid-connect/apps/check-out-basket"} className="w-full inline-block">
            Apparel and Fashion
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/smart-reads/rfid-connect/apps/eas-gates"} className="w-full inline-block">
              {" "}
              {/* EAS Gates{" "} */}
              Sports Retail
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/smart-reads/rfid-connect/apps/smart-tray"} className="w-full inline-block">
              {" "}
              {/* Smart Tray */}
              Jewellery
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/smart-reads/rfid-connect/apps/smart-fitting-room"} className="w-full inline-block">
            {/* Smart Fitting Room */}
            Automotive
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/smart-reads/rfid-connect/apps/smart-trolley"} className="w-full inline-block">
            {/* Smart Trolley */}
            Warehousing
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/smart-reads/rfid-connect/apps/smart-trolley"} className="w-full inline-block">
            {/* Smart Trolley */}
            Education
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/smart-reads/rfid-connect/apps/smart-trolley"} className="w-full inline-block">
            {/* Smart Trolley */}
            Manufacturing
            </Link>
          </li>
          
        </ul>
      </div>
    </>
  );
};

export default IndustryNav;
