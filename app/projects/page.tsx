import React from 'react'
import BottomNav from '../components/bottomnav'
import projectsData from '@/data/projects.json'

export default function page() {
  return (
    <div className='h-screen flex flex-col bg-gray-50'>
      {/* Fixed Header Section */}
      <div className='px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 pt-8 pb-4 flex-shrink-0'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800'>
          Projects
        </h1>
      </div>

      {/* Scrollable Projects List */}
      <div className='flex-1 overflow-y-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 pb-20'>
        <div className='space-y-6'>
          {projectsData.projects.map((project) => (
            <div 
              key={project.id}
              className='bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow'
            >
              {/* Project Header */}
              <div className='mb-4'>
                <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mb-2'>
                  {project.projectName}
                </h2>
                <p className='text-sm text-gray-600'>{project.role}</p>
              </div>

              {/* Description */}
              <p className='text-gray-700 text-sm sm:text-base mb-4 leading-relaxed'>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className='mb-4'>
                <div className='flex flex-wrap gap-2'>
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className='px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-xs sm:text-sm font-medium'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              {project.responsibilities && project.responsibilities.length > 0 && (
                <div className='mb-4'>
                  <h3 className='text-sm font-semibold text-gray-800 mb-2'>Key Responsibilities:</h3>
                  <ul className='list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-700'>
                    {project.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Additional Details */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200'>
                {/* DevOps & Cloud */}
                {project.devOpsAndCloud && (
                  <div>
                    <h3 className='text-sm font-semibold text-gray-800 mb-2'>DevOps & Cloud:</h3>
                    <div className='space-y-1 text-xs text-gray-600'>
                      {project.devOpsAndCloud.ciCd && <p>• {project.devOpsAndCloud.ciCd}</p>}
                      {project.devOpsAndCloud.containerization && <p>• {project.devOpsAndCloud.containerization}</p>}
                      {project.devOpsAndCloud.cloud && <p>• {project.devOpsAndCloud.cloud}</p>}
                      {project.devOpsAndCloud.infrastructureAsCode && <p>• {project.devOpsAndCloud.infrastructureAsCode}</p>}
                    </div>
                  </div>
                )}

                {/* Database */}
                {project.database && (
                  <div>
                    <h3 className='text-sm font-semibold text-gray-800 mb-2'>Database & Storage:</h3>
                    <div className='space-y-1 text-xs text-gray-600'>
                      {project.database.primary && <p>• Primary DB: {project.database.primary}</p>}
                      {project.database.storage && <p>• Storage: {project.database.storage}</p>}
                    </div>
                  </div>
                )}

                {/* Observability */}
                {project.observability && project.observability.length > 0 && (
                  <div>
                    <h3 className='text-sm font-semibold text-gray-800 mb-2'>Observability:</h3>
                    <div className='space-y-1 text-xs text-gray-600'>
                      {project.observability.map((item, obsIndex) => (
                        <p key={obsIndex}>• {item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Optimizations */}
                {project.optimizations && project.optimizations.length > 0 && (
                  <div>
                    <h3 className='text-sm font-semibold text-gray-800 mb-2'>Optimizations:</h3>
                    <div className='space-y-1 text-xs text-gray-600'>
                      {project.optimizations.map((item, optIndex) => (
                        <p key={optIndex}>• {item}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <BottomNav />
      </div>
    </div>
  )
}
