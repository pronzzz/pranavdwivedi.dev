import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Professional Experience</h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            A timeline of my professional journey in IT, Retail, and Operations.
          </p>
        </div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-0 md:pl-0 space-y-12">
           {EXPERIENCE.map((job, idx) => (
              <div key={idx} className="relative group md:grid md:grid-cols-5 md:gap-10">
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-indigo-500 border border-slate-900 md:hidden"></div>

                {/* Left Side (Date & Company) for Desktop */}
                <div className="hidden md:block md:col-span-1 text-right pt-1">
                    <p className="text-sm font-semibold text-indigo-400">{job.duration}</p>
                    <h3 className="text-base font-bold text-white mt-1">{job.company}</h3>
                    <p className="text-xs text-slate-500 flex items-center justify-end gap-1 mt-1">
                        <MapPin className="h-3 w-3" /> {job.location}
                    </p>
                </div>
                
                {/* Timeline Separator Desktop */}
                <div className="hidden md:flex flex-col items-center">
                    <div className="h-4 w-4 rounded-full bg-indigo-500 border-4 border-slate-900 z-10"></div>
                    <div className="h-full w-px bg-slate-800 -mt-2"></div>
                </div>

                {/* Card Content */}
                <div className="pl-6 md:pl-0 md:col-span-3 pb-10">
                    {/* Mobile Header */}
                    <div className="md:hidden mb-2">
                        <span className="inline-block px-2 py-1 bg-indigo-500/10 text-indigo-400 text-xs rounded mb-1">{job.duration}</span>
                        <h3 className="text-xl font-bold text-white">{job.company}</h3>
                        <p className="text-sm text-slate-500 flex items-center gap-1">
                             <MapPin className="h-3 w-3" /> {job.location}
                        </p>
                    </div>

                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-indigo-500/30 transition-colors">
                        <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-indigo-400" />
                            {job.role}
                        </h4>
                        <ul className="mt-4 space-y-2">
                            {job.description.map((desc, i) => (
                                <li key={i} className="text-slate-400 text-sm flex gap-2 items-start">
                                    <span className="mt-1.5 h-1.5 w-1.5 min-w-[6px] rounded-full bg-slate-500"></span>
                                    <span>{desc}</span>
                                </li>
                            ))}
                        </ul>
                        {job.type === 'Volunteer' && (
                            <span className="mt-4 inline-block text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded">
                                Volunteer
                            </span>
                        )}
                    </div>
                </div>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;