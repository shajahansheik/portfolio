import Image from "next/image";
import Link from "next/link";
import BottomNav from "./components/bottomnav";

export default function Home() {
  return (
    <div className="h-full">
      <div className="h-[88%] flex items-center justify-center">
      <div className="flex space-x-5 items-center justify-center ">
        <div>
          <Image src='/profile.jpeg' alt="Shajahan" width={320} height={320} className="rounded-full grayscale" />
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-3xl font-semibold font-mono">Hello</span>
          <span className="text-lg font-semibold ">A Bit About Me</span>
          <p className="w-[32rem] flex flex-wrap indent-4 text-sm">Experienced Full Stack Developer skilled in Angular, Next.js, Nest.js, and GraphQL. Expertise in EMR systems, API design, state machines, and Twilio integration. Passionate about building robust, user-friendly applications and collaborating effectively.</p>
          <div className="flex space-x-10">
            <Link href='/resume' className='w-24 h-24 rounded-full bg-yellow-300 hover:bg-yellow-400 flex items-center justify-center p-12 border border-gray-400'>Resume</Link>
            <Link href='/projects' className='w-24 h-24 rounded-full bg-red-300 hover:bg-red-400 flex items-center justify-center p-12 border border-gray-400'>Projects</Link>
            <Link href='/contact' className='w-24 h-24 rounded-full bg-blue-300 hover:bg-blue-400 flex items-center justify-center p-12 border border-gray-400'>Contact</Link>
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
