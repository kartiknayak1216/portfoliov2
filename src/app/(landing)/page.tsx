import Link from 'next/link';
import React from 'react';
import { LogOut } from 'lucide-react';
import Navbar from './_component/navbar';
import LandingMain from './_component/landingmenu';
import { SkillCard } from './_component/skills';
import { ExpandableCardDemo } from './_component/portfoliocard';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar />
      <Separator />
      <section id="About" className="relative mt-6">
        <LandingMain />
      </section>

      <section className="container mx-auto px-4 py-8 " id="Skills">
        <SkillCard />
      </section>

      <section id="Project" className="container mx-auto px-4 py-8 text-center items-center">
        <h2 className="text-lg sm:text-2xl font-semibold text-black dark:text-neutral-200 mb-4">
          Projects
        </h2>
        <p className="text-sm sm:text-base text-gray-700 dark:text-neutral-400 mb-6">
          "These are the few projects I have worked on."
        </p>

        <ExpandableCardDemo />
      </section>
    </div>
  );
}
