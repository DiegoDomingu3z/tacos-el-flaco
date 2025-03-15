"use client";
import { useState, useEffect } from "react";

const Language = () => {
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedLanguage = localStorage.getItem("language");
            if (storedLanguage) {
                setLanguage(storedLanguage);
            }
        }
    }, []);

    const handleLanguageChange = (event) => {
        const newLanguage = event.target.value;
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
        window.dispatchEvent(new Event("storage")); // ✅ Force update across components
        window.location.reload()
    };

    return (
        <div className="flex items-center text-black text-sm cursor-pointer">
            <select value={language} onChange={handleLanguageChange} className="rounded">
                <option value="en">EN 🇺🇸</option>
                <option value="es">ES 🇲🇽</option>
            </select>
        </div>
    );
};

export default Language;