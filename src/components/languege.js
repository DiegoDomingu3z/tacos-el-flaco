"use client";
import { useLanguage } from "@/context/LanguegeContext";
import { useState } from "react";

const Language = () => {
    const { language, setLanguage } = useLanguage();
    console.log(language, 'la')
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };
    return (
        <div className="flex items-center text-black text-sm cursor-pointer">
            < select
                value={language}
                onChange={handleLanguageChange}
                className="rounded"
            >
                <option value="en">EN 🇺🇸</option>
                < option value="es">ES 🇲🇽</option >
            </select >
        </div >
    );
};

export default Language;