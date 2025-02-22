'use client'

import React, { useState } from 'react';
import { Agency } from '@/types';
import AgencyCard from './AgencyCard';
import Image from 'next/image';
import { images } from '@/data/assets';

interface FilterComponentProps {
  tags: string[];
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
}

interface AgencySecionProps {
  title: string;
  agencies: Agency[];
  description?: string;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ tags, selectedTag, setSelectedTag }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold">Filter by Tag</h3>
      <div className="flex gap-4 mt-2 overflow-x-auto whitespace-nowrap no-scrollbar">
        <button
          className={`px-8 py-3 rounded-full border-black border-[1px] border-solid bg-transparent items-center gap-2 flex flex-row justify-between`}
        >
          <Image src={images.pngs.settingsSliders2} className='w-5 h-5' alt='filter' width={20} height={20} />
          <span className='text-xl'>filter</span>
        </button>
        {tags.map((tag: string, index: number) => (
          <button
            key={index}
            className={`px-6 py-3 text-xl rounded-full border-black border-[1px] border-solid ${selectedTag === tag ? 'bg-black text-white' : 'bg-transparent'}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

interface AgencyGridComponentProps {
  filteredData: Agency[];
}

const AgencyGridComponent: React.FC<AgencyGridComponentProps> = ({ filteredData }) => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        filteredData.map((data: Agency, index: number) => (
          <AgencyCard key={index} agency={data} />
        ))
      }
    </div>
  );
};

const AgenciesSection: React.FC<AgencySecionProps> = ({ title, agencies, description }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = Array.from(new Set(['All', ...agencies.map((agency) => agency.tag)]));

  const filteredData = selectedTag === 'All' ? agencies : agencies.filter((agency) => agency.tag === selectedTag);

  return (
    <section className="p-6 flex flex-col gap-6 bg-secondaryLight">
      <h1 className='font-crimson font-bold text-4xl text-center'>{title}</h1>
      {description && <p className='font-normal text-xl font-poppins text-center'>{description}</p>}
      <FilterComponent tags={tags} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <AgencyGridComponent filteredData={filteredData} />
    </section>
  );
};

export default AgenciesSection;
