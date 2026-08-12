import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Thirumala Reddy",
  initials: "TR",
  url: "https://www.linkedin.com/in/thirumala231/",
  location: "Chennai, TN",
  locationLink: "https://www.google.com/maps/place/chennai",
  description:
    "Fullstack Developer & Problem Solver. I love building things and helping people. I read books. I'm fascinated by psychology and mind.",
  summary:
    "Im a Backend-focused Full Stack Developer (Node.js/Express/React) with [2+ years](/#experience) of production experience, transitioning from infrastructure and API development on VR/Unity-based platforms into product-focused web development. Built and shipped [TruKanban , a real-time collaborative Kanban app](/#projects) (Node.js, PostgreSQL, React, Socket.io), and [Natours , a full-stack tour booking platform with Stripe payment integration](/#projects) . Proficient in REST API design, relational and document databases, and AWS deployment.",
  avatarUrl: "/Headshot_me.jpeg",
  skills: [
    {
      category: "Languages",
      skills: ["JavaScript", "Python", "Java", "C#", "SQL"],
    },
    {
      category: "Backend & Databases",
      skills: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "Mongoose",
        "Drizzle ORM",
        "WebSockets",
      ],
    },
    {
      category: "Frontend",
      skills: ["React", "Redux Toolkit", "React Query", "Tailwind CSS"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Vercel", "Netlify"],
    },
    {
      category: "Testing & Tools",
      skills: ["Jest", "Postman", "Git", "GitHub", "JIRA"],
    },
    {
      category: "AI & LLM Tools",
      skills: ["Claude", "Gemini", "Cursor", "Ollama"],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@isireddy.tr@gmail.com",
    tel: "+91 91820 37368",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/thirumal-231",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/thirumala231/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/thirumal_0231",
        icon: Icons.x,

        navbar: true,
      },
      instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/thirumal_231/",
        icon: Icons.instagram,

        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: `https://wa.me/9182037368?text=Hey Thirumal`,
        icon: Icons.whatsapp,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@thirumal-231?si=ZmBMxy60PA53MjCz",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Novac Technologies Solutions",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Associate Developer",
      logoUrl: "/novac.png",
      start: "Aug 2024",
      end: "Present",
      description:
        "Designed backend systems for persisting and serving 3D asset data via RESTful APIs, consumed by a Unity-based VR client, for a customer-support training platform built for Punjab National Bank. Built and deployed REST APIs and WebSocket services in Node.js to support real-time data sync and third-party Text-to-Speech (TTS) integration for an enterprise VR training application used by bank employees",
    },
  ],
  education: [
    {
      school: "RGUKT Ongole",
      href: "https://www.linkedin.com/school/rguktongole/?originalSubdomain=in",
      degree: "B.Tech - Mechanical",
      logoUrl: "/rgukt.png",
      start: "2019",
      end: "2023",
    },
    {
      school: "RGUKT Ongole",
      href: "https://www.linkedin.com/school/rguktongole/?originalSubdomain=in",
      degree: "Pre University Course",
      logoUrl: "/rgukt.png",
      start: "2017",
      end: "2019",
    },
  ],
  certificates: [
    {
      school: "Claude Code in Action",
      href: "https://verify.skilljar.com/c/8kmkaetdoucr",
      degree: "Anthropic",
      logoUrl: "/anthropic.jpg",
      start: "2026",
      end: "Present",
    },
    {
      school: "Become A Prompt Engineer",
      href: "https://www.educative.io/verify-certificate/nZp3lECrqy4PWv9nDsPDl0NxlGnWsQ",
      degree: "Educative",
      logoUrl: "/educative.jpeg",
      start: "2025",
      end: "Present",
    },
    {
      school: "Career Essentials in GitHub Professional Certificate",
      href: "https://www.linkedin.com/learning/certificates/3f96825f9cc5acf280d2cef1064d95b39c0068971f184f552ef0571bba815921?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BDRjGMe1vTeWi3mwZc6AKHA%3D%3D",
      degree: "LinkedIn",
      logoUrl: "/github.png",
      start: "2025",
      end: "Present",
    },
    {
      school: "Career Essentials in Generative AI",
      href: "https://www.linkedin.com/learning/certificates/a1b5204c18b53ca22c3727de2084766a66a0d7079225b3cae634e7d6b6820fd2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BDRjGMe1vTeWi3mwZc6AKHA%3D%3D",
      degree: "LinkedIn",
      logoUrl: "/microsoft.png",
      start: "2025",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Tru Kanban",
      href: "https://youtu.be/qEnW_jNVW-I?si=bcPeRSTh2QYO3CNh",
      dates: "Jan 2026 - Feb 2026",
      active: true,
      description:
        "Designed and built a full-stack Kanban application using Node.js, Express, React, and PostgreSQL (Drizzle ORM) with drag-and-drop board management & optimistic TanStack Query updates for seamless UI performance, Thanks to Socket.io you can invite your friends for collaboration correct/write your tasks with AI",
      technologies: [
        "Node.js",
        "JavaScript",
        "PostgreSQL",
        "DrizzleORM",
        "Gemini AI",
        "DnD Kit",
        "TailwindCSS",
        "Tanstack Query",
      ],
      links: [
        {
          type: "Website",
          href: "https://youtu.be/qEnW_jNVW-I?si=bcPeRSTh2QYO3CNh",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://vimeo.com/1217705170?share=copy&fl=sv&fe=ci",
    },
    {
      title: "Natours",
      href: "https://youtu.be/BT0mcVri1VU?si=8AlTlWoj102ATcqF",
      dates: "June 2025 - July 2025",
      active: true,
      description:
        "Developed and deployed a full-stack tour booking platform using Node.js and Express adhering to MVC design patterns, featuring integrated Stripe payment for online transactions. Engineered responsive React interface leveraging React Query for server state management, Redux Toolkit for complex client state, and React Router for seamless client-side navigation.",
      technologies: [
        "Node.js",
        "JavaScript",
        "MongoDB",
        "Express.js",
        "TailwindCSS",
        "Stripe",
        "Redux Toolkit",
      ],
      links: [
        {
          type: "Website",
          href: "https://natours.trustudios.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/thirumal-231/Natours",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://vimeo.com/1217705169",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
