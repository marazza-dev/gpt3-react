import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => (
    <>
      <p>
        <a href='#home' onClick={() => setToggleMenu(false)}>
          Home
        </a>
      </p>
      <p>
        <a href='#wgpt3' onClick={() => setToggleMenu(false)}>
          What is GPT?
        </a>
      </p>
      <p>
        <a href='#possibility' onClick={() => setToggleMenu(false)}>
          Open AI
        </a>
      </p>
      <p>
        <a href='#feature' onClick={() => setToggleMenu(false)}>
          Case Studies
        </a>
      </p>
      <p>
        <a href='#blog' onClick={() => setToggleMenu(false)}>
          Library
        </a>
      </p>
    </>
  );

  return (
    <div className='gpt3--navbar'>
      <div className='gpt3--navbar-links'>
        <div className='gpt3--navbar-links-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3--navbar-links-container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3--navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3--navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='gpt3--navbar-menu-container scale-up-center'>
            <div className='gpt3--navbar-menu-container-links'>
              <Menu />
            </div>
            <div className='gpt3--navbar-menu-container-links-sign'>
              <p>Sign in</p>
              <button type='button' onClick={() => setToggleMenu(false)}>
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
