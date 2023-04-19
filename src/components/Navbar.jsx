import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, gglogo, gdevlogo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} top-0 z-20 fixed-top 
      flex w-full items-center bg-primary py-5`}
    >
      <div className="max-w-7x1 mx-auto flex w-full 
      items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={gdevlogo} alt="logo" className="h-9 w-9 scale-150 hover:object-none" />
          <p className="cursor-pointer text-[18px] font-bold text-white flex">
            Genaro &nbsp;
            <span className="hidden hover:text-cyan-400 sm:block">
               | Software Engineer
            </span>
          </p>
        </Link>
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }
               cursor-pointer text-[18px] font-medium hover:text-white `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] cursor-pointer object-contain"
            onClick={() => {
              setToggle(!toggle);
            }}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"} black-gradient absolute
           top-20 right-0 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex list-none flex-col items-start justify-end gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  }
                  font-poppins cursor-pointer text-[16px] font-medium
               `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
