'use client'
import { agencies } from '@/data/Agencies'
import formatToHyphenated from '@/utils/formatPathName'
import { useParams } from 'next/navigation'
import React from 'react'
import AgencyProfile from './AgencyProfile'
import AgenciesRecommendations from './AgenciesRecomendations'

const AgencyComponent = () => {
    const params = useParams()
    const { agencyName } = params;

    const agency = agencies.find((agency) =>
        agencyName === formatToHyphenated(agency.title) // Fix: Use `===` and return explicitly
    );

    if (!agency) {
        return (
            <section className='h-screen flex justify-center items-center'>
                <h1 className='font-bold text-xl md:text-2xl lg:text-3xl'>
                    AGENCY NOT FOUND 404
                </h1>
            </section>
        );
    }

    return (
        <section>
            <AgencyProfile agency={agency} />
            <AgenciesRecommendations agencies={[agencies[0], agencies[3], agencies[4]]} />
        </section>
    );
}

export default AgencyComponent;
