/**
 * Data utilities for portfolio application
 * Centralized exports for all JSON data files
 */

import profileData from '@/data/profile.json';
import educationData from '@/data/education.json';
import experienceData from '@/data/experience.json';
import skillsData from '@/data/skills.json';
import projectsData from '@/data/projects.json';
import contactData from '@/data/contact.json';

// Re-export all data
export {
  profileData,
  educationData,
  experienceData,
  skillsData,
  projectsData,
  contactData
};

// Export as a single object
export const portfolioData = {
  profile: profileData,
  education: educationData,
  experience: experienceData,
  skills: skillsData,
  projects: projectsData,
  contact: contactData
};

// Utility function to get all data
export function getAllPortfolioData() {
  return portfolioData;
}

// Utility function to get specific section data
export function getPortfolioSection(section: keyof typeof portfolioData) {
  return portfolioData[section];
}
