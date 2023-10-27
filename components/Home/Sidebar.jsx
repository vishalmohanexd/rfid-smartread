import Image from "next/image";
import React, { useState } from "react";
import { CrossIcon2 } from "../common/Icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const router = useRouter();

  const [activeMenu, setActiveMenu] = useState(null);
  const [openMenus, setOpenMenus] = useState([]);

  const handleMenuClick = (menu) => {
    if (menu === activeMenu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
      const item = sidebarlinks.find((item) => item.title === menu);
      if (!item.subMenu) {
        router.push(item.url);
        setSidebarOpen(false);
      }
    }
  };

  const routeTohome = () => {
    router.push("/");
  };

  const sidebarlinks = [
    {
      title: "Why RFID?",
      url: "/whyrfid",
      // subMenu: [
      //   {
      //     title: "Point of Sale",
      //     url: "/apps/point-of-sale",
      //   },
      //   {
      //     title: "Inventory",
      //     url: "/apps/inventory",
      //   },
      //   {
      //     title: "Sales",
      //     url: "/apps/sales",
      //   },
      //   {
      //     title: "Purchase",
      //     url: "/apps/purchase",
      //   },
      //   {
      //     title: "Finance",
      //     url: "/apps/finance",
      //   },
      //   {
      //     title: "HRMS",
      //     url: "/apps/hr",
      //   },
      //   {
      //     title: "Restaurant POS",
      //     url: "/apps/point-of-sale/restaurant",
      //   },
      //   {
      //     title: "Price Connect",
      //     url: "/apps/price-connect",
      //   },
      //   {
      //     title: "Composer",
      //     url: "/apps/composer",
      //   },
      // ],
    },
    {
      title: "Solutions",
      // url: "/apps",
      subMenu: [
        {
          title: "RFID Check Out",
          url: "/solutions/retail",
        },
        {
          title: "RFID Smart Trolley",
          url: "/solutions/restaurant",
        },
        {
          title: "RFID Smart Tray",
          url: "/solutions/rfid-connect",
        },
        {
          title: " RFID EAS Gates",
          url: "/solutions/rfid-connect",
        },
        {
          title: "RFID Trial Room",
          url: "/solutions/rfid-connect",
        },
        {
          title: "Warehouse Management",
          url: "/solutions/rfid-connect",
        },
        {
          title: "Central Device Management",
          url: "/solutions/rfid-connect",
        },
        {
          title: "Asset Management",
          url: "/solutions/rfid-connect",
        },
        {
          title: "RFID Inventory Management",
          url: "/solutions/rfid-connect",
        },
      ],
    },
    {
      title: "Industries",
      // url: "/apps",
      subMenu: [
        {
          title: "Apparel and Fashion",
          url: "/smart-reads/rfid-connect/apps/check-out-basket",
        },
        {
          title: "Sports Retail",
          url: "/smart-reads/rfid-connect/apps/eas-gates",
        },
        {
          title: "Jewellery",
          url: "/smart-reads/rfid-connect/apps/smart-tray",
        },
        {
          title: "Automotive",
          url: "/smart-reads/rfid-connect/apps/smart-fitting-room",
        },
        {
          title: "Warehousing",
          url: "/smart-reads/rfid-connect/apps/smart-trolley",
        },
        {
          title: "Education",
          url: "/smart-reads/rfid-connect/apps/smart-trolley",
        },
        {
          title: "Manufacturing",
          url: "/smart-reads/rfid-connect/apps/smart-trolley",
        },
      ],
    },
    {
      title: "Products",
      url: "/Products",
      subMenu: [
        {
          title: "RFID - TAG's",
          url: "/smart-reads/rfid-connect/apps/check-out-basket",
        },
        {
          title: "RFID Readers",
          url: "/smart-reads/rfid-connect/apps/eas-gates",
        },
        {
          title: "RFID Printers",
          url: "/smart-reads/rfid-connect/apps/smart-tray",
        },
        {
          title: "RFID Antennas and Sensors",
          url: "/smart-reads/rfid-connect/apps/smart-fitting-room",
        },
        {
          title: "IoT Software",
          url: "/smart-reads/rfid-connect/apps/smart-trolley",
        },
        {
          title: "Custom Solutions",
          url: "/smart-reads/rfid-connect/apps/smart-trolley",
        },
      ],
    },
    {
      title: "Resources",
      url: "/Resources",
      subMenu: [
        {
          title: "Videos",
          url: "",
        },
        {
          title: "Case Studies",
          url: "/support/professional-services",
        },
        {
          title: "Testimonials",
          url: "/support/professional-services",
        },
      ],
    },
    {
      title: "Support",
      url: "/su",
      subMenu: [
        {
          title: "Help Center",
          url: "https://help.cwsuite.com/",
        },
        {
          title: "Services",
          url: "/support/professional-services",
        },
        {
          title: "Training & Support",
          url: "/support/professional-services",
        },
        {
          title: "Consulting",
          url: "/support/professional-services",
        },
        {
          title: "ERP Integrations",
          url: "/support/professional-services",
        },
      ],
    },
    {
      title: "About us",
      url: "/su",
      subMenu: [
        {
          title: "Company Overview",
          url: "https://help.cwsuite.com/",
        },
        {
          title: "Vision & Mission",
          url: "/support/professional-services",
        },
        {
          title: "Partners",
          url: "/support/professional-services",
        },
        {
          title: "Our Team",
          url: "/support/professional-services",
        },
      ],
    },
  ];

  const handleSubMenuClick = (title) => {
    if (openMenus.includes(title)) {
      setOpenMenus(openMenus.filter((menu) => menu !== title));
    } else {
      setOpenMenus([...openMenus, title]);
    }
  };

  const [viewaccount, setViewAccount] = useState(null);
  const activeViewAccountHandler = (value) => {
    if (value === viewaccount) {
      setViewAccount(null);
    } else {
      setViewAccount(value);
    }
  };

  return (
    <>
      <aside
        className={`z-40 shadow-md fixed lg:hidden w-full h-screen top-0 flex xl:hidden flex-col items-center bg-white justify-between transition-all duration-300 ease-in ${
          isSidebarOpen ? "left-0" : "left-full"
        }`}
      >
        <div className="w-full lg:hidden">
          <div
            className="flex items-center justify-between w-full"
            style={{
              height: "65px",
              backgroundColor: "#fff",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
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

            <div className="flex">
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
                  className="ml-2 mr-4"
                  src="/images/mdi_rocket-launch.svg"
                  alt="Cart Symbol Image"
                  width={20}
                  height={20}
                />
              </Link>

              <span
                className="cursor-pointer"
                onClick={() => setSidebarOpen(false)}
              >
                <CrossIcon2 />
              </span>
            </div>
          </div>

          <ul className="ff-Inter text-sm flex flex-col justify-between text-darkBlack overflow-auto max-h-[500px] scrollbar-w-0 w-full">
            {sidebarlinks.map((item, index) => (
              <div key={index}>
                <li>
                  <div
                    className="flex items-center justify-between w-full cursor-pointer py-4 px-4"
                    style={{ borderBottom: "1px solid #C2C2C2" }}
                    onClick={() =>
                      item.subMenu
                        ? handleSubMenuClick(item.title)
                        : handleMenuClick(item.title)
                    }
                  >
                    <span
                      style={{
                        color: "#101828",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "500",
                      }}
                    >
                      {item.title}
                    </span>
                    {item.subMenu && (
                      <span className="cursor-pointer">
                        {openMenus.includes(item.title) ? (
                          <ChevronUpIcon style={{ width: "20px" }} />
                        ) : (
                          <ChevronDownIcon style={{ width: "20px" }} />
                        )}
                      </span>
                    )}
                  </div>
                  {item.subMenu && (
                    <ul
                      style={{
                        backgroundColor: "#F3F5FC",
                        fontSize: "16px",
                        color: "#101828",
                        fontStyle: "normal",
                        fontWeight: "400",
                      }}
                      className={
                        openMenus.includes(item.title) ? "show px-4" : "hidden"
                      }
                    >
                      {item.subMenu.map((child, index) => (
                        <li
                          className="py-3"
                          key={index}
                          onClick={() => {
                            if (child.url.startsWith("http")) {
                              window.open(child.url, "_blank");
                            } else {
                              router.push(child.url);
                              setSidebarOpen(false);
                            }
                          }}
                        >
                          {child.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
