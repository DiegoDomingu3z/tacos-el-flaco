"use client";
import { useState } from "react";
import { urlFor } from "@/services/sanityClient";
import Image from "next/image";

const Banner = ({ siteSettings }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="w-screen relative slide-down">

            <div className="relative w-full h-[250px] md:h-[400px] lg:h-[500px]">
                <Image
                    src={siteSettings?.banner?.asset ? urlFor(siteSettings.banner.asset._ref) : ""}
                    alt="Banner"
                    fill={true} // Makes it take full width/height of parent div
                    className="object-cover"
                />
            </div>
        </div>
    );
}

export default Banner;