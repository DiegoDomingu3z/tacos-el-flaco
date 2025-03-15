"use client";
import { useState } from "react";
import { urlFor } from "@/services/sanityClient";

const Banner = ({ siteSettings }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="w-screen relative slide-down">

            <img
                src={siteSettings?.banner?.asset ? urlFor(siteSettings.banner.asset._ref) : ""}
                className="w-full h-auto md:h-100 object-cover"

            />
        </div>
    );
}

export default Banner;