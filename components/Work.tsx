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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    {PROJECTS.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group block p-8 rounded-2xl bg-white border border-gray-100 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold uppercase tracking-widest text-accent/60">
                                            {project.category}
                                        </span>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </div>

                                <h3 className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
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
