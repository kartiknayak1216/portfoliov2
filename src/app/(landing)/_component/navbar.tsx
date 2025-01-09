import React from 'react';
import Link from 'next/link';
import Menu from './menubar';

export default function Navbar() {
    return (
        <div className='w-full flex justify-between items-center sticky top-0 py-5 px-6 z-50 bg-[HSL(0, 0%, 3.9%)]/40 backdrop-blur-sm'>
            <Link href="/">
                <div className="flex items-center">
                    <span className="text-xl bg-gradient-to-r from-primary/80 to-primary/60 text-transparent bg-clip-text mr-1">
                        My
                    </span>
                    <span className="text-xl">
                        Portfolio
                    </span>
                </div>
            </Link>
            <Menu />
            
        </div>
    );
}
