'use client';

import { motion } from 'framer-motion';
import { ArrowDownLeft, Sparkles, Cpu, Bot, Cloud } from 'lucide-react';
import { TextScramble } from '@/components/ui/text-scramble';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-4 md:px-12 py-20">
            <div className="max-w-[90rem] mx-auto w-full space-y-12 md:space-y-16">

                {/* Top Segment: Small Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 text-xl md:text-2xl font-medium"
                >
                    <span>Hey there ✌️ I am <span className="font-bold">Pranav Dwivedi</span></span>
                </motion.div>

                {/* Middle Segment: Massive Typography */}
                {/* Middle Segment: Massive Typography */}
                <div className="flex flex-col select-none leading-[0.85] tracking-tighter w-full">
                    {/* Line 1: ML & AI */}
                    <div
                        className="flex flex-nowrap items-center justify-center gap-x-2 md:gap-x-4 text-[10vw] md:text-[9vw] uppercase text-black whitespace-nowrap font-ruslan"
                    >
                        <TextScramble as="span" trigger={true}>M</TextScramble>
                        <TextScramble as="span" trigger={true} delay={0.1}>L</TextScramble>
                        <span className="text-accent flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                            &
                        </span>
                        <span className="font-handjet-styled text-[1.1em]"><TextScramble as="span" trigger={true} delay={0.2}>A</TextScramble></span>
                        <span className="relative">
                            <TextScramble as="span" trigger={true} delay={0.3}>I</TextScramble>
                            <Sparkles className="absolute -top-4 -right-8 w-8 h-8 md:w-20 md:h-20 text-accent animate-pulse" />
                        </span>
                    </div>

                    {/* Line 2: ENGINEER */}
                    <div
                        className="flex flex-nowrap items-center justify-center gap-x-1 md:gap-x-4 text-[10vw] md:text-[9vw] uppercase text-black whitespace-nowrap font-ruslan"
                    >
                        <TextScramble as="span" trigger={true} delay={0.4}>E</TextScramble>
                        <span className="text-accent flex items-center">
                            <Bot className="w-[10vw] h-[10vw] md:w-[9rem] md:h-[9rem] stroke-[2]" />
                        </span>
                        <TextScramble as="span" trigger={true} delay={0.5}>G</TextScramble>
                        <TextScramble as="span" trigger={true} delay={0.6}>I</TextScramble>
                        <span className="font-handjet-styled text-[1.1em]"><TextScramble as="span" trigger={true} delay={0.7}>N</TextScramble></span>
                        <TextScramble as="span" trigger={true} delay={0.8}>E</TextScramble>
                        <TextScramble as="span" trigger={true} delay={0.9}>E</TextScramble>
                        <span className="flex items-center">
                            <span className="font-handjet-styled text-[1.1em]"><TextScramble as="span" trigger={true} delay={1.0}>R</TextScramble></span>
                            <ArrowDownLeft className="ml-2 md:ml-6 w-[8vw] h-[8vw] md:w-[7rem] md:h-[7rem] stroke-[3]" />
                        </span>
                    </div>
                </div>

                {/* Bottom Segment: Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-2xl md:text-4xl font-medium leading-relaxed max-w-4xl tracking-tight text-gray-800"
                >
                    Building intelligent systems in <span className="inline-flex items-center gap-2 border-b-2 border-black/10 hover:border-accent transition-colors">Robotics <Cpu className="w-6 h-6 text-accent" /></span>,
                    <span className="inline-flex items-center gap-2 border-b-2 border-black/10 hover:border-accent transition-colors mx-2">AI <Sparkles className="w-6 h-6 text-accent" /></span>
                    & <span className="inline-flex items-center gap-2 border-b-2 border-black/10 hover:border-accent transition-colors">Cloud <Cloud className="w-6 h-6 text-accent" /></span> technologies.
                    <br className="hidden md:block" />
                    <span className="text-gray-400 text-xl md:text-2xl mt-4 block">
                        IT Graduate with hands-on experience in machine learning, automation, and system design.
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
