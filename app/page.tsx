import Image from "next/image";
import Link from "next/link";
import BottomNav from "./components/bottomnav";
import profileData from "@/data/profile.json";

export default function Home() {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="h-[88%] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-10 items-center justify-center max-w-7xl w-full">
          {/* Profile Image */}
          <div className="animate-scale-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              <Image 
                src={profileData.profileImage} 
                alt={profileData.name} 
                width={320} 
                height={320} 
                className="relative rounded-full grayscale hover:grayscale-0 transition-all duration-500 border-4 border-white shadow-2xl"
              />
            </div>
          </div>

          {/* Profile Content */}
          <div className="flex flex-col space-y-4 animate-fade-in delay-200 max-w-2xl">
            <span className="text-4xl sm:text-5xl font-semibold font-mono gradient-text animate-slide-in-left">
              {profileData.greeting}
            </span>
            <span className="text-xl sm:text-2xl font-semibold animate-slide-in-left delay-100">
              {profileData.title}
            </span>
            <p className="w-full text-sm sm:text-base leading-relaxed text-gray-700 animate-fade-in delay-300 indent-4">
              {profileData.description}
            </p>
            
            {/* Action Links */}
            <div className="flex flex-wrap gap-6 sm:gap-10 pt-4 justify-center sm:justify-start">
              {profileData.links.map((link, index) => (
                <Link 
                  key={index}
                  href={link.url} 
                  className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full ${link.bgColor} ${link.hoverColor} 
                    flex items-center justify-center p-8 sm:p-12 border-2 border-gray-400 
                    transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:rotate-3
                    animate-scale-in delay-${300 + index * 100} font-semibold text-center text-sm
                    hover:border-gray-600 card-hover`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[12%]">
        <BottomNav/>
      </div>
    </div>
  );
}
