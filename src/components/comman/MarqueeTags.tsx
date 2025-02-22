import React from 'react';
import { MarqueeTagsProps } from '@/types';
import Marquee from 'react-fast-marquee';

const MarqueeTags: React.FC<{ tags: MarqueeTagsProps[] }> = ({ tags }) => {
    return (
        <div className={`w-full bg-white py-8`}>
            <Marquee
                gradient={false}
                speed={30}
                className="overflow-hidden"
            >
                {tags.map((tag: MarqueeTagsProps, index: number) => (
                    <div
                        key={`first-${index}`}
                        style={{ border: `3px solid ${tag.borderColor}` }}
                        className={`
              group
              flex 
              items-center 
              gap-2 
              bg-white 
              rounded-full 
              px-3 
              py-2 
              mx-3 
              transition-all 
              duration-300 
              transform 
              hover:font-lg
                cursor-pointer
            `}
                    >
                        <span className="">
                            {"#" + tag.title}
                        </span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default MarqueeTags;