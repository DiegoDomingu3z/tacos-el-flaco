"use client";

import { urlFor } from "@/services/sanityClient";
import { useState, useEffect } from "react";

const Menu = ({ menu }) => {
    const [language, setLanguage] = useState("en"); // Default to English

    // Load language from localStorage when component mounts
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedLanguage = localStorage.getItem("language");
            if (storedLanguage) {
                setLanguage(storedLanguage);
            }
        }

        // Listen for language changes in localStorage
        const handleStorageChange = (event) => {
            if (event.key === "language") {
                setLanguage(event.newValue || "en");
            }
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    return (
        <div className="md:mx-50 mb-20">
            <h2 className="text-3xl md:text-4xl mt-10 font-bold mb-4 text-center text-black ">
                Menu
            </h2>
            {menu ? menu.map((m) => (
                <div key={m._id} className="md:mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 px-4 md:px-0 text-black">
                        {m.title}
                    </h3>
                    <div className="grid md:gap-6 md:grid-cols-2 cursor-pointer">
                        {m.dishes ? m.dishes.map((dish, i) => (
                            <div key={dish._id} className={`text-gray-500  h-35 md:h-30 ${i === 0 ? 'border-t' : ''}
                             border-b flex justify-between border-gray-300  md:border p-4 md:rounded-lg md:shadow-sm hover:shadow-md transition`}>
                                <div >
                                    <h3 className="text-lg text-black font-semibold">
                                        {language === "es" && dish.es_name ? dish.es_name : dish.eng_name}
                                    </h3>
                                    <p className="text-gray-700">
                                        {language === "es" && dish.es_description ? dish.es_description : dish.eng_description}
                                    </p>
                                    <p className="font-bold text-lg mt-2">${dish.price.toFixed(2)}</p>
                                </div>
                                <img src={dish.image?.asset._ref ? urlFor(dish.image?.asset._ref) : ""} alt="dish image" className="md:w-25" />
                            </div>
                        )) : null}
                    </div>
                </div>
            )) : <div>Loading...</div>}
        </div>
    );
};

export default Menu;