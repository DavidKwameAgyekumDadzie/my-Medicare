import { Close } from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = ({ showMenu, active }) => {
  return (
    <ul className={active? "flex-col flex items-center fixed inset-0 p-5 bg-black/40 backdrop-blur-lg left-1/4 justify-center md:hidden": "hidden"}>
      <Close onClick={showMenu} className="cursor-pointer"/>
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
  );
};

export default NavItems;
