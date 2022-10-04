import { MenuOutlined } from "@material-ui/icons";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavItems from "./NavItems";
import "./style.css";

function NavBar() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className="topbar">
        <nav className=" bg-white-500 text-blue-600  flex justify-between max-w-7xl mx-auto  ">
          <div className="  m-4 text-left">
            {/* <img src={logo} alt="shef logo" className="w-6 h-6 " /> */}
            <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 ">
              My Medicare
            </h3>
          </div>
          <div className="absolute right-6 md:hidden top-4 scale-150">
            <MenuOutlined
              onClick={showMenu}
              className="scale-150 cursor-pointer"
            />
          </div>

          <ul className="gap-5 hidden md:flex p-4 ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/why-my-medicare">Why My Medicare</NavLink>
            </li>
            <li>
              <NavLink to="/how-it-works">How It Works</NavLink>
            </li>
            <li>
              <NavLink to="/specialties">Specialties</NavLink>
            </li>
            <li>
              <NavLink to="/FAQ">FAQs</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contacts</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register with us</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support us</NavLink>
            </li>
          </ul>
          <NavItems showMenu={showMenu} active={active} />
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
