"use client"
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { User, StickyNote, Telescope } from "lucide-react";

enum List {
    About = "About",
    Skills = "Skills",
    Project = "Project",
}

type MenuList = {
    name: List;
    icon: React.FC;
};

const Menulist: MenuList[] = [
    { name: List.About, icon: User },
    { name: List.Skills, icon: StickyNote },
    { name: List.Project, icon: Telescope },
];

export default function Menu() {
    const [selected, setSelected] = useState<List>(List.About);
    const [isScrolling, setIsScrolling] = useState(false);

    const handleScroll = (ele: List) => {
        const target = document.getElementById(ele);
        if (target) {
            setIsScrolling(true); 
            target.scrollIntoView({ behavior: "smooth" });

            setTimeout(() => {
                setIsScrolling(false);
            }, 500);
        }
    };

    useEffect(() => {
        const handleScrollChange = () => {
            if (isScrolling) return; 
            let currentSection: List | null = null;
            Menulist.forEach((item) => {
                const section = document.getElementById(item.name);
                if (section) {
                    const { top, bottom } = section.getBoundingClientRect();
                    if (top <= window.innerHeight / 2 && bottom > window.innerHeight / 2) {
                        currentSection = item.name;
                    }
                }
            });
            if (currentSection && currentSection !== selected) {
                setSelected(currentSection);
            }
        };

        window.addEventListener("scroll", handleScrollChange);
        return () => {
            window.removeEventListener("scroll", handleScrollChange);
        };
    }, [selected, isScrolling]);

    return (
        <Card className="bg-themeGray border-themeGray bg-clip-padding backdrop-blur-2xl backdrop-filter bg-opacity-60 p-1 lg:flex hidden rounded-xl">
            <CardContent className="p-0 flex gap-2">
                {Menulist.map((item, index) => (
                    <div
                        key={index}
                        className={cn(
                            "rounded-xl flex gap-2 py-2 px-4 items-center cursor-pointer",
                            item.name !== selected
                                ? "bg-[#09090B] border-[#27272A]"
                                : "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                        )}
                        onClick={() => {
                            setSelected(item.name);
                            handleScroll(item.name);
                        }}
                    >
                        <div className="flex flex-1 font-bold gap-x-2 items-center justify-between">
                            {selected === item.name && <div className="text-md">{<item.icon />}</div>}
                            <p className="text-md">{item.name}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
