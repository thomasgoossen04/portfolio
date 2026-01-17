export interface EducationEntry {
    institution: string;
    degree: string;
    field: string;
    startDate: Date;
    endDate: Date | null; // null if still ongoing
    location: string;
}

export interface LanguageEntry {
    name: string,
    fluency: string
}

export interface ProgLangEntry {
    name: string,
    experience: number // 0 to 1 (beginner to expert percentage)
}

export interface ProjectEntry {
    name: string,
    description: string,
    stack: string,
    url: string
}

export const resume = {
    about: {
        summary: "Thomas Goossen: A bachelor's student in Computing Science at Radboud University, developer of the published iOS app 'Einstein's Riddle'. Enthusiastic about tech-related topics such as embedded systems and game technologies. Enjoys all things aviation.",
    },

    contact: {
        name: 'Thomas Goossen',
        email: 'thomasgoossen@zeelandnet.nl',
        location: 'The Netherlands',
        web: 'website / github / linkedin'
    },

    education: [
        {
            institution: "Radboud University",
            degree: "Bachelor of Science",
            field: "Computing Science",
            startDate: new Date(2022, 8, 1),
            endDate: null,
            location: "Nijmegen"
        },
        {
            institution: "Ritsumeikan University",
            degree: "Bachelor Exchange program",
            field: "Study in Kansai Program",
            startDate: new Date(2025, 8, 26),
            endDate: new Date(2026, 0, 31),
            location: "OIC Campus, Osaka, Japan"
        },
        {
            institution: "Lodewijk College",
            degree: "VWO Bilingual Education",
            field: "NT (Natuur/techniek)",
            startDate: new Date(2016, 8, 1),
            endDate: new Date(2022, 5, 9),
            location: "Terneuzen"
        },
    ] as EducationEntry[],

    languages: [
        {
            name: "Dutch",
            fluency: "Native speaker"
        },
        {
            name: "English",
            fluency: "C2"
        },
        {
            name: "Japanese",
            fluency: "Beginner"
        }
    ] as LanguageEntry[],

    prog_languages: [
        {
            name: "C#",
            experience: 0.8
        },
        {
            name: "Java",
            experience: 0.6
        },
        {
            name: "Typescript",
            experience: 0.55
        },
        {
            name: "C",
            experience: 0.3
        },
        {
            name: "C++",
            experience: 0.25
        },
        {
            name: "React Native",
            experience: 0.6
        },
        {
            name: "Svelte/Sveltekit",
            experience: 0.4
        },
        {
            name: "Python",
            experience: 0.3
        }
    ] as ProgLangEntry[],

    projects: [
        {
            name: "Einstein's Riddle",
            description: "Mobile logic puzzle game, presenting the Einstein's Zebra Puzzle as a fun and engaging challenge.",
            stack: "React Native using the Expo framework",
            url: "https://apps.apple.com/us/app/einsteins-riddle-logic-puzzle/id6751275567"
        },
        {
            name: "Portfolio website",
            description: "A simple portfolio website, functioning as an online CV.",
            stack: "Sveltekit with Tailwindcss",
            url: "https://github.com/thomasgoossen04/portfolio"
        },
        {
            name: "Gooselib",
            description: "A full stack Steam-like application made for sharing folders from a self-hosted source.",
            stack: "Java (Server, Client), Tauri + SvelteKit (Frontend)",
            url: "https://github.com/thomasgoossen04/gooselib"
        }
    ] as ProjectEntry[]
};