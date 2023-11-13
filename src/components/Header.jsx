// import React from 'react'
import { useState } from "react";
import logoApp from "../assets/logoapp.svg";
import Button from "./Button";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const [toggle, setToggle] = useState(false)
  
  return (
    <nav className="bg-white border-gray-200  sticky top-0 z-50 shadow-md">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="\" className="flex items-center">
          <img src={logoApp} className="h-8 mr-3" alt="App Logo" />
          <span className="self-center text-2xl font-semibold text-primary-color whitespace-nowrap">
            Ceraform
          </span>
        </a>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setToggle(!toggle)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="false"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`absolute sm:static top-16 w-[90%] md:block md:w-auto ${toggle ? 'visible' : 'hidden'}`} id="navbar-default">
          
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border drop-shadow-md sm:drop-shadow-none border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
            <li>
              <HashLink
                to="/#top"
                onClick={() => setToggle(!toggle)}
                className="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-transparent md:border-0 hover:text-primary-color md:p-0 "
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#introduction"
                onClick={() => setToggle(!toggle)}
                className="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-transparent md:border-0 hover:text-primary-color md:p-0 "
              >
                Introduction
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#about"
                onClick={() => setToggle(!toggle)}
                className="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-transparent md:border-0 hover:text-primary-color md:p-0 "
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#contact-us"
                onClick={() => setToggle(!toggle)}
                className="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-transparent md:border-0 hover:text-primary-color md:p-0 "
              >
                Contact Us
              </HashLink>
            </li>
            <li className="hidden lg:block">
              <Button name="Apps" callback="/checker" size="sm"></Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
