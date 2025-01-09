"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./hook";
import { Projects } from "@/lib/constant";

const cards = Projects;

export function ExpandableCardDemo() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/30 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl shadow-lg overflow-hidden relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setActive(null)}
                                className="absolute top-2 right-2 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-200 rounded-full p-2 shadow hover:bg-neutral-100 dark:hover:bg-neutral-700"
                                aria-label="Close"
                            >
                                ×
                            </button>
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <Image
                                    priority
                                    width={500}
                                    height={300}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-60 object-cover object-center"
                                />
                            </motion.div>
                            <div>
                                <div className="flex flex-col justify-between items-start p-4 space-y-2">
                                    <motion.h3
                                        layoutId={`title-${active.title}-${id}`}
                                        className="font-medium text-neutral-700 dark:text-neutral-200 text-lg"
                                    >
                                        {active.title}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`description-${active.description}-${id}`}
                                        className="text-neutral-600 dark:text-neutral-400 text-sm"
                                    >
                                        {active.description}
                                    </motion.p>
                                </div>
                                <div className="pt-4 relative w-full mb-4">
                                    {active.content()}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
                {cards.map((card) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl cursor-pointer shadow transition-transform hover:scale-105"
                    >
                        <Image
                            width={500}
                            height={300}
                            src={card.src}
                            alt={card.title}
                            className="h-48 w-full rounded-lg object-cover object-center"
                        />
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-center text-base mt-2">
                            {card.title}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 text-center text-sm line-clamp-3">
                            {card.description}
                        </p>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}
