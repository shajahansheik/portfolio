import Image from "next/image";
import Link from "next/link";
import BottomNav from "./components/bottomnav";
import profileData from "@/data/profile.json";

export default function Home() {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-y-auto md:overflow-hidden">
      <div className="min-h-[85%] md:h-[88%] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6 md:py-0">
        <div className="flex flex-col lg:flex-row space-y-6 md:space-y-8 lg:space-y-0 lg:space-x-10 items-center justify-center max-w-7xl w-full">
          {/* Profile Image */}
          <div className="animate-scale-in flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              <Image 
                src={profileData.profileImage} 
                alt={profileData.name} 
                width={240} 
                height={240} 
                className="relative rounded-full grayscale hover:grayscale-0 transition-all duration-500 border-4 border-white shadow-2xl w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
              />
            </div>
          </div>

          {/* Profile Content */}
          <div className="flex flex-col space-y-3 md:space-y-4 animate-fade-in delay-200 max-w-2xl text-center lg:text-left px-2">
            <span className="text-3xl sm:text-4xl md:text-5xl font-semibold font-mono gradient-text animate-slide-in-left">
              {profileData.greeting}
            </span>
            <span className="text-lg sm:text-xl md:text-2xl font-semibold animate-slide-in-left delay-100">
              {profileData.title}
            </span>
            <p className="w-full text-sm sm:text-base leading-relaxed text-gray-700 animate-fade-in delay-300 indent-4 text-left">
              {profileData.description}
            </p>
            
            {/* Action Links */}
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 pt-2 md:pt-4 justify-center lg:justify-start">
              {profileData.links.map((link, index) => (
                <Link 
                  key={index}
                  href={link.url} 
                  className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full ${link.bgColor} ${link.hoverColor} 
                    flex items-center justify-center p-6 sm:p-8 md:p-12 border-2 border-gray-400 
                    transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:rotate-3
                    animate-scale-in delay-${300 + index * 100} font-semibold text-center text-xs sm:text-sm
                    hover:border-gray-600 card-hover active:scale-95`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto md:h-[12%]">
        <BottomNav/>
      </div>
    </div>
  );
}
