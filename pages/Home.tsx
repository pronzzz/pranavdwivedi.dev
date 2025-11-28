import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Terminal, Database, Cloud } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden min-h-[calc(100vh-64px)] flex flex-col justify-center">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.900),theme(colors.slate.900))] opacity-50" />
      <div className="absolute top-0 right-0 -z-10 opacity-30 blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-slow">
         <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-20 lg:items-center">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8 animate-fade-in-up">
          <div className="mt-12 sm:mt-32 lg:mt-0">
            <a href="https://github.com/pronzzz" target="_blank" rel="noreferrer" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20 hover:bg-indigo-500/20 transition-colors">
                Latest updates on GitHub
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">{PERSONAL_INFO.name}</span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-300">
            {PERSONAL_INFO.title}. <br/>
            Passionate about <span className="text-indigo-300">Robotics</span>, <span className="text-purple-300">AI</span>, and <span className="text-blue-300">Cloud Computing</span>. 
            Building intelligent solutions to solve real-world problems.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 hover:scale-105 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              View Projects
            </Link>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-800 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-slate-700 hover:bg-slate-700 hover:ring-slate-600 transition-all flex items-center gap-2"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <Link to="/contact" className="ml-2 text-sm font-semibold leading-6 text-white flex items-center gap-1 group">
              Contact Me <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          {/* Tech Stack Icons */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-4">Tech Stack Highlights</p>
            <div className="flex gap-8 text-slate-400">
              <div className="flex flex-col items-center gap-2 hover:text-yellow-400 transition-colors duration-300">
                <Terminal className="h-8 w-8" />
                <span className="text-xs font-medium">Python</span>
              </div>
              <div className="flex flex-col items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                <Cloud className="h-8 w-8" />
                <span className="text-xs font-medium">Cloud</span>
              </div>
              <div className="flex flex-col items-center gap-2 hover:text-green-400 transition-colors duration-300">
                <Database className="h-8 w-8" />
                <span className="text-xs font-medium">Data</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side Visual */}
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="rounded-xl bg-slate-800 ring-1 ring-white/10 shadow-2xl text-sm leading-6 text-slate-300 w-[90vw] max-w-[500px] overflow-hidden backdrop-blur-sm bg-slate-800/80">
                 <div className="border-b border-slate-700 bg-slate-900/50 p-4 flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                 </div>
                 <div className="p-6 font-mono text-xs sm:text-sm overflow-x-auto">
                    <p><span className="text-purple-400">class</span> <span className="text-yellow-200">Engineer</span>:</p>
                    <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self):</p>
                    <p className="pl-8">self.name = <span className="text-green-400">"{PERSONAL_INFO.name}"</span></p>
                    <p className="pl-8">self.degree = <span className="text-green-400">"BIT (Robotics & AI)"</span></p>
                    <p className="pl-8">self.status = <span className="text-green-400">"Open to Work"</span></p>
                    <br/>
                    <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">skills</span>(self):</p>
                    <p className="pl-8"><span className="text-purple-400">return</span> [</p>
                    <p className="pl-12"><span className="text-green-400">"Machine Learning"</span>,</p>
                    <p className="pl-12"><span className="text-green-400">"Cloud Architecture"</span>,</p>
                    <p className="pl-12"><span className="text-green-400">"Automation"</span></p>
                    <p className="pl-8">]</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;