# Portfolio Data Management

This document explains how data is managed in the portfolio application using JSON files.

## Data Structure

All static content has been moved to JSON files in the `/data` directory. This makes it easy to update content without modifying component code.

### Directory Structure

```
/data
  ├── profile.json      # Home page profile information
  ├── education.json    # Education history
  ├── experience.json   # Work experience
  ├── skills.json       # Technical skills
  ├── projects.json     # Project descriptions
  └── contact.json      # Contact information
```

## JSON Files

### profile.json
Contains personal information displayed on the home page.

```json
{
  "name": "Your Name",
  "greeting": "Hello",
  "title": "A Bit About Me",
  "description": "Your bio...",
  "profileImage": "/profile.jpeg",
  "links": [
    {
      "title": "Resume",
      "url": "/resume",
      "bgColor": "bg-yellow-300",
      "hoverColor": "hover:bg-yellow-400"
    }
  ]
}
```

### education.json
Array of educational qualifications.

```json
{
  "education": [
    {
      "id": 1,
      "period": "2017 - 2020",
      "degree": "Master of Technology",
      "institution": "University Name",
      "description": "Description of studies..."
    }
  ]
}
```

### experience.json
Array of work experiences.

```json
{
  "experience": [
    {
      "id": 1,
      "period": "Oct 2024 - Present",
      "position": "Software Developer",
      "company": "Company Name",
      "description": "Job responsibilities..."
    }
  ]
}
```

### skills.json
Categorized technical skills.

```json
{
  "skills": [
    {
      "id": 1,
      "category": "Languages",
      "items": ["JavaScript", "HTML", "CSS"]
    }
  ]
}
```

### projects.json
Array of project descriptions.

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Project description..."
    }
  ]
}
```

### contact.json
Contact page information.

```json
{
  "title": "Get in touch",
  "description": "Contact page description...",
  "contactInfo": [
    {
      "id": 1,
      "type": "address",
      "icon": "BuildingOffice2Icon",
      "value": "City, State"
    },
    {
      "id": 2,
      "type": "phone",
      "icon": "PhoneIcon",
      "value": "+91 XXXXXXXXXX",
      "link": "tel:+91XXXXXXXXXX"
    },
    {
      "id": 3,
      "type": "email",
      "icon": "EnvelopeIcon",
      "value": "email@example.com",
      "link": "mailto:email@example.com"
    }
  ]
}
```

## How to Update Content

1. Navigate to the `/data` directory
2. Open the relevant JSON file
3. Update the content while maintaining the JSON structure
4. Save the file
5. The changes will be reflected immediately in the application

## Type Safety

TypeScript interfaces for all data structures are defined in `/types/data.ts`. This ensures type safety when importing and using JSON data in components.

## Benefits

- **Easy Updates**: Content can be updated without touching component code
- **Maintainability**: Separation of data and presentation logic
- **Scalability**: Easy to add new entries or modify existing ones
- **Type Safety**: TypeScript interfaces ensure data structure consistency
- **Reusability**: Same data structure can be used across different components

## Component Usage

Components automatically import and render data from JSON files:

```tsx
import profileData from '@/data/profile.json'

export default function Home() {
  return <div>{profileData.name}</div>
}
```
