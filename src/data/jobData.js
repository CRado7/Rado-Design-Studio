import Thumbnail from "../assets/reia/Reia-Thumbnail 2.png";
    import reiaBanner from "../assets/reia/Reia-Banner.svg";
    import reiaSymbol from "../assets/reia/Reia-Symbol.svg";
    import reiaHome from "../assets/reia/Reia-Home.png";
import TPS from "../assets/the-print-shop/ThePrintShop-Banner.svg";
    import TPSthumb from "../assets/the-print-shop/ThePrintShop-Thumbnail.svg";
import ChungLiThumbnail from "../assets/chung-li/Chung-Li-Thumbnail.svg";
    import ChungLi from "../assets/chung-li/Oompa-Banner.svg";
    import Oompa from "../assets/chung-li/Oompa.png";
    import Template from "../assets/chung-li/Template.png";
    import Back from "../assets/chung-li/Back.png";
    import Left from "../assets/chung-li/Left.png";
    import Front from "../assets/chung-li/Front.png";
    import Right from "../assets/chung-li/Right.png";
import CraterLogo from "../assets/crater/Crater-Banner.png";
    import CraterThumbnail from "../assets/crater/Crater-Thumbnail.png";
import DopeSouls from "../assets/dope-souls/DopeSouls-Banner.svg";
    import DopeSoulsThumbnail from "../assets/dope-souls/DopeSouls-Thumbnail.svg";

const jobData = [
    {
        id: 1,
        caseType: "Case Study",
        thumbnail: Thumbnail,
        image: reiaBanner,
        company: "Reia",
        services: [
            "Web Design",
            "Web Development",
        ],
        tag: "Launching a newly FDA approved medical device that provides support for women.",
        header: {
            title: "Bringing a new medical device to the web with a fresh design and digestible content.",
            intro: "Reia is a medical device company that provides support for women. They recently launched a new FDA approved device and needed a website to showcase their product and provide information to potential customers. The goal was to create a modern, user-friendly website that would effectively communicate the benefits of the device and drive conversions. Reia has reached global audiences in their first year of business.",
        },
        approach: {
            title: "Our Approach",
            description: "We took a collaborative approach with Reia to gain a deep understanding of their brand, target audience, and website goals. Our research into other medical device websites allowed us to identify best practices and opportunities for differentiation. From there, we developed a comprehensive design and development plan, incorporating wireframes and a strategic content approach. Content strategy played a crucial role in the project, as we needed to distill large amounts of information into clear, digestible segments that effectively outlined the device’s usage and benefits.",
        },
        design: {
            title: "Design",
            description: "The website design was inspired by the medical device itself, incorporating typography and a color palette that reflects the brand’s identity. The goal was to create a look and feel that is both inviting and reassuring—calm yet impactful. We developed a responsive design that ensures seamless functionality across all devices, providing a positive user experience. Clear calls to action and intuitive navigation guide users effortlessly to the information they need.",
            images: [
                reiaSymbol,
            ],
        },
        identity: {
            title: "Website",
            images: [
                {
                    image: reiaHome,
                    caption: "Reia Home Page Layout",
                },
            ],
        },
        extraImages: {
            images: [
                {
                    image: reiaBanner,
                    caption: "Reia Banner",
                },
            ],
        },

        featured: true,
    },
    {
        id: 2,
        caseType: "Case Study",
        thumbnail: TPSthumb,
        image: TPS,
        company: "The Print Shop",
        services: [
            "Web Design",
            "Web Development",
        ],
        tag: "A print shop that specializes in custom printing and design services.",
        header: {
            title: "Creating a modern website for a traditional print shop.",
            intro: "The Print Shop is a family-owned business that has been in operation for 3 decades. They needed a new website to showcase their services and attract new customers. The goal was to create an updated, user-friendly website that would not only reflect the print shop's legacy but also appeal to a modern audience.",
        },
        approach: {
            title: "Our Approach",
            description: "Collaborating with The Print Shop involved several on-site visits, allowing us to observe their operations firsthand and connect with their team. This experience provided valuable insights into how the website should be designed. What was once an outdated, abandoned site was transformed into a modern, user-friendly platform that effectively showcases their services and enhances the customer experience. The design is sharp, clean, and intuitive, ensuring seamless navigation. Additionally, we integrated a streamlined quote request form, making it easy for customers to get in touch and submit artwork directly through the site.",
        },
        design: {
            title: "Design",
            description: "The design of the website was inspired by the day-to-day operations of the shop itself. Unlike many print shops, this one is clean, organized, and has a natural, welcoming vibe. We translated that into a modern, streamlined design that not only showcases their services but also mirrors the efficiency and attention to detail that define their workflow. Every element was carefully crafted to reflect their brand’s personality, ensuring a seamless digital experience. The result is a visually appealing, user-friendly site that resonates with both new and returning customers.",
            images: [],
        },
        identity: {
            title: "Website",
            images: [],
        },
        extraImages: {
            images: [
            ],
        },
        featured: true,
    },
    {
        id: 3,
        caseType: "Case Study",
        thumbnail: ChungLiThumbnail,
        image: ChungLi,
        company: "Chung-Li The Conisseur",
        services: [
            "Package Design",
            "Custom Art Creation",
            "Printing Services",
        ],
        tag: "Oompa Loops!",
        header: {
            title: "Bringing Oompa Loompa's to the cannabis world.",
            intro: "Chung Li The Conisseur is a cannabis company that specializes in high-quality, artisanal products. They needed a new package design to showcase their products and attract new customers. The goal was to create a unique, eye-catching design that would stand out on the shelves and reflect the brand's identity.",
        },
        approach: {
            title: "Our Approach",
            description: "When we say we can do anything, we mean it—Chung-Li put that to the test. Drawing inspiration from Willy Wonka’s Oompa Loompas, we reimagined the classic characters with a modern twist. The design incorporates vibrant colors, playful typography, and engaging graphics that bring the brand to life. To further enhance the experience, we integrated interactive elements such as games and puzzles on the packaging, adding an extra layer of fun and excitement for consumers."
        },
        design: {
            title: "Design",
            description: "The design of the packaging was inspired by the Willy Wonka's Oompa Loompas. The design showcases a modern twist on Oompa Loompas and showcases games to enhance the overall experience of the product.",
            images: [
                Oompa,
            ],
        },
        identity: {
            title: "Package Design",
            images: [
                {
                    image: Back,
                    caption: "Back",
                },
                {
                    image: Left,
                    caption: "Left",
                },
                {
                    image:  Front,
                    caption: "Front",
                },
                {
                    image:  Right,
                    caption: "Right",
                },
                {
                    image:  Template,
                    caption: "Template",
                }
            ],
        },
        extraImages: {
            images: [
            ],
        },
        featured: true,
    },
    { 
        id: 4,
        caseType: "Case Study",
        thumbnail: CraterLogo,
        image: CraterLogo,
        company: "Crater Snowboards",
        services: [
            "Web Design",
            "Web Development",
            "Branding",
        ],
        tag: "The ocean meets the mountains.",
        header: {
            title: "Bringing the ocean to the mountains.",
            intro: "Crater Snowboards is a new snowboard company that needed a website to showcase their products and attract new customers. The goal was to create a modern, user-friendly website that would reflect the brand's identity and appeal to a younger audience.",
        },
        approach: {
            title: "Our Approach",
            description: "We took a collaborative approach with Crater Snowboards to gain a deep understanding of their brand, target audience, and website goals. Our research into other snowboard companies allowed us to identify best practices and opportunities for differentiation. From there, we developed a comprehensive design and development plan, incorporating wireframes and a strategic content approach.",
        },
        design: {
            title: "Design",
            description: "The website design was inspired by the ocean and the mountains. The goal was to create a look and feel that is both inviting and adventurous. We developed a responsive design that ensures seamless functionality across all devices, providing a positive user experience. Clear calls to action and intuitive navigation guide users effortlessly to the information they need.",
            images: [],
        },
        identity: {
            title: "Website",
            images: [
                {
                    image: reiaHome,
                    caption: "Reia Home Page Layout",
                },
            ],
        },
        extraImages: {
            images: [
                {
                    image: reiaBanner,
                    caption: "Reia Banner",
                },
            ],
        },
        featured: false,
    },
    {
        id: 5,
        caseType: "Case Study",
        thumbnail: DopeSoulsThumbnail,
        image: DopeSouls,
        company: "Dope Souls Surf Club",
        services: [
            "Branding",
            "Custom Art Creation",
            "Printing Services",
        ],
        tag: "A lifestyle brand that celebrates chill surf culture.",
        header: {
            title: "Bringing the chill vibes to life.",
            intro: "Dope Soul Surf Club is a lifestyle brand that celebrates chill surf culture. They needed a new website to showcase their products and attract new customers. The goal was to create a modern, user-friendly website that would reflect the brand's identity and appeal to a younger audience.",
        },
        approach: {
            title: "Our Approach",
            description: "We took a collaborative approach with Dope Soul Surf Club to gain a deep understanding of their brand, target audience, and website goals. Our research into other lifestyle brands allowed us to identify best practices and opportunities for differentiation. From there, we developed a comprehensive design and development plan, incorporating wireframes and a strategic content approach.",
        },
        design: {
            title: "Design",
            description: "The website design was inspired by the chill vibes of surf culture. The goal was to create a look and feel that is both inviting and adventurous. We developed a responsive design that ensures seamless functionality across all devices, providing a positive user experience. Clear calls to action and intuitive navigation guide users effortlessly to the information they need.",
            images: [],
        },
        identity: {
            title: "Website",
            images: [
                {
                    image: reiaHome,
                    caption: "Reia Home Page Layout",
                },
            ],
        },
        extraImages: {
            images: [
                {
                    image: reiaBanner,
                    caption: "Reia Banner",
                },
            ],
        },
        featured: false,
    },
    { 
        id: 6,
        caseType: "Case Study",
        thumbnail: ChungLiThumbnail,
        image: ChungLi,
        company: "Backroads & Detours",
        services: [
            "Custom Art Creation",
            "Printing Services"
        ],
        tag: "An ode to those who take a different path.",
        header: {
            title: "Bringing the road less traveled to life.",
            intro: "Backroads & Detours is a lifestyle brand that celebrates the road less traveled. They needed a new website to showcase their products and attract new customers. The goal was to create a modern, user-friendly website that would reflect the brand's identity and appeal to a younger audience.",
        },
        approach: {
            title: "Our Approach",
            description: "We took a collaborative approach with Backroads & Detours to gain a deep understanding of their brand, target audience, and website goals. Our research into other lifestyle brands allowed us to identify best practices and opportunities for differentiation. From there, we developed a comprehensive design and development plan, incorporating wireframes and a strategic content approach.",
        },
        design: {
            title: "Design",
            description: "The website design was inspired by the road less traveled. The goal was to create a look and feel that is both inviting and adventurous. We developed a responsive design that ensures seamless functionality across all devices, providing a positive user experience. Clear calls to action and intuitive navigation guide users effortlessly to the information they need.",
            images: [],
        },
        identity: {
            title: "Website",
            images: [
                {
                    image: reiaHome,
                    caption: "Reia Home Page Layout",
                },
            ],
        },
        extraImages: {
            images: [
                {
                    image: reiaBanner,
                    caption: "Reia Banner",
                },
            ],
        },
        featured: false,
    }
];

export default jobData;