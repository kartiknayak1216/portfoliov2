import * as React from "react";
import { Button } from "@/components/ui/button";
import { BackgroundGradient } from "./backgroundgradient";
import Link from "next/link";
import { Skills } from "@/lib/constant";

export function SkillCard() {
   const skills= Skills
    return (
        <div className="flex items-center justify-center min-h-screen xs:w-full md:w-7/12 lg:w-5/12 xl:w-4/12 mx-auto">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-md">
                <Link href="/" className="block mb-4">
                    <div className="flex items-center">
                        <span className="text-xl font-bold bg-gradient-to-r from-primary/80 to-primary/60 text-transparent bg-clip-text">
                            Skill
                        </span>
                        <span className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 ml-1">
                            Sphere
                        </span>
                    </div>
                </Link>

                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                    Technologies I have worked with:
                </p>

                <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                        <button
                            key={index}
                            aria-label={`Skill: ${skill}`}
                            className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
                        >
                            {skill}
                        </button>
                    ))}
                </div>

                <div className="flex justify-end mt-6">
                    <Button variant="outline" className="text-sm">
                        View More
                    </Button>
                </div>
            </BackgroundGradient>
        </div>
    );
}
