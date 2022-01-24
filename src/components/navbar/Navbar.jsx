import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className='gpt3--navbar'>
      <div className='gpt3--navbar-links'>
        <div className='gpt3--navbar-links-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3--navbar-links-container'>
          <p>
            <a href='#home'>Home</a>
          </p>
          <p>
            <a href='#wgpt3'>What is GPT?</a>
          </p>
          <p>
            <a href='#possibility'>Open AI</a>
          </p>
          <p>
            <a href='#feature'>Case Studies</a>
          </p>
          <p>
            <a href='#blog'>Library</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
