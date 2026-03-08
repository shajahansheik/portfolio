import React from 'react'
import BottomNav from '../components/bottomnav'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import contactData from '@/data/contact.json'

const iconMap = {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon
}

export default function page() {
  return (
    <div className="h-full bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="h-[88%] overflow-y-auto">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mx-4 sm:mx-6 lg:mx-10 py-8 lg:py-0 h-full'>
          {/* Contact Information */}
          <div className='p-6 sm:p-10 lg:p-20 animate-slide-in-left'>
            <h2 className="text-pretty text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight gradient-text">
              {contactData.title}
            </h2>
            <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed animate-fade-in delay-100">
              {contactData.description}
            </p>
            <dl className="mt-10 space-y-6 text-sm sm:text-base text-gray-600">
              {contactData.contactInfo.map((info, index) => {
                const Icon = iconMap[info.icon as keyof typeof iconMap]
                return (
                  <div 
                    key={info.id} 
                    className="flex gap-x-4 p-3 rounded-lg hover:bg-white/70 transition-all duration-300 card-hover animate-fade-in"
                    style={{ animationDelay: `${200 + index * 100}ms` }}
                  >
                    <dt className="flex-none">
                      <span className="sr-only">{info.type}</span>
                      <Icon aria-hidden="true" className="h-7 w-6 text-violet-600" />
                    </dt>
                    <dd>
                      {info.link ? (
                        <a href={info.link} className="hover:text-violet-600 transition-colors duration-300 hover:underline">
                          {info.value}
                        </a>
                      ) : (
                        info.value.split(', ').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < info.value.split(', ').length - 1 && <br />}
                          </React.Fragment>
                        ))
                      )}
                    </dd>
                  </div>
                )
              })}
            </dl>
          </div>

          {/* Contact Form */}
          <form className='p-6 sm:p-10 lg:p-20 animate-slide-in-right'>
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <div className="animate-fade-in delay-300">
                <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-lg bg-white px-4 py-3 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="animate-fade-in delay-400">
                <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-lg bg-white px-4 py-3 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 animate-fade-in delay-500">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-lg bg-white px-4 py-3 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 animate-fade-in delay-600">
                <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-900">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-lg bg-white px-4 py-3 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 animate-fade-in delay-700">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-lg bg-white px-4 py-3 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 resize-none"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end animate-fade-in delay-800">
              <button
                type="submit"
                className="rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-violet-700 hover:to-purple-700"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="h-[12%]">
        <BottomNav />
      </div>
    </div>
  )
}
