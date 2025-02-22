import { Agency, User } from "@/types";

const users: User[] = [
    { username: "Kishore Jeyachandran", image: "/pngs/kishorejeyachandran.png" },
    { username: "Shashank Ashok", image: "/pngs/shashankashok.png" },
];

const agencies: Agency[] = [
    {
        id: "1",
        title: "Creative Edge",
        imageSrc: "/pngs/primesite-banner.png",
        tag: "Branding",
        description: "We create compelling brand stories with unique visual identities. Our designs resonate with your audience and enhance your brand presence.",
        customers: [users[0], users[1]],
        siteLink: "https://www.primesiteinnovations.in/",
        services: ["branding", "graphic design", "strategy"],
        projectSize: 150000,
        teamSize: [50, 100],
        location: "Bangalore, Karnataka"
    },
    {
        id: "2",
        title: "Visionary Studio",
        imageSrc: "/pngs/primesite-banner.png",
        tag: "Web Design",
        description: "From concept to execution, we craft visually stunning and user-friendly websites. We focus on UI/UX to maximize engagement and conversions.",
        customers: [users[0], users[1]],
        siteLink: "https://www.primesiteinnovations.in/",
        services: ["web design", "SEO", "app development"],
        projectSize: 200000,
        teamSize: [30, 80],
        location: "Hyderabad, Telangana"
    },
    {
        id: "3",
        title: "Pixel Perfect",
        imageSrc: "/pngs/primesite-banner.png",
        tag: "UI/UX",
        description: "Our UI/UX experts create seamless and intuitive digital experiences. We blend aesthetics with functionality to enhance user satisfaction.",
        customers: [users[0], users[1]],
        siteLink: "https://www.primesiteinnovations.in/",
        services: ["UI/UX", "prototyping", "web design"],
        projectSize: 180000,
        teamSize: [40, 90],
        location: "Mumbai, Maharashtra"
    },
    {
        id: "4",
        title: "StudioX",
        imageSrc: "/pngs/primesite-banner.png",
        tag: "Marketing",
        description: "We provide full-scale marketing solutions tailored to your business. Our strategies drive brand growth through data-driven campaigns.",
        customers: [users[0], users[1]],
        siteLink: "https://www.primesiteinnovations.in/",
        services: ["social media marketing", "PPC", "SEO"],
        projectSize: 120000,
        teamSize: [25, 70],
        location: "Pune, Maharashtra"
    },
    {
        id: "5",
        title: "Elevate Agency",
        imageSrc: "/pngs/primesite-banner.png",
        tag: "Advertising",
        description: "We help brands achieve maximum visibility with strategic advertising. Our campaigns are designed for engagement and conversions.",
        customers: [users[0], users[1]],
        siteLink: "https://www.primesiteinnovations.in/",
        services: ["digital ads", "print media", "influencer marketing"],
        projectSize: 250000,
        teamSize: [60, 150],
        location: "New Delhi, Delhi"
    },
    {
        id: "6",
        title: "Brand Architects",
        imageSrc: "/pngs/primesite-banner.png",
        tag: "Branding",
        description: "We build powerful brand identities that stand out in the market. Our strategic approach ensures lasting impact and recognition.",
        customers: [users[0], users[1]],
        siteLink: "https://www.primesiteinnovations.in/",
        services: ["branding", "content strategy", "visual design"],
        projectSize: 170000,
        teamSize: [45, 110],
        location: "Kolkata, West Bengal"
    },
    {
        id: "7",
        title: "Nova Creatives",
        imageSrc: "/pngs/primesite-banner.png",
        tag: "Graphic Design",
        description: "We specialize in high-quality illustrations, infographics, and digital visuals. Our creative storytelling enhances brand communication.",
        customers: [users[0], users[1]],
        siteLink: "https://www.primesiteinnovations.in/",
        services: ["graphic design", "motion graphics", "branding"],
        projectSize: 140000,
        teamSize: [35, 85],
        location: "Ahmedabad, Gujarat"
    },
    {
        id: "8",
        title: "NextGen Media",
        imageSrc: "/pngs/primesite-banner.png",
        tag: "Digital Marketing",
        description: "We leverage AI and automation to revolutionize digital marketing. Our data-driven strategies ensure measurable growth and ROI.",
        customers: [users[0], users[1]],
        siteLink: "https://www.primesiteinnovations.in/",
        services: ["digital marketing", "content marketing", "automation"],
        projectSize: 220000,
        teamSize: [70, 180],
        location: "Chennai, Tamil Nadu"
    },
    {
        id: "9",
        title: "Trendsetters",
        imageSrc: "/pngs/primesite-banner.png",
        tag: "Content Creation",
        description: "We craft viral content that drives engagement and brand awareness. Our team specializes in multimedia production and storytelling.",
        customers: [users[0], users[1]],
        siteLink: "https://www.primesiteinnovations.in/",
        services: ["video production", "copywriting", "social media content"],
        projectSize: 160000,
        teamSize: [55, 120],
        location: "Jaipur, Rajasthan"
    },
];

export { users, agencies };
