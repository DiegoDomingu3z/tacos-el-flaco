"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en"); // Default to English
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Only runs on the client
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);

    useEffect(() => {
        if (isClient) {
            localStorage.setItem("language", language);
        }
    }, [language, isClient]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};