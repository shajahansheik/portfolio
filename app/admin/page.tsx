'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Section = 'skills' | 'experience' | 'education' | 'projects' | 'profile' | 'contact' | 'submissions';

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeSection, setActiveSection] = useState<Section>('profile');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Data states
  const [profileData, setProfileData] = useState<any>(null);
  const [skillsData, setSkillsData] = useState<any>(null);
  const [experienceData, setExperienceData] = useState<any>(null);
  const [educationData, setEducationData] = useState<any>(null);
  const [projectsData, setProjectsData] = useState<any>(null);
  const [contactData, setContactData] = useState<any>(null);
  const [submissionsData, setSubmissionsData] = useState<any>(null);

  useEffect(() => {
    const auth = sessionStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in production, use proper authentication
    if (password === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      loadData();
    } else {
      setMessage({ type: 'error', text: 'Invalid password' });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
    router.push('/');
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const [profile, skills, experience, education, projects, contact, submissions] = await Promise.all([
        fetch('/api/admin/profile').then(r => r.json()),
        fetch('/api/admin/skills').then(r => r.json()),
        fetch('/api/admin/experience').then(r => r.json()),
        fetch('/api/admin/education').then(r => r.json()),
        fetch('/api/admin/projects').then(r => r.json()),
        fetch('/api/admin/contact').then(r => r.json()),
        fetch('/api/contact/submissions').then(r => r.json()),
      ]);
      setProfileData(profile);
      setSkillsData(skills);
      setExperienceData(experience);
      setEducationData(education);
      setProjectsData(projects);
      setContactData(contact);
      setSubmissionsData(submissions);
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to load data' });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (section: Section) => {
    setLoading(true);
    try {
      let data;
      switch (section) {
        case 'profile': data = profileData; break;
        case 'skills': data = skillsData; break;
        case 'experience': data = experienceData; break;
        case 'education': data = educationData; break;
        case 'projects': data = projectsData; break;
        case 'contact': data = contactData; break;
      }

      const response = await fetch(`/api/admin/${section}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: `${section} updated successfully!` });
      } else {
        setMessage({ type: 'error', text: 'Failed to update' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred' });
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-blue-50">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md animate-scale-in">
          <h1 className="text-3xl font-bold gradient-text mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                placeholder="Enter admin password"
              />
            </div>
            {message.text && (
              <div className={`p-3 rounded-lg ${message.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                {message.text}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-blue-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">Portfolio Admin</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Message */}
        {message.text && (
          <div className={`mb-4 p-4 rounded-lg animate-fade-in ${message.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
            {message.text}
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-2 mb-6 flex flex-wrap gap-2 sticky top-20 z-40">
          {(['profile', 'skills', 'experience', 'education', 'projects', 'contact', 'submissions'] as Section[]).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-3 rounded-lg font-semibold capitalize transition-all duration-300 ${
                activeSection === section
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"></div>
            </div>
          ) : (
            <>
              {activeSection === 'profile' && profileData && (
                <ProfileEditor data={profileData} setData={setProfileData} onSave={() => handleSave('profile')} />
              )}
              {activeSection === 'skills' && skillsData && (
                <SkillsEditor data={skillsData} setData={setSkillsData} onSave={() => handleSave('skills')} />
              )}
              {activeSection === 'experience' && experienceData && (
                <ExperienceEditor data={experienceData} setData={setExperienceData} onSave={() => handleSave('experience')} />
              )}
              {activeSection === 'education' && educationData && (
                <EducationEditor data={educationData} setData={setEducationData} onSave={() => handleSave('education')} />
              )}
              {activeSection === 'projects' && projectsData && (
                <ProjectsEditor data={projectsData} setData={setProjectsData} onSave={() => handleSave('projects')} />
              )}
              {activeSection === 'contact' && contactData && (
                <ContactEditor data={contactData} setData={setContactData} onSave={() => handleSave('contact')} />
              )}
              {activeSection === 'submissions' && submissionsData && (
                <SubmissionsViewer data={submissionsData} onRefresh={loadData} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Profile Editor Component
function ProfileEditor({ data, setData, onSave }: any) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Greeting</label>
        <input
          type="text"
          value={data.greeting}
          onChange={(e) => setData({ ...data, greeting: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
        <textarea
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />
      </div>

      <button
        onClick={onSave}
        className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
      >
        Save Profile
      </button>
    </div>
  );
}

// Skills Editor Component
function SkillsEditor({ data, setData, onSave }: any) {
  const addSkill = () => {
    const newId = Math.max(...data.skills.map((s: any) => s.id), 0) + 1;
    setData({
      ...data,
      skills: [{ id: newId, category: '', items: [] }, ...data.skills]
    });
  };

  const updateSkill = (index: number, field: string, value: any) => {
    const updated = [...data.skills];
    updated[index] = { ...updated[index], [field]: value };
    setData({ ...data, skills: updated });
  };

  const deleteSkill = (index: number) => {
    setData({
      ...data,
      skills: data.skills.filter((_: any, i: number) => i !== index)
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
        <button
          onClick={addSkill}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
        >
          Add Skill Category
        </button>
      </div>

      {data.skills.map((skill: any, index: number) => (
        <div key={skill.id} className="p-4 border border-gray-200 rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Category {index + 1}</h3>
            <button
              onClick={() => deleteSkill(index)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              Delete
            </button>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Category Name</label>
            <input
              type="text"
              value={skill.category}
              onChange={(e) => updateSkill(index, 'category', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Items (comma-separated)</label>
            <input
              type="text"
              value={skill.items.join(', ')}
              onChange={(e) => updateSkill(index, 'items', e.target.value.split(',').map((s: string) => s.trim()))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>
        </div>
      ))}

      <button
        onClick={onSave}
        className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
      >
        Save Skills
      </button>
    </div>
  );
}

// Experience Editor Component
function ExperienceEditor({ data, setData, onSave }: any) {
  const addExperience = () => {
    const newId = Math.max(...data.experience.map((e: any) => e.id), 0) + 1;
    setData({
      ...data,
      experience: [{ id: newId, period: '', position: '', company: '', description: '' }, ...data.experience]
    });
  };

  const updateExperience = (index: number, field: string, value: string) => {
    const updated = [...data.experience];
    updated[index] = { ...updated[index], [field]: value };
    setData({ ...data, experience: updated });
  };

  const deleteExperience = (index: number) => {
    setData({
      ...data,
      experience: data.experience.filter((_: any, i: number) => i !== index)
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
        <button
          onClick={addExperience}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
        >
          Add Experience
        </button>
      </div>

      {data.experience.map((exp: any, index: number) => (
        <div key={exp.id} className="p-4 border border-gray-200 rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">{exp.position || `Experience ${index + 1}`}</h3>
            <button
              onClick={() => deleteExperience(index)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              Delete
            </button>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Period</label>
            <input
              type="text"
              value={exp.period}
              onChange={(e) => updateExperience(index, 'period', e.target.value)}
              placeholder="e.g., Oct 2024 - Present"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Position</label>
            <input
              type="text"
              value={exp.position}
              onChange={(e) => updateExperience(index, 'position', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
            <input
              type="text"
              value={exp.company}
              onChange={(e) => updateExperience(index, 'company', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <textarea
              value={exp.description}
              onChange={(e) => updateExperience(index, 'description', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>
        </div>
      ))}

      <button
        onClick={onSave}
        className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
      >
        Save Experience
      </button>
    </div>
  );
}

// Education Editor Component
function EducationEditor({ data, setData, onSave }: any) {
  const addEducation = () => {
    const newId = Math.max(...data.education.map((e: any) => e.id), 0) + 1;
    setData({
      ...data,
      education: [{ id: newId, period: '', degree: '', institution: '', description: '' }, ...data.education]
    });
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const updated = [...data.education];
    updated[index] = { ...updated[index], [field]: value };
    setData({ ...data, education: updated });
  };

  const deleteEducation = (index: number) => {
    setData({
      ...data,
      education: data.education.filter((_: any, i: number) => i !== index)
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Education</h2>
        <button
          onClick={addEducation}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
        >
          Add Education
        </button>
      </div>

      {data.education.map((edu: any, index: number) => (
        <div key={edu.id} className="p-4 border border-gray-200 rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">{edu.degree || `Education ${index + 1}`}</h3>
            <button
              onClick={() => deleteEducation(index)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              Delete
            </button>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Period</label>
            <input
              type="text"
              value={edu.period}
              onChange={(e) => updateEducation(index, 'period', e.target.value)}
              placeholder="e.g., 2017 - 2020"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Degree</label>
            <input
              type="text"
              value={edu.degree}
              onChange={(e) => updateEducation(index, 'degree', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Institution</label>
            <input
              type="text"
              value={edu.institution}
              onChange={(e) => updateEducation(index, 'institution', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <textarea
              value={edu.description}
              onChange={(e) => updateEducation(index, 'description', e.target.value)}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>
        </div>
      ))}

      <button
        onClick={onSave}
        className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
      >
        Save Education
      </button>
    </div>
  );
}

// Projects Editor Component
function ProjectsEditor({ data, setData, onSave }: any) {
  const addProject = () => {
    const newId = Math.max(...data.projects.map((p: any) => p.id), 0) + 1;
    setData({
      ...data,
      projects: [{ id: newId, title: '', description: '' }, ...data.projects]
    });
  };

  const updateProject = (index: number, field: string, value: string) => {
    const updated = [...data.projects];
    updated[index] = { ...updated[index], [field]: value };
    setData({ ...data, projects: updated });
  };

  const deleteProject = (index: number) => {
    setData({
      ...data,
      projects: data.projects.filter((_: any, i: number) => i !== index)
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
        <button
          onClick={addProject}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
        >
          Add Project
        </button>
      </div>

      {data.projects.map((project: any, index: number) => (
        <div key={project.id} className="p-4 border border-gray-200 rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">{project.title || `Project ${index + 1}`}</h3>
            <button
              onClick={() => deleteProject(index)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              Delete
            </button>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={project.title}
              onChange={(e) => updateProject(index, 'title', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <textarea
              value={project.description}
              onChange={(e) => updateProject(index, 'description', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>
        </div>
      ))}

      <button
        onClick={onSave}
        className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
      >
        Save Projects
      </button>
    </div>
  );
}

// Contact Editor Component
function ContactEditor({ data, setData, onSave }: any) {
  const updateContactInfo = (index: number, field: string, value: string) => {
    const updated = [...data.contactInfo];
    updated[index] = { ...updated[index], [field]: value };
    setData({ ...data, contactInfo: updated });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
        <textarea
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">Contact Details</h3>
      
      {data.contactInfo.map((info: any, index: number) => (
        <div key={info.id} className="p-4 border border-gray-200 rounded-lg space-y-4">
          <h4 className="font-semibold capitalize">{info.type}</h4>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Value</label>
            <input
              type="text"
              value={info.value}
              onChange={(e) => updateContactInfo(index, 'value', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>

          {info.link && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Link</label>
              <input
                type="text"
                value={info.link}
                onChange={(e) => updateContactInfo(index, 'link', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>
          )}
        </div>
      ))}

      <button
        onClick={onSave}
        className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
      >
        Save Contact Info
      </button>
    </div>
  );
}

// Submissions Viewer Component
function SubmissionsViewer({ data, onRefresh }: any) {
  const [deleting, setDeleting] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this submission?')) return;
    
    setDeleting(id);
    try {
      const response = await fetch(`/api/contact/submissions?id=${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        onRefresh();
      } else {
        alert('Failed to delete submission');
      }
    } catch (error) {
      alert('An error occurred');
    } finally {
      setDeleting(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const openInMaps = (lat: number | null, lng: number | null) => {
    if (lat && lng) {
      window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Contact Form Submissions</h2>
          <p className="text-sm text-gray-600 mt-1">
            Total submissions: {data.submissions.length}
          </p>
        </div>
        <button
          onClick={onRefresh}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Refresh
        </button>
      </div>

      {data.submissions.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">No submissions yet</p>
          <p className="text-sm mt-2">Submissions from the contact form will appear here</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.submissions.map((submission: any) => (
            <div key={submission.id} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {submission.firstName} {submission.lastName}
                  </h3>
                  <p className="text-sm text-gray-500">{formatDate(submission.submittedAt)}</p>
                </div>
                <button
                  onClick={() => handleDelete(submission.id)}
                  disabled={deleting === submission.id}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm disabled:opacity-50"
                >
                  {deleting === submission.id ? 'Deleting...' : 'Delete'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase">Email</label>
                  <p className="text-sm text-gray-900">
                    <a href={`mailto:${submission.email}`} className="text-violet-600 hover:underline">
                      {submission.email}
                    </a>
                  </p>
                </div>

                {submission.phone && (
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase">Phone</label>
                    <p className="text-sm text-gray-900">
                      <a href={`tel:${submission.phone}`} className="text-violet-600 hover:underline">
                        {submission.phone}
                      </a>
                    </p>
                  </div>
                )}

                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase">Location</label>
                  <p className="text-sm text-gray-900">{submission.location || 'Unknown'}</p>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase">IP Address</label>
                  <p className="text-sm text-gray-900 font-mono">{submission.ip}</p>
                </div>
              </div>

              {submission.coordinates && submission.coordinates.lat && submission.coordinates.lng && (
                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <label className="text-xs font-semibold text-gray-600 uppercase">Geographical Coordinates</label>
                      <p className="text-sm text-gray-900 font-mono">
                        Lat: {submission.coordinates.lat.toFixed(6)}, Lng: {submission.coordinates.lng.toFixed(6)}
                      </p>
                    </div>
                    <button
                      onClick={() => openInMaps(submission.coordinates.lat, submission.coordinates.lng)}
                      className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors"
                    >
                      View on Map
                    </button>
                  </div>
                </div>
              )}

              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase">Message</label>
                <p className="text-sm text-gray-900 whitespace-pre-wrap mt-1 p-3 bg-gray-50 rounded">
                  {submission.message}
                </p>
              </div>

              {submission.userAgent && (
                <details className="mt-4">
                  <summary className="text-xs font-semibold text-gray-600 uppercase cursor-pointer hover:text-gray-900">
                    Technical Details
                  </summary>
                  <div className="mt-2 p-3 bg-gray-50 rounded text-xs">
                    <p className="font-mono text-gray-700 break-all">{submission.userAgent}</p>
                    {submission.language && (
                      <p className="text-gray-600 mt-2">Language: {submission.language}</p>
                    )}
                  </div>
                </details>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
