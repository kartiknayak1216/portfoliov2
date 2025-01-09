import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GIT_LINK, RESUME_LINK } from '@/lib/constant';

export default function LandingMain() {
    const gith= GIT_LINK
    const res= RESUME_LINK

    return (
        <div className="flex items-center flex-col text-center px-6 md:px-12 py-10 space-y-8">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600">
                Hi, I am <span className="text-primary">Kartik Nayak</span> <br />
                I am a <span className="text-primary">Full Stack Developer</span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl mt-6 text-stone-400 mx-auto">
                I'm a Full stack developer passionate about creating functional and user-friendly websites.
                Check out my portfolio to see the projects I've worked on and how I'm growing in the field.
            </p>

            <div className="mt-8 flex md:flex-row gap-5 md:mt-5 w-full justify-center">
                <Link href={res}>

                <Button variant={"outline"}
                    className='rounded-xl bg-transparent text-base'
                >
                    Watch Resume
                </Button></Link>
                <Link href={gith}>
                    <Button className='rounded-xl text-base flex gap-2'>
                        Github
                    </Button>
                </Link>
            </div>
        </div>
    );
}
