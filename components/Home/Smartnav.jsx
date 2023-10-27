import Link from "next/link";
import React from "react";

const SmartNav = () => {
  return (
    <>
      <div className="z-20 top-[38px] w-[240px] absolute left-0 flex flex-col xl:flex-row py-3 bg-white shadow rounded">
        <ul className="flex flex-col items-start w-full ff-Inter">
          <li className="footer-text   text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/smart-reads/rfid-connect/apps/check-out-basket"} className="w-full inline-block">
            RFID Check Out
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/smart-reads/rfid-connect/apps/eas-gates"} className="w-full inline-block">
              {" "}
              {/* EAS Gates{" "} */}
              RFID Smart Trolley
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/smart-reads/rfid-connect/apps/smart-tray"} className="w-full inline-block">
              {" "}
              {/* Smart Tray */}
              RFID Smart Tray
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/smart-reads/rfid-connect/apps/smart-fitting-room"} className="w-full inline-block">
            {/* Smart Fitting Room */}
            RFID EAS Gates
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/smart-reads/rfid-connect/apps/smart-trolley"} className="w-full inline-block">
            {/* Smart Trolley */}
            RFID Trial Room
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/smart-reads/rfid-connect/apps/smart-trolley"} className="w-full inline-block">
            {/* Smart Trolley */}
            Warehouse Management
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/smart-reads/rfid-connect/apps/smart-trolley"} className="w-full inline-block">
            {/* Smart Trolley */}
            Central Device Management
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/smart-reads/rfid-connect/apps/smart-trolley"} className="w-full inline-block">
            {/* Smart Trolley */}
            Asset Management
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/smart-reads/rfid-connect/apps/smart-trolley"} className="w-full inline-block">
            {/* Smart Trolley */}
            RFID Inventory Management
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SmartNav;
