import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, FolderGit2, Star, GitFork, Loader2 } from 'lucide-react';
import { PROJECTS } from '../constants';
import { fetchGitHubRepos, GitHubRepo } from '../services/githubService';

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRepos = async () => {
      const data = await fetchGitHubRepos('pronzzz');
      setRepos(data);
      setLoading(false);
    };
    loadRepos();
  }, []);

  return (
    <div className="py-24 sm:py-32 animate-fade-in-up">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Featured Projects Section */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Selected Work</h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            A selection of my work in Robotics, Machine Learning, and Data Science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="flex flex-col bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                         <div className="p-2 bg-indigo-500/10 rounded-lg">
                            <FolderGit2 className="h-6 w-6 text-indigo-400" />
                         </div>
                         <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-700 text-slate-300 border border-slate-600">
                            {project.category}
                         </span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                
                <div className="space-y-2 mb-6 flex-1">
                    {project.description.map((desc, i) => (
                        <p key={i} className="text-sm text-slate-400 leading-relaxed">
                            {desc}
                        </p>
                    ))}
                </div>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                            <span key={tech} className="text-xs font-medium text-slate-300 bg-slate-900 px-2 py-1 rounded">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Activity Section */}
        <div className="border-t border-slate-800 pt-24">
            <div className="mx-auto max-w-2xl text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Github className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Repositories</h2>
                <p className="mt-4 text-lg leading-8 text-slate-400">
                    Latest activity from my open source contributions.
                </p>
            </div>

            {loading ? (
                <div className="flex justify-center items-center py-12">
                    <Loader2 className="h-8 w-8 text-indigo-500 animate-spin" />
                </div>
            ) : repos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.map((repo) => (
                        <a 
                            key={repo.id} 
                            href={repo.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group flex flex-col bg-slate-800/50 hover:bg-slate-800 rounded-xl border border-slate-700 p-6 hover:border-indigo-500/50 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <FolderGit2 className="h-5 w-5 text-indigo-400 group-hover:text-indigo-300" />
                                    <span className="font-semibold text-slate-200 group-hover:text-white truncate max-w-[150px]">{repo.name}</span>
                                </div>
                                <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                            </div>
                            
                            <p className="text-sm text-slate-400 mb-4 line-clamp-2 h-10">
                                {repo.description || "No description available."}
                            </p>

                            <div className="mt-auto flex items-center justify-between text-xs text-slate-500">
                                <div className="flex items-center gap-3">
                                    {repo.language && (
                                        <span className="flex items-center gap-1">
                                            <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                                            {repo.language}
                                        </span>
                                    )}
                                    <span className="flex items-center gap-1">
                                        <Star className="h-3 w-3" /> {repo.stargazers_count}
                                    </span>
                                </div>
                                <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
                            </div>
                        </a>
                    ))}
                </div>
            ) : (
                <div className="text-center text-slate-500">
                    <p>No repositories found or unable to fetch from GitHub right now.</p>
                </div>
            )}
            
            <div className="mt-12 text-center">
                <a 
                    href="https://github.com/pronzzz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium"
                >
                    See more on GitHub <ExternalLink className="h-4 w-4" />
                </a>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;