"use client";

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
            <h2 className="text-3xl md:text-4xl mt-10 font-bold mb-4 text-center text-black border-b border-gray-300">
                Menu
            </h2>
            {menu ? menu.map((m) => (
                <div key={m._id} className="md:mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 px-4 md:px-0 text-black">
                        {m.title}
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2 cursor-pointer">
                        {m.dishes ? m.dishes.map((dish) => (
                            <div key={dish._id} className="text-gray-500 border-t border-gray-300 border-b md:border p-4 md:rounded-lg shadow-sm hover:shadow-md transition">
                                <h3 className="text-lg text-black font-semibold">
                                    {language === "es" && dish.es_name ? dish.es_name : dish.eng_name}
                                </h3>
                                <p className="text-gray-700">
                                    {language === "es" && dish.es_description ? dish.es_description : dish.eng_description}
                                </p>
                                <p className="font-bold text-lg mt-2">${dish.price}</p>
                            </div>
                        )) : null}
                    </div>
                </div>
            )) : <div>Loading...</div>}
        </div>
    );
};

export default Menu;