import React from 'react'
import logo from "../assets/PSInitials.jpg";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"


export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className = "mx-2 w-12" src = {logo} alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/ppsahu/" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/ppsahu?tab=repositories" target="blank"><FaGithub /></a>
            <a href="https://x.com/pratyush_313" target='blank'><FaSquareXTwitter /></a>
            <a href="https://www.instagram.com/pratzo_313/" target='blank'><FaInstagram/></a>
        </div>
    </nav>
  )
}
