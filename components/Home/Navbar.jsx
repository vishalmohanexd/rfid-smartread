import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LeftArrow, ToggleIcon } from "../common/Icons";
import ProductsNav from "./ProductsNav";
import ResourcesNav from "./ResourceNav";
import SupportNav from "./SupportNav";
import { useRouter } from "next/router";
import BusinessTypeNav from "./BusinessTypeNav";
import SmartNav from "./Smartnav";
import IndustryNav from "./Industrynav";
import Aboutnav from "./Aboutnav";

const Navbar = ({ setSidebarOpen }) => {
  const router = useRouter();
  const [isShowProducts, setShowProducts] = useState(false);
  const [isResources, setResources] = useState(false);
  const [isSupport, setSupport] = useState(false);
  const [isSmart, setSmart] = useState(false);
  const [isIndustry, setIndustry] = useState(false);
  const [isAbout,setAbout]=useState(false)

  const yOffsetValue = typeof window !== "undefined" && window.pageYOffset;
  const [yOffset, setYOffset] = useState(yOffsetValue);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    setYOffset(currentYOffset);
  }

  const onSignIn = () => {
    window.open(`${process.env.NEXT_PUBLIC_Auth}`, "_blank");
  };

  const onSignUp = () => {
    router.push("/pricing");
  };

  const leaveMouse = () => {
    setShowProducts(false);
    setResources(false);
    setSupport(false);
    setSmart(false);
    setIndustry(false);
    setAbout(false)
  };

  const onhoverMenu = (appname) => {
    if (appname === "Why RFID?") {
      setShowProducts(false);
      setResources(false);
      setSupport(false);
      setSmart(false);
      setIndustry(false);
      setAbout(false)
    } else if (appname === "Res") {
      setShowProducts(false);
      setResources(true);
      setSupport(false);
      setSmart(false);
      setIndustry(false);
      setAbout(false)
    } else if (appname === "Industry") {
      setIndustry(true);
      setShowProducts(false);
      setResources(false);
      setSupport(false);
      setSmart(false);
      setAbout(false)
    } else if (appname === "product") {
      setShowProducts(true);
      setResources(false);
      setSupport(false);
      setSmart(false);
      setIndustry(false);
      setAbout(false)
    } else if (appname === "smart") {
      setShowProducts(false);
      setResources(false);
      setSupport(false);
      setSmart(true);
      setIndustry(false);
      setAbout(false)
    } else if (appname === "support") {
      setShowProducts(false);
      setResources(false);
      setSupport(true);
      setSmart(false);
      setIndustry(false);
      setAbout(false)
    }
    else if (appname === "about") {
      setShowProducts(false);
      setResources(false);
      setSupport(false);
      setSmart(false);
      setIndustry(false);
      setAbout(true)
    } else {
      setShowProducts(false);
      setResources(false);
      setSupport(false);
      setSmart(false);
      setIndustry(false);
      setAbout(false)
    }
  };

  return (
    <>
      <nav
        onMouseLeave={leaveMouse}
        className={` transition-all duration-500 ease-linear px-3 xl:px-10  flex items-center bg-white py-[18px] justify-between ${
          yOffset > 70 ? " sticky-bar top-0 sticky z-30 shadow-sm" : ""
        }`}
      >
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

        <ul className="ff-Inter text-xs hidden lg:flex items-center justify-between text-darkBlack">
          <li className="mx-5 transition-all duration-200 ease-in relative cursor-pointer">
            <span onMouseOver={() => onhoverMenu("Why RFID?")}>Why RFID?</span>
          </li>
          <li className="mx-5 transition-all duration-200 ease-in relative cursor-pointer">
            <span onMouseOver={() => onhoverMenu("smart")}>Solutions</span>
            {isSmart && <SmartNav />}
          </li>
          <li className="mx-5 transition-all duration-200 ease-in relative cursor-pointer">
            <span onMouseOver={() => onhoverMenu("Industry")}>Industries</span>
            {isIndustry && <IndustryNav />}
          </li>
          <li className="mx-5 transition-all duration-200 ease-in relative cursor-pointer">
            <span onMouseOver={() => onhoverMenu("product")}>Products</span>
            {isShowProducts && <ProductsNav />}
          </li>
          <li className="mx-5 transition-all duration-200 ease-in relative cursor-pointer">
            <span onMouseOver={() => onhoverMenu("Res")}>Resources</span>
            {isResources && <ResourcesNav />}
          </li>
          <li className="mx-5 transition-all duration-200 ease-in relative cursor-pointer">
            <span onMouseOver={() => onhoverMenu("support")}>Support</span>
            {isSupport && <SupportNav />}
          </li>
          <li className="mx-5 transition-all duration-200 ease-in relative cursor-pointer">
            <span onMouseOver={() => onhoverMenu("about")}>About us</span>
             {isAbout && <Aboutnav />} 
          </li>
        </ul>

        <div className="flex items-center ff-Inter">
          <span
            onClick={onSignIn}
            style={{ cursor: "pointer" }}
            className="ff-Inter text-xs text-darkBlack mr-4 xl:mr-10 hover:opacity-70 transition-all duration-200 ease-in hidden sm:block"
          >
            {" "}
            Login
          </span>
          <button
            onClick={onSignUp}
            className="hidden lg:flex bg-blue px-5 xl:px-5 py-3 xl:py-1.5 rounded-full text-white text-xs items-center free-trial-btn-hover transition-all duration-200 ease-in hover:shadow-lg whitespace-nowrap"
          >
            Get Started
            <LeftArrow />
          </button>
          <div className="lg:hidden flex">
            <Link href="https://auth.cwsuite.com/sign-in">
              <Image
                className="mr-3"
                src="/images/user.png"
                alt="User Image"
                width={20}
                height={20}
              />
            </Link>
            <Link href="/pricing">
              <Image
                src="/images/mdi_rocket-launch.svg"
                alt="Cart Symbol Image"
                width={20}
                height={20}
              />
            </Link>
          </div>

          <span
            className="lg:hidden  cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          >
            {" "}
            <ToggleIcon />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
