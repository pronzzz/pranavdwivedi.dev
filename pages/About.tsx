import React from 'react';
import { GraduationCap, Globe, BookOpen, Award } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, LANGUAGES, CERTIFICATIONS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About Me</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            {PERSONAL_INFO.summary}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          
          {/* Education Section */}
          <div>
             <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-6 w-6 text-indigo-400" />
                <h3 className="text-2xl font-semibold text-white">Education</h3>
             </div>
             <div className="space-y-8 border-l-2 border-slate-700 pl-6 ml-3">
                {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="relative">
                        <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-slate-900 border-2 border-indigo-500"></span>
                        <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                        <p className="text-indigo-300">{edu.degree}</p>
                        <p className="text-slate-400 text-sm mt-1">{edu.year}</p>
                        {edu.details && <p className="text-slate-500 text-sm mt-1">{edu.details}</p>}
                    </div>
                ))}
             </div>
          </div>

          {/* Languages & Certifications */}
          <div className="space-y-16">
             {/* Languages */}
             <div>
                <div className="flex items-center gap-3 mb-6">
                    <Globe className="h-6 w-6 text-indigo-400" />
                    <h3 className="text-2xl font-semibold text-white">Languages</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {LANGUAGES.map((lang, idx) => (
                        <div key={idx} className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                            <p className="font-semibold text-white">{lang.language}</p>
                            <p className="text-sm text-slate-400">{lang.level}</p>
                        </div>
                    ))}
                </div>
             </div>

             {/* Certifications */}
             <div>
                <div className="flex items-center gap-3 mb-6">
                    <Award className="h-6 w-6 text-indigo-400" />
                    <h3 className="text-2xl font-semibold text-white">Certifications</h3>
                </div>
                <ul className="space-y-4">
                    {CERTIFICATIONS.map((cert, idx) => (
                        <li key={idx} className="flex gap-3 items-start bg-slate-800/50 p-3 rounded-md">
                            <div className="mt-1">
                                <BookOpen className="h-4 w-4 text-green-400" />
                            </div>
                            <span className="text-slate-300 text-sm">{cert}</span>
                        </li>
                    ))}
                </ul>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;