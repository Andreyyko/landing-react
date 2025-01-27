const post1 = '/images/post1.png';
const post2 = '/images/post2.png';
const post3 = '/images/post3.png';

interface Post {
    image: string;
    title: string;
    description: string;
}

export const posts : Post[] = [
    {
        image: post1,
        title: '5 popular Rust web\nframeworks—which one is\nright for you?',
        description: "From the simplicity of Poem to the full-featured speed\nof Actix, there's a Rust web framework for most every\nuser and need.",
    },
    {
        image: post2,
        title: "JAVA VS PHP: WHICH\nLANGUAGE TO CHOOSE?",
        description: "Choosing a programming language can be a major\nhurdle due to people lacking the necessary\ninformation to make the right decision.",
    },
    {
        image: post3,
        title: "Dive into the world of an iOS\nDeveloper – career, salary,\nand skills",
        description: "When it comes to developing iOS applications, there\nare two main programming languages that\nprofessionals use: Objective-C and Swift. Objective-C\nis a C language that has additional object-oriented\ndesign. ",
    }
]