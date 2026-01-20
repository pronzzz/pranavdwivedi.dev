'use client';

import { EXPERIENCE } from '@/data/portfolio';
import { motion } from 'framer-motion';

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto space-y-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold tracking-tighter mb-12"
                >
                    Experience
                </motion.h2>

                <div className="space-y-8">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border-b border-gray-100 pb-8 last:border-0 group"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12">
                                <span className="text-gray-400 font-mono text-sm pt-1">{exp.period}</span>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                                        {exp.role} <span className="text-gray-400 font-normal">at</span> {exp.company}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed max-w-2xl">
                                        {exp.description}
                                    </p>
                                    <p className="text-sm text-gray-400">{exp.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
