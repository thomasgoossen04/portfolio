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

export const resume = {
    about: {
        summary: "Bachelor's student in Computing Science at Radboud University, Developer of the published iOS app 'Einstein's Riddle'.",
    },

    contact: {
        name: 'Thomas Goossen',
        email: 'thomasgoossen@zeelandnet.nl',
        phone: '+00 000 0000',
        location: 'Axel, Netherlands',
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
            institution: "Lodewijk College",
            degree: "VWO Bilingual Education",
            field: "NT (Natuur/techniek)",
            startDate: new Date(2016, 8, 1),
            endDate: new Date(2022, 6, 9),
            location: "Terneuzen"
        },
        {
            institution: "Ritsumeikan University",
            degree: "Bachelor Exchange program",
            field: "Study in Kansai Program",
            startDate: new Date(2025, 8, 26),
            endDate: new Date(2026, 1, 31),
            location: "OIC Campus, Osaka, Japan"
        }
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
};