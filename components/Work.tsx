'use client';

import { PROJECTS } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

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

                <div className="grid grid-cols-1 gap-12 md:gap-20">
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
                            className="group block space-y-6"
                        >
                            <div className="relative aspect-video md:aspect-[2/1] bg-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                                <div className="absolute inset-0 bg-gray-300 group-hover:bg-gray-400 transition-colors flex items-center justify-center text-gray-500">
                                    {/* Placeholder for now */}
                                    <span className="text-sm font-medium uppercase tracking-wider">Project Preview</span>
                                </div>
                                {/* 
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                */}
                                <div className="absolute top-6 right-6 p-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-lg">
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>
                            </div>

                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-3xl font-semibold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                                    <p className="text-gray-500 text-lg">{project.description}</p>
                                </div>
                                <span className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-500">
                                    {project.category}
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
