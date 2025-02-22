import { images } from '@/data/assets'
import { Agency, User } from '@/types'
import formatToHyphenated from '@/utils/formatPathName'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AgencyCard: React.FC<{ agency: Agency }> = ({ agency }) => {

    return (
        <div className='p-5 flex flex-col gap-4 bg-secondary rounded-2xl'>
            <Image src={agency.imageSrc} alt={agency.title} width={386} height={294} className='w-full' />
            <h5 className='text-xl font-semibold'>{agency.title}</h5>
            <div className='py-2 px-3 border border-multi-skyBlue bg-white text-xs font-normal rounded-full w-fit'>
                {agency.tag}
            </div>
            <p className='text-base text-text-lightGrey'>
                {agency.description}
            </p>
            <h6 className='text-base font-medium'>Used By</h6>
            <div className='flex flex-row gap-4 overflow-x-auto whitespace-nowrap no-scrollbar'>
                {
                    agency.customers.map((customer: User, index: number) => (
                        <div key={index} className='flex items-center rounded-full justify-between p-2 gap-2 border bg-secondaryLight border-x-multi-lightGreen'>
                            <Image width={24} height={24} src={customer.image} alt={customer.username} />
                            {customer.username}
                        </div>
                    ))
                }
            </div>
            <div className='flex gap-4'>
                <Link href={`/agencies/${formatToHyphenated(agency.title)}`} className='flex-1'>
                    <button className='px-6 py-3 border border-primary rounded-lg bg-transparent text-primary text-base font-bold w-full'>
                        View Profile
                    </button>
                </Link>
                <a href={agency.siteLink} target='_blank' className='flex-1'>
                    <button className='px-6 py-3 border border-primary rounded-lg bg-primary text-white text-base font-bold w-full'>
                        View Site <Image src={images.pngs.rightArrow} className='inline' alt='site' width={28} height={28} />
                    </button>
                </a>
            </div>
        </div>
    )
}

export default AgencyCard