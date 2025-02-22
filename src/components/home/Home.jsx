import React from 'react'
import Hero from '@/components/home/Hero'
import MarqueeTags from '../comman/MarqueeTags'
import { tags } from '@/data/homePageData'
import AgenciesSection from '../comman/AgenciesSection'
import { agencies } from '@/data/Agencies';


const Home = () => {
    return (
        <section>
            <Hero />
            <MarqueeTags tags={tags} />
            <AgenciesSection title='The Ultimate Toolkit for Entrepreneurs' agencies={agencies} />
        </section>
    )
}

export default Home