'use client';
import React, { useState } from 'react'
import BottomNav from '../components/bottomnav'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import contactData from '@/data/contact.json'

const iconMap = {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon
}

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getGeolocation = (): Promise<{ coordinates: { lat: number | null; lng: number | null }; location: string }> => {
    return new Promise((resolve) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            
            // Try to get location name from reverse geocoding
            try {
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
              );
              const data = await response.json();
              const location = data.address?.city || data.address?.town || data.address?.country || 'Unknown';
              
              resolve({
                coordinates: { lat: latitude, lng: longitude },
                location: location
              });
            } catch {
              resolve({
                coordinates: { lat: latitude, lng: longitude },
                location: 'Unknown'
              });
            }
          },
          () => {
            // Geolocation denied or failed
            resolve({
              coordinates: { lat: null, lng: null },
              location: 'Unknown'
            });
          }
        );
      } else {
        resolve({
          coordinates: { lat: null, lng: null },
          location: 'Unknown'
        });
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: '', text: '' });

    try {
      // Get geolocation
      const geoData = await getGeolocation();

      // Submit form with geolocation data
      const response = await fetch('/api/contact/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          ...geoData
        }),
      });

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: 'Message sent successfully! We\'ll get back to you soon.' });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-y-auto md:overflow-hidden">
      <div className="min-h-[85%] md:h-[88%] overflow-y-auto">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-10 mx-4 sm:mx-6 lg:mx-10 py-6 md:py-8 lg:py-0 h-full'>
          {/* Contact Information */}
          <div className='p-4 sm:p-6 md:p-8 lg:p-20 animate-slide-in-left'>
            <h2 className="text-pretty text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight gradient-text">
              {contactData.title}
            </h2>
            <p className="mt-4 md:mt-6 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed animate-fade-in delay-100">
              {contactData.description}
            </p>
            <dl className="mt-6 md:mt-10 space-y-4 md:space-y-6 text-xs sm:text-sm md:text-base text-gray-600">
              {contactData.contactInfo.map((info, index) => {
                const Icon = iconMap[info.icon as keyof typeof iconMap]
                return (
                  <div 
                    key={info.id} 
                    className="flex gap-x-3 md:gap-x-4 p-2 md:p-3 rounded-lg hover:bg-white/70 transition-all duration-300 card-hover animate-fade-in"
                    style={{ animationDelay: `${200 + index * 100}ms` }}
                  >
                    <dt className="flex-none">
                      <span className="sr-only">{info.type}</span>
                      <Icon aria-hidden="true" className="h-5 w-5 md:h-7 md:w-6 text-violet-600" />
                    </dt>
                    <dd className="break-words">
                      {info.link ? (
                        <a href={info.link} className="hover:text-violet-600 transition-colors duration-300 hover:underline break-all">
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
          <form className='p-4 sm:p-6 md:p-8 lg:p-20 animate-slide-in-right' onSubmit={handleSubmit}>
            {/* Success/Error Message */}
            {submitMessage.text && (
              <div className={`mb-4 md:mb-6 p-3 md:p-4 rounded-lg animate-fade-in text-sm md:text-base ${
                submitMessage.type === 'success' 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {submitMessage.text}
              </div>
            )}

            <div className="grid grid-cols-1 gap-x-4 md:gap-x-6 gap-y-4 md:gap-y-6 sm:grid-cols-2">
              <div className="animate-fade-in delay-300">
                <label htmlFor="first-name" className="block text-xs sm:text-sm font-semibold text-gray-900">
                  First name
                </label>
                <div className="mt-2 md:mt-2.5">
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-lg bg-white px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="animate-fade-in delay-400">
                <label htmlFor="last-name" className="block text-xs sm:text-sm font-semibold text-gray-900">
                  Last name
                </label>
                <div className="mt-2 md:mt-2.5">
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-lg bg-white px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 animate-fade-in delay-500">
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-900">
                  Email
                </label>
                <div className="mt-2 md:mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-lg bg-white px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 animate-fade-in delay-600">
                <label htmlFor="phone-number" className="block text-xs sm:text-sm font-semibold text-gray-900">
                  Phone number
                </label>
                <div className="mt-2 md:mt-2.5">
                  <input
                    id="phone-number"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full rounded-lg bg-white px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 animate-fade-in delay-700">
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-900">
                  Message
                </label>
                <div className="mt-2 md:mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-lg bg-white px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 resize-none"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-8 flex justify-end animate-fade-in delay-800">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-5 md:px-6 py-2.5 md:py-3 text-center text-xs sm:text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-violet-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 active:scale-95"
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="h-auto md:h-[12%]">
        <BottomNav />
      </div>
    </div>
  )
}
