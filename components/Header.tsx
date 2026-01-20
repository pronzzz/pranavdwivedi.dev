'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 bg-white/80 backdrop-blur-md"
        >
            <Link href="/" className="block">
                <div className="relative w-10 h-10 overflow-hidden rounded-xl ring-1 ring-gray-200">
                    <Image
                        src="/assets/me.png"
                        alt="Pranav Dwivedi"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
                <button onClick={() => scrollToSection('work')} className="hover:text-black transition-colors">
                    Works
                </button>
                <button onClick={() => scrollToSection('experience')} className="hover:text-black transition-colors">
                    Experience
                </button>
                <button onClick={() => scrollToSection('contact')} className="hover:text-black transition-colors">
                    Contact
                </button>
            </nav>

            <div className="flex items-center gap-4">
                <a
                    href="mailto:pranavdofficial@gmail.com"
                    className="bg-accent hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
                >
                    Let&apos;s Talk
                </a>
            </div>
        </motion.header>
    );
}
