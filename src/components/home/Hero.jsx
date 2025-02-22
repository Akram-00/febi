'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { images } from "@/data/assets";
import Image from "next/image";

function ToggleButton() {
    const [isHired, setIsHired] = useState(true);

    return (
        <div className="w-fit bg-primary p-2 rounded-full">
            <div
                className="relative flex items-center bg-primary p-1 rounded-full w-64 cursor-pointer"
                onClick={() => setIsHired(!isHired)}
            >
                {/* Sliding Background */}
                <motion.div
                    className="absolute top-0 left-0 w-1/2 h-full bg-white rounded-full"
                    animate={{ x: isHired ? 0 : "100%" }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />

                {/* Text Labels */}
                <div className="relative flex w-full justify-between text-[20px] font-medium text-black">
                    <span className={`w-1/2 text-center py-2 z-10 text-black}`}>
                        Get hired
                    </span>
                    <span className={`w-1/2 text-center py-2 z-10 text-black}`}>
                        Hire service
                    </span>
                </div>
            </div>
        </div>
    );
}



const Hero = () => {

    return (
        <section className='px-8 py-10 flex flex-row bg-secondaryLight'>
            <div className="hidden w-1/5 min-[1440px]:flex flex-col items-end justify-between relative">
                <Image src={images.pngs.raiseFunds} width={72} height={72} className="z-10" alt="hero-icons" />
                <Image src={images.pngs.raiseFunds} className="self-start z-10" width={72} height={72} alt="hero-icons" />
                <Image src={images.pngs.raiseFunds} width={72} height={72} className="z-10" alt="hero-icons" />
                <Image src={images.pngs.leftArrowPath} width={149} height={274} className="absolute w-[90%] top-[13%] right-[11%]" alt="arrow-path" />
            </div>

            <div className="flex flex-col justify-center items-center">
                <ToggleButton />
                <div className="mt-4 w-full mx-auto text-center space-y-4">
                    <p className="text-xl font-medium">
                        For Entrepreneurs By Enablers
                    </p>
                    <h1 className="text-7xl font-bold font-crimson">
                        The Ultimate Toolkit for Entrepreneurs to Start and Scale
                    </h1>

                    <p className="text-xl font-normal">
                        Access to Top Experts, Tools, and Strategies for Entrepreneurs
                    </p>
                    <div className="linear-gradient-border w-fit mx-auto">
                        <div className="p-3 flex flex-row gap-2 items-center bg-secondaryLight rounded-[30px]">
                            <span className="text-base font-medium">
                                Backed by Communities
                            </span>
                            <Image src={images.pngs.uomLogo} width={40} height={40} alt="uom" />
                            <Image src={images.pngs.eomLogo} width={40} height={40} alt="uom" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="hidden w-1/5 min-[1440px]:flex flex-col items-start justify-between relative">
                <Image src={images.pngs.raiseFunds} width={72} height={72} className="z-10" alt="hero-icons" />
                <Image src={images.pngs.raiseFunds} className="self-end z-10" width={72} height={72} alt="hero-icons" />
                <Image src={images.pngs.raiseFunds} width={72} height={72} className="z-10" alt="hero-icons" />
                <Image src={images.pngs.leftArrowPath} width={149} height={274} className="absolute scale-x-[-1] w-[90%] top-[13%] left-[11%]" alt="arrow-path" />
            </div>
        </section>
    )
}

export default Hero







