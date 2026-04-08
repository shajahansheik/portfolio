import Image from "next/image";
import Link from "next/link";
import BottomNav from "./components/bottomnav";
import profileData from "@/data/profile.json";

export default function Home() {
  return (
    <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      <div className="flex-1 flex items-center justify-center px-4 py-12 overflow-y-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl w-full">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image 
                src={profileData.profileImage} 
                alt={profileData.name} 
                width={240} 
                height={240} 
                className="relative rounded-full grayscale hover:grayscale-0 transition-all duration-500 border-4 border-white shadow-2xl w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover"
              />
          </div>

          {/* Profile Content */}
          <div className="flex flex-col space-y-6 max-w-4xl text-center lg:text-left">
            <h1 className="text-5xl font-semibold text-blue-600">
              {profileData.greeting}
            </h1>
            <h2 className="text-2xl font-semibold text-gray-800">
              {profileData.title}
            </h2>
            <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
              {profileData.description}
            </p>
            
            {/* Action Links */}
            <div className="flex gap-6 pt-4 justify-center lg:justify-start">
              {profileData.links.map((link, index) => (
                <Link 
                  key={index}
                  href={link.url} 
                  className={`w-28 h-28 rounded-full ${link.bgColor} ${link.hoverColor} 
                    flex items-center justify-center border-2 border-black 
                    transition-colors duration-200 font-semibold text-sm`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BottomNav/>
    </div>
  );
}
