"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../ui/navbar-menu";
import "./navbar.css";
import { cn } from "../../utils/cn";
import logo from "../../assets/csi_logo/logo.png";
import { Link } from "react-scroll";
import AboutCollege from "../AboutCollege";

export function Navbar() {
  return (
    <div className="relative w-full flex">
      <Navbarr className="top-2 md:rounded-full md:border md:border-transparent bg-custom-gray backdrop-blur-lg shadow-input" />
    </div>
  );
}

function Navbarr({ className }) {
  const [active, setActive] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(" fixed top-0 inset-x-0 w-full z-50  shadow-md", className)}>
      <div className="flex justify-between items-center px-4 py-2 md:px-8">
        <div className="flex items-center">
          <img src={logo} alt="CSI Logo" className="h-10 w-auto mr-2" />
          <p className="text-lg font-semibold dark:text-white">Computer Society Of India</p>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black dark:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden  space-x-8 md:flex">
        
          <Menu setActive={setActive} >
           <Link to="home" smooth={true} duration={500}><MenuItem setActive={setActive} active={active} item="Home"></MenuItem></Link>
           <Link to='aboutCollege' smooth={true} duration={500} ><MenuItem setActive={setActive} active={active} item="About"></MenuItem></Link>
           <Link to="upcomingEvents"smooth={true} duration={500}><MenuItem setActive={setActive} active={active} item="Upcoming Events"></MenuItem></Link> 
           <Link to="pastEvents"  smooth={true} duration={500}><MenuItem setActive={setActive} active={active} item="Past Events"></MenuItem>              </Link>
            <Link to="footer" smooth={true} duration={500}><MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem></Link>
          </Menu>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="About">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href=""
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href=""
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href=""
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href=""
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Upcoming Events">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href=""
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href=""
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href=""
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href=""
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Past Events">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href=""
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href=""
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href=""
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href=""
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href=""
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href=""
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href=""
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href=""
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
          </Menu>
        </div>
      )}
    </div>
  );
}


// <div className="text-sm grid grid-cols-2 gap-10 p-4">
// <ProductItem
//   title="Algochurn"
//   href=""
//   src="https://assets.aceternity.com/demos/algochurn.webp"
//   description="Prepare for tech interviews like never before."
// />
// <ProductItem
//   title="Tailwind Master Kit"
//   href=""
//   src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
//   description="Production ready Tailwind css components for your next project"
// />
// <ProductItem
//   title="Moonbeam"
//   href=""
//   src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
//   description="Never write from scratch again. Go from idea to blog in minutes."
// />
// <ProductItem
//   title="Rogue"
//   href=""
//   src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
//   description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
// />
// </div>

// ---------------------

 {/* <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div> */}