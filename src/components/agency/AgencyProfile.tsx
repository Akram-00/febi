import { Agency } from '@/types'
import Image from 'next/image'
import React from 'react'
import { FaGlobe, FaUsers, FaMapMarkerAlt } from 'react-icons/fa'

interface AgencyProfileProps {
    agency: Agency
}

const AgencyProfile: React.FC<AgencyProfileProps> = ({ agency }) => {
    return (
        <section className="bg-[#FFF8E5] p-[60px] rounded-lg flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Left Section */}
            <div className="flex-1">
                <h1 className="text-2xl lg:text-4xl font-bold text-black font-crimson">{agency.title}</h1>
                <p className="text-gray-700 mt-2">{agency.description}</p>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {agency.services.map((service, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 border border-gray-300 rounded-full text-sm font-medium"
                        >
                            {service}
                        </span>
                    ))}
                </div>

                {/* Project Details */}
                <div className="mt-4 space-y-2 text-gray-700">
                    <p className="flex items-center gap-2">
                        <FaGlobe className="text-gray-600" />
                        <span className="font-semibold">Average Project Size:</span> {agency.projectSize}
                    </p>
                    <p className="flex items-center gap-2">
                        <FaUsers className="text-gray-600" />
                        <span className="font-semibold">Team Size:</span> {Math.min(...agency.teamSize)} - {Math.max(...agency.teamSize)}
                    </p>

                    <p className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-gray-600" />
                        <span className="font-semibold">Located In:</span> {agency.location}
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                    <button className="px-6 py-2 border border-black rounded-lg font-medium hover:bg-gray-100">
                        Learn More
                    </button>
                    <button className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600">
                        Request Introduction 🔒
                    </button>
                </div>
            </div>

            {/* Right Section (Agency Logo) */}
            <div className="flex-shrink-0 bg-black p-6 rounded-lg">
                <Image src={agency.imageSrc} alt={agency.title} width={386} height={294} className='w-full' />
            </div>
        </section>
    )
}

export default AgencyProfile
