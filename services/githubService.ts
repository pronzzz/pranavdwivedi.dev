export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

export const fetchGitHubRepos = async (username: string): Promise<GitHubRepo[]> => {
  try {
    // Fetch repos, sort by updated date descending
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=6`);
    
    if (!response.ok) {
      if (response.status === 403) {
        console.warn('GitHub API rate limit exceeded');
        return [];
      }
      throw new Error('Failed to fetch repos');
    }
    
    const data = await response.json();
    // Filter out forks if desired, or keep them. Currently keeping everything.
    return data;
  } catch (error) {
    console.error("GitHub Service Error:", error);
    return [];
  }
};