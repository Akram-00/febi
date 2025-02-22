import React from 'react';
import { images } from '@/data/assets';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex items-center gap-4 justify-between bg-secondaryLight px-8 py-2">
            {/* Left: Logo */}
            <div className="flex items-center gap-2 pb-8">
                <Link href={'/'} passHref>
                    <Image
                        src={images.pngs.logoYellow}
                        alt="logo"
                        width={150}
                        height={60}
                        className="w-[150px] h-auto"
                    />
                </Link>
            </div>

            {/* Middle: Search Bar */}
            <div className="flex-1">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 border border-primary text-text-lightGrey rounded-full focus:outline-none bg-transparent"
                />
            </div>

            {/* Right: Navigation Links & Button */}
            <div className="flex items-center gap-6">
                <Link href="agencies" className="nav-links">Agencies</Link>
                <Link href="experts" className="nav-links">Experts</Link>
                <Link href="deals" className="nav-links">Deals</Link>

                {/* Sign Up Button */}
                <button className="bg-primary p-2 rounded-lg text-white font-poppins font-bold text-base leading-6">
                    Sign Up
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
