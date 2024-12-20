import React, { useState, useContext } from "react";
import { CrowdFundingContext } from "../Context/CrowdFunding";
import Logo from "../Components/Logo";
import Menu from "../Components/menu";

const NavBar = () => {
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuList = ["White Paper", "Project", "Donation", "Members"];

  return (
    <div
      className="backgroundMain"
      style={{ backgroundColor: 'rgba(234, 243, 250, 255)' }}
    >
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8"
            >
              <Logo color="text-black" />
              <span className="ml-2 text-xl font-bold tracking-wide text-black uppercase">
                CrowdForage
              </span>
            </a>
            <ul className="flex items-center hidden space-x-8 lg:flex text-black">
              {menuList.map((el, i) => (
                <li key={i + 1}>
                  <a
                    href="/"
                    aria-label="Our product"
                    className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex">
            {!currentAccount && (
              <button
                onClick={() => connectWallet()}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Connect Wallet
              </button>
            )}
          </div>
          <div className="lg:hidden z-40">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <Logo color="text-black" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-black uppercase">
                          Company
                        </span>
                      </a>
                    </div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg
                        className="w-5 text-gray-600"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L10.6,12l-6.3,6.3c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3c0.5,0,0.7-0.1,1-0.3c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {menuList.map((el, i) => (
                        <li key={i + 1}>
                          <a
                            href="/"
                            aria-label="Our product"
                            className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            {el}
                          </a>
                        </li>
                      ))}
                      <li>
                        <a
                          href="/"
                          onClick={() => connectWallet()}
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign Up"
                          title="Sign Up"
                        >
                          Connect Wallet
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
