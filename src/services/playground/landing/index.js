import React from "react";
import Background from "./assets/Background.jpg";
import Logo from "./assets/Logo.png";

const Landing = () => {
  return (
    <>
      <div
        className="min-h-screen relative bg-gray-800 overflow-hidden"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundColor: "#0c0e20",
          backgroundSize: "cover",
        }}
      >
        <div className="relative pt-6 pb-12 sm:pb-32">
          <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#" aria-label="Home">
                  <img className="h-8 w-auto sm:h-10" src={Logo} alt="Logo" />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
                    id="main-menu"
                    aria-label="Main menu"
                    aria-haspopup="true"
                  >
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="hidden space-x-10 md:flex md:ml-10">
                <a href="#" className="font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out">
                  Products
                </a>
                <a href="#" className="font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out">
                  Community
                </a>
                <a href="#" className="font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out">
                  Exchange
                </a>
                <a href="#" className="font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out">
                  Docs
                </a>
              </div>
            </div>
            <div className="hidden md:flex">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700 active:bg-gray-700 transition duration-150 ease-in-out"
              >
                Enter Fi App
              </a>
            </div>
          </nav>
          <main className="mt-8 sm:mt-16 md:mt-20 lg:mt-24">
            <div className="mx-auto max-w-screen-xl">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                    >
                      <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                        1 SUSHI = $2.70
                      </span>
                      <span className="ml-4 text-sm leading-5">View more assets</span>
                      {/* Heroicon name: chevron-right */}
                      <svg
                        className="ml-2 w-5 h-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <h2 className="mt-4 text-4xl tracking-tight leading-10 font-extrabold text-white sm:mt-5 sm:leading-none sm:text-6xl lg:mt-6 lg:text-5xl xl:text-6xl">
                      Everyone can be a chef
                      {/* <br className="hidden md:inline" /> */}
                      <span className="text-indigo-400"> with SUSHI</span>
                    </h2>
                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      The SushiSwap protocol realigns incentives for network participants by introducing revenue sharing
                      and community-driven network effrots to the popular AMM model
                    </p>
                    <div class="mt-8 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div class="rounded-md shadow">
                        <a
                          href="#"
                          class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                          style={{ backgroundColor: "#fa52a0" }}
                        >
                          Enter Fi App
                        </a>
                      </div>
                      <div class="mt-3 sm:mt-0 sm:ml-3">
                        <a
                          href="#"
                          class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                          style={{ backgroundColor: "#3e3e7c" }}
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

const MobileMenu = () => {
  return (
    <>
      {/*
    Mobile menu, show/hide based on menu open state.
    
    Entering: "duration-150 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
        */}
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-md">
          <div
            className="rounded-lg bg-white shadow-xs overflow-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Close menu"
                >
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Product
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Features
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Company
              </a>
            </div>
            <div>
              <a
                href="#"
                className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
