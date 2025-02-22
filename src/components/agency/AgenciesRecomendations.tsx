import React from 'react'
import { Agency } from '@/types'
import Image from 'next/image';
import Link from 'next/link';
import formatToHyphenated from '@/utils/formatPathName';

interface AgencyCardProps {
    agency: Pick<Agency, 'title' | 'imageSrc' | 'services'>; // Only include title and imgSrc
}

const AgencyCard: React.FC<AgencyCardProps> = ({ agency }) => {
    return (
        <Link href={`/agencies/${formatToHyphenated(agency.title)}`} >
            <div className="p-4">
                <Image src={agency.imageSrc} width={386} height={294} alt={agency.title} className="w-full object-cover rounded-md" />
                <h2 className="mt-2 text-lg font-semibold">{agency.title}</h2>
                <div className="flex flex-wrap gap-2 mt-4">
                    {agency.services.map((service: string, index: number) => (
                        <span
                            key={index}
                            className="px-3 py-1 border border-gray-300 rounded-full text-sm font-medium"
                        >
                            {service}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    )
}

const AgenciesRecommendations = ({ agencies }: { agencies: Agency[] }) => {
    return (
        <section className='p-[60px]'>
            <h1 className='font-crimson font-bold text-4xl text-center'>Explore Other Agencies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {agencies.map((agency) => (
                    <AgencyCard key={agency.title} agency={{ title: agency.title, imageSrc: agency.imageSrc, services: agency.services }} />
                ))}
            </div>
        </section>
    )
}

export default AgenciesRecommendations
