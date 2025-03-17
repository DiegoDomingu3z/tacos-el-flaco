"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPhone } from "react-icons/fa6";
import { getSiteSettings, urlFor } from "@/services/sanityClient";
import formatPhoneNumber from "@/services/helper";
import helper from "@/services/helper";
import { IoMenu, IoClose } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";


const Header = ({ siteSettings, menu }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubOpen, setIsSubOpen] = useState(false);

    const scrollTo = (id) => {
        setIsOpen(false)
        setIsSubOpen(false)
        const target = document.getElementById(id)
        const offset = 100; // Adjust this value to control how much less it scrolls down
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
    return (
        <header className="w-full">
            <div className="container mx-auto px-3 md:px-4 lg:px-10 flex justify-between items-center ">

                {/* Logo */}
                <motion.div
                    className="flex items-center"
                    initial={{ x: -100, opacity: 0, rotate: -10 }}
                    animate={{ x: 0, opacity: 1, rotate: [0, -5, 5, -3, 3, 0] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <Image
                        src={siteSettings?.logo?.asset ? urlFor(siteSettings.logo.asset._ref) : ""}
                        alt="Logo"
                        width={150}
                        height={80}
                        className="h-16 md:h-28 w-auto object-contain"
                    />
                </motion.div>


                {/* Desktop Nav */}
                <motion.div
                    initial={{ y: -100, opacity: 0, rotate: -10 }}
                    animate={{ y: 0, opacity: 1, rotate: [0, -5, 5, -3, 3, 0] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <nav className="hidden md:flex space-x-6 text-3xl">
                        <a className="text-gray-700 hover:text-gray-900" onClick={() => scrollTo('main-menu')}>Menu</a>
                        <a href="https://maps.apple.com/?q=37.7749,-122.4194" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">Location</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
                    </nav>
                </motion.div>
                {/* Order Now Button */}
                <motion.div
                    initial={{ x: 100, opacity: 0, rotate: -10 }}
                    animate={{ x: 0, opacity: 1, rotate: [0, -5, 5, -3, 3, 0] }}
                    transition={{ duration: 1, ease: "easeInOut" }} className="flex gap-2">
                    <a href={`tel:+${siteSettings?.phoneNumber ? '' : ''}`} className="hidden md:block bg-black  text-white px-5 py-2 rounded-full transition-transform duration-300 ease-in-out hover:-translate-y-1 shadow-md hover:shadow-lg">
                        <span className="flex items-center space-x-3"> <FaPhone className="me-2" /> {helper.formatPhoneNumber(siteSettings?.phoneNumber)}</span>
                    </a>

                </motion.div>
                {/* Mobile Menu Button */}
                <button onClick={() => {
                    setIsOpen(!isOpen)
                    setIsSubOpen(false)
                }} className="md:hidden alt">
                    {isOpen ? <IoClose className="text-black text-3xl" /> : <IoMenu className="text-black text-3xl" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: -100, opacity: 0 }} // Start higher up
                        animate={{ y: 0, opacity: 1 }} // Drop down smoothly
                        exit={{ y: -100, opacity: 0 }} // Slide back up when closing
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="nav-links duration-500 md:static bg-white absolute top-20 left-0 w-full text-center"
                    >
                        <div className="md:hidden bg-white border-t">
                            <nav className="flex flex-col items-center py-4 space-y-4">
                                <button
                                    onClick={() => setIsSubOpen(!isSubOpen)} id="menu-btn" className="flex ms-3 items-center gap-2">Menu {isSubOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
                                <AnimatePresence>
                                    {isSubOpen && (
                                        <motion.div
                                            initial={{ y: -10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -10, opacity: 0 }}
                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                            className=" mt-2 flex flex-col space-y-4 border-b border-gray-300   w-full "
                                        >
                                            {menu ? menu.map((m, index) => (
                                                <a key={index} onClick={() => scrollTo(m._id)} className="text-gray-600 hover:text-gray-800">{m.title}</a>
                                            )) : null}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <a href="#" className="text-gray-700 hover:text-gray-900">Location</a>
                                <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
                                <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

