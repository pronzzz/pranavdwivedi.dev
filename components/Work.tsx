'use client';

import { PROJECTS } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Work() {
    return (
        <section id="work" className="py-24 px-6 md:px-12 bg-gray-50/50">
            <div className="max-w-7xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end border-b border-gray-200 pb-8"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Selected Works</h2>
                    <span className="text-gray-400 mb-2 md:mb-4 text-lg">({PROJECTS.length})</span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mt-12">
                    {PROJECTS.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group block space-y-5"
                        >
                            <div className="relative aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                                {project.image && (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-1">
                                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 opacity-70" />
                                </div>
                                <p className="text-gray-500 line-clamp-2 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
