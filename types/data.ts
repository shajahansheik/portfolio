// Profile Types
export interface ProfileLink {
  title: string;
  url: string;
  bgColor: string;
  hoverColor: string;
}

export interface ProfileData {
  name: string;
  greeting: string;
  title: string;
  description: string;
  profileImage: string;
  links: ProfileLink[];
}

// Education Types
export interface Education {
  id: number;
  period: string;
  degree: string;
  institution: string;
  description: string;
}

export interface EducationData {
  education: Education[];
}

// Experience Types
export interface Experience {
  id: number;
  period: string;
  position: string;
  company: string;
  description: string;
}

export interface ExperienceData {
  experience: Experience[];
}

// Skills Types
export interface Skill {
  id: number;
  category: string;
  items: string[];
}

export interface SkillsData {
  skills: Skill[];
}

// Projects Types
export interface Project {
  id: number;
  title: string;
  description: string;
}

export interface ProjectsData {
  projects: Project[];
}

// Contact Types
export interface ContactInfo {
  id: number;
  type: string;
  icon: string;
  value: string;
  link?: string;
}

export interface ContactData {
  title: string;
  description: string;
  contactInfo: ContactInfo[];
}
