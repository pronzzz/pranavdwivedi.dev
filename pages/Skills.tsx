import React from 'react';
import { Code2, Cpu, Database, LayoutTemplate } from 'lucide-react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes('Languages')) return Code2;
    if (category.includes('Frameworks')) return LayoutTemplate;
    if (category.includes('Concepts')) return Cpu;
    return Database;
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical Skills</h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            A comprehensive list of my technical proficiency and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((skillGroup, idx) => {
            const Icon = getIcon(skillGroup.category);
            return (
              <div key={idx} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:bg-slate-800 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-indigo-500/10 rounded-xl">
                        <Icon className="h-6 w-6 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                        <div key={skill} className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg opacity-30 group-hover:opacity-100 transition duration-200 blur"></div>
                            <span className="relative block px-4 py-2 bg-slate-900 rounded-lg text-sm font-medium text-slate-200">
                                {skill}
                            </span>
                        </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;