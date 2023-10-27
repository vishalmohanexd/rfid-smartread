import Link from "next/link";
import React from "react";

const ProductsNav = () => {
  return (
    <>
      <div className="z-20 top-[38px] w-[240px] absolute left-0 flex flex-col xl:flex-row py-3 bg-white shadow rounded">
        <ul className="flex flex-col items-start w-full ff-Inter">
          <li className="footer-text   text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/point-of-sale"} className="w-full inline-block">
              RFID - TAG's
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/inventory"} className="w-full inline-block">
              {" "}
              RFID Readers{" "}
            </Link>
            <ul className="ml-4 py-1">
              <li className="py-1">
                <Link href="#">Handheld Reader</Link>
              </li>
              <li className="py-1">
                <Link href="#">Fixed Readers</Link>
              </li>
              <li className="py-1">
                <Link href="#">Integrated Readers</Link>
              </li>
            </ul>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/sales"} className="w-full inline-block">
              {" "}
              RFID Printers
            </Link>
            <ul className="ml-4 py-1">
              <li className="py-1">
                <Link href="#">Chainway Printers</Link>
              </li>
            </ul>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/purchase"} className="w-full inline-block">
              RFID Antennas and Sensors
            </Link>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/finance"} className="w-full inline-block">
              IoT Software
            </Link>
            <ul className="ml-4 py-1">
              <li className="py-1">
                <Link href="#">Central Device Monitoring</Link>
              </li>
              <li className="py-1">
                <Link href="#"> IoT Agent</Link>
              </li>
            </ul>
          </li>
          <li className="footer-text  text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 cursor-pointer">
            <Link href={"/apps/hr"} className="w-full inline-block">
              Custom Solutions
            </Link>
            <ul className="ml-4 py-1">
              <li className="py-1">
                <Link href="#"> Tailored RFID Products</Link>
              </li>
              <li className="py-1">
                <Link href="#">Custom Software Development</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductsNav;
