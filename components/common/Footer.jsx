import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../common/Icons";

const Footer = () => {
  return (
    <footer>
      <div className="container px-3 footer mx-auto my-8 sm:my-15">
      <div className="max-w-[190px] sm:max-w-[190px]">
          <Link href="/">
            <Image
              src="/images/cw-rfidlogo.webp"
              width={180}
              height={60}
              alt="LOGO"
            />
          </Link>
        </div>
        <div className="mt-5 border-t-2 border-[#E4E7EC] max-w-[1434px] mx-3"></div>
        <div className="my-6 grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-5">
          <div className="mt-5">
            <p className="font-Inter font-bold text-base text-darkBlack">
              Solutions
            </p>
            <ul className="footer-text ff-inter text-blueshade1">
              <Link href="/apps/point-of-sale">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  RFID Check Out
                </li>
              </Link>
              <Link href="/apps/inventory">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  RFID Smart Trolley
                </li>
              </Link>
              <Link href="/apps/sales">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  RFID Smart Tray
                </li>
              </Link>
              <Link href="/apps/purchase">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  RFID EAS Gates
                </li>
              </Link>
              <Link href="/apps/finance">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  RFID Trial Room
                </li>
              </Link>
              <Link href="/apps/hr">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Warehouse Management
                </li>
              </Link>
              <Link href="/composer">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Central Device Management
                </li>
              </Link>
              <Link href="/apps/price-connect">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Asset Management
                </li>
              </Link>
              <Link href="/apps/price-connect">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  RFID Inventory Management
                </li>
              </Link>
            </ul>
          </div>
          <div className="mt-5">
            <p className="font-Inter font-bold text-base text-darkBlack">
              Industries
            </p>
            <ul className="footer-text ff-inter text-blueshade1">
              <Link href="/resources/about-cw-suite">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Apparel and Fashion
                </li>
              </Link>
              <Link href="/resources/about-cw-suite">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Sports Retail
                </li>
              </Link>
              <Link href="/resources/about-cw-suite#our-team">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Jewellery
                </li>
              </Link>
              <Link href="/resources/about-cw-suite#our-team">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Automotive
                </li>
              </Link>
              <Link href="/resources/about-cw-suite#our-team">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Warehousing
                </li>
              </Link>
              <Link href="/resources/about-cw-suite#our-team">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Education
                </li>
              </Link>
              <Link href="/resources/about-cw-suite#our-team">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Manufacturing
                </li>
              </Link>
            </ul>
          </div>
          <div className="mt-5">
            <p className="font-Inter font-bold text-base text-darkBlack">
              About us
            </p>
            <ul className="footer-text ff-inter text-blueshade1">
              <Link href="https://medium.com/@cwsuite" target="_blank">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                Company Overview
                </li>
              </Link>
              <Link href="/pricing">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                Vision & Mission
                </li>
              </Link>
              <Link href="/pricing">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                Partners
                </li>
              </Link>
              <Link href="/pricing">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                Our Team
                </li>
              </Link>
            </ul>
          </div>
          <div className="mt-5">
            <p className="font-Inter font-bold text-base text-darkBlack">
              Support
            </p>
            <ul className="footer-text ff-inter text-blueshade1">
              <Link
                href="https://docs.cwsuite.com/cw-suite-knowledge-base/"
                target="_blank"
              >
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Knowledge Base
                </li>
              </Link>
              <Link href="/underconstruction">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Developer Docs
                </li>
              </Link>
              <Link href="/resources/contact">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Contact Us
                </li>
              </Link>
              <Link href="https://help.cwsuite.com/" target="_blank">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Help Center
                </li>
              </Link>
            </ul>
          </div>
          <div className="mt-5">
            <p className="font-Inter font-bold text-base text-darkBlack">
              Contact
            </p>
            <ul className="footer-text ff-inter text-blueshade1">
              <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue ">
                CW Smart Reads
              </li>
              <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                4th floor, T HUB, 2.0,<br /> In-orbit Mall Road,<br />  Hyderabad Telangana -
                500081
              </li>
              <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                support@cwsuite.com
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-[#E4E7EC] max-w-[1434px] mt-12 mx-3"></div>
        <div className="mt-11 sm:mt-11 grid md:grid-cols-2 ">
          <div className="flex lg:block justify-center lg:justify-start">
            <div className="flex justify-between max-w-[603px]">
              <Link
                href="/info#privacy"
                className="font-inter font-normal footer-text text-[#98A2B3] mx-2 lg:mx-0 transition-all ease-in duration-200 hover:text-blue"
              >
                Privacy policy
              </Link>
              <Link
                href="/info#cookie"
                className="font-inter font-normal footer-text text-[#98A2B3] mx-2 lg:mx-0 transition-all ease-in duration-200 hover:text-blue"
              >
                Cookies
              </Link>
              <Link
                href="/info#terms"
                className="font-inter font-normal footer-text text-[#98A2B3] mx-2 lg:mx-0 transition-all ease-in duration-200 hover:text-blue"
              >
                Terms of Use
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:mt-0 mt-5 lg:justify-end">
            <div className="flex justify-between max-w-[188px]">
              <a
                href="https://www.facebook.com/cwsuite"
                target="_blank"
                className="mx-2 transition-all duration-200 ease-in hover:-translate-y-[6px] cursor-pointer"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/cwsuite/"
                target="_blank"
                className="mx-2 transition-all duration-200 ease-in hover:-translate-y-[6px] cursor-pointer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://twitter.com/cwsuite"
                target="_blank"
                className="mx-2 transition-all duration-200 ease-in hover:-translate-y-[6px] cursor-pointer"
              >
                {/* <TwitterIcon /> */}
                <img src="/images/svg/x-twitter.svg" />
              </a>
              <a
                href="https://www.linkedin.com/company/cw-suite"
                target="_blank"
                className="mx-2 transition-all duration-200 ease-in hover:-translate-y-[6px] cursor-pointer"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
