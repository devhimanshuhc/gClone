import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-4xl font-mono text-black py-1 px-2 rounded  dark:text-gray-200">
            Google
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="px-2 py-1 "
        >
          {darkTheme ? (
            <img
              src="https://img.icons8.com/material-outlined/24/FFFFFF/sun--v1.png"
              alt="lightMode"
            />
          ) : (
            <img
              alt="darkMode"
              src="https://img.icons8.com/external-ios-line-2px-amoghdesign/24/000000/external-dark-multimedia-line-30px-ios-line-2px-amoghdesign.png"
            />
          )}
        </button>
      </div>
      <Search />
    </div>
  );
};
