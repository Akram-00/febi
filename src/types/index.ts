
type Assets = Record<string, string>;

interface MarqueeTagsProps {
    title: string,
    borderColor: string,
}

interface User {
    username: string;
    image: string;
}

interface Agency {
    id: string;
    title: string;
    imageSrc: string;
    tag: string;
    description: string;
    customers: User[];
    siteLink: string;
    services: string[];
    projectSize: number;
    teamSize: number[];
    location: string;
}



export type { Assets, MarqueeTagsProps, Agency, User }