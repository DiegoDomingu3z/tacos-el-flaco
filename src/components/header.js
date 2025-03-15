"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa6";
import { getSiteSettings, urlFor } from "@/services/sanityClient";
import formatPhoneNumber from "@/services/helper";
import Language from "./languege";
const Header = ({ siteSettings }) => {
    const [isOpen, setIsOpen] = useState(false);

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
                    <img src={siteSettings?.logo?.asset ? urlFor(siteSettings.logo.asset._ref) : "/logo-2.png"} className="h-16 md:h-28" />
                </motion.div>


                {/* Desktop Nav */}
                <motion.div
                    initial={{ y: -100, opacity: 0, rotate: -10 }}
                    animate={{ y: 0, opacity: 1, rotate: [0, -5, 5, -3, 3, 0] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <nav className="hidden md:flex space-x-6 text-3xl">
                        <a href="#" className="text-gray-700 hover:text-gray-900">Menu</a>
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
                        <span className="flex items-center space-x-3"> <FaPhone className="me-2" /> {formatPhoneNumber(siteSettings?.phoneNumber)}</span>
                    </a>

                </motion.div>
                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? "closed" : "OPEN"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <nav className="flex flex-col items-center py-4 space-y-4">
                        <a href="#" className="text-gray-700 hover:text-gray-900">Menu</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Catering</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Locations</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Rewards</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Gifts</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Careers</a>
                        <a href="#" className="bg-black text-white px-5 py-2 rounded-full">
                            ORDER NOW
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;