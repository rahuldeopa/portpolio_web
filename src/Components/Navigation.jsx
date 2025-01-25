import React from "react";
import logo from    "../assets/logo.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navigation=()=>{
    return ( 
        <nav className="flex items-center justify-between py-6 ">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <motion.h1 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className=" drop-shadow-2xl bg-gradient-to-r from-stone-200 to-stone-400 text-4xl bg-clip-text text-transparent lg:text-6xl">Portfolio
                    </motion.h1>
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/rahul-deopa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                    <FaLinkedin/>
                </a>
                <a href="https://github.com/rahuldeopa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                    <FaGithub/>
                </a>
                <a href="https://x.com/D1ozD"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                    <FaSquareXTwitter/>
                </a>
            </div>
        </nav>                                                                                                                     
    )
}
export default Navigation;