export interface Project {
  title: string;
  tech: string[];
  description: string[];
  category: 'AI/ML' | 'Robotics' | 'Data' | 'Other';
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  type: 'Professional' | 'Volunteer';
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  details?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; 
}