import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Projects = [
    {
        description:
            "A drag-and-drop web scraper designed to perform actions, extract, manipulate, and visualize data with various AI-driven functionalities.",
        title: "SaaS AI-powered drag-and-drop web scraper",
        src: "/thumb1.png",
        content: () => (
            <div className="flex flex-col">
                <div className="mt-8 flex  gap-5 md:mt-5 w-full justify-center">
                    <Link
                        href="https://drive.google.com/file/d/1QrE6N5s_2s0L-aQEmL_Y-8hf7Nt0U2gV/view?usp=sharing"
                    >
                        <Button className="px-4">
                            Video Link
                        </Button>
                    </Link>
                    <Link
                        href="https://drive.google.com/file/d/1V4VDehp88Xf_AWQaVdAzgn5mVJSsj4nz/view?usp=sharing"
                    >
                        <Button className="px-4">
                            Doc Link
                        </Button>
                    </Link></div>
                <div className="mt-8 flex  gap-5 md:mt-5 w-full justify-center">
                    <Link
                        href="https://github.com/kartiknayak1216/AI-webscraperV2.git"
                    >
                        <Button className="px-4">
                            Source Code
                        </Button>
                    </Link>
                    <Link
                        href="https://ai-webscraper-v2.vercel.app/"
                    >
                        <Button className="px-4">
                            Live Deployment
                        </Button>
                    </Link></div>
            </div>


        ),
    },
    {
        description:
            "Real-time notifications via Discord and email for specific API triggers.",
        title: "NotifyMe - SaaS to Integrate Actions and Deliver Personalized Messages",
        src: "/thumb2.png",
        content: () => (
            <div className="flex flex-col">
                <div className="mt-8 flex gap-5 md:mt-5 w-full justify-center">
                    <Link
                        href="https://drive.google.com/file/d/1Ym5S2usoGRr0pL-sFfe1DDFITHQhD5HI/view?usp=sharing"
                    >
                        <Button className="px-4 py-2">
                            Video Link</Button>
                    </Link>
                    <Link
                        href="https://drive.google.com/file/d/1B4_q2S7E95D4JxKVRLUGt6Qef7HjEKg2/view?usp=sharing"
                    >
                        <Button className="px-4 py-2">
                            Doc Link</Button>
                    </Link></div>
                <div className="mt-8 flex gap-5 md:mt-5 w-full justify-center">
                    <Link
                        href="https://github.com/kartiknayak1216/NotifyMe.git"
                    >
                        <Button className="px-4">
                            Source Code
                        </Button>
                    </Link>
                    <Link
                        href="https://notify-me-inky.vercel.app/"
                    >
                        <Button className="px-4">
                            Live Deployment
                        </Button>
                    </Link></div>
            </div>
        ),
    },
];

export const Skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "WebSockets",
    "CSS",
    "Tailwind CSS",
    "Express",
    "Prisma",
    "MongoDB",
    "PostgreSQL",
    "React-Flow",
    "Zustand",
    "Clerk",
    "Redux",
    "Zod",
    "Git",

    ,



];
export const GIT_LINK = "https://github.com/kartiknayak1216"
export const RESUME_LINK = "https://drive.google.com/file/d/18bACO3ECMKMwFJMbbYiGktTnMZ9kXolV/view?usp=sharing"
