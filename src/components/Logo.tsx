import React from "react";
import { Music } from "lucide-react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 relative top-2 left-2 z-5 transform transition-transform duration-500 ${className}`}
    >
      {/* Music Icon with Hover Animation */}
      <div className="relative bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-full group hover:scale-110 transition-transform duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg">
          <Music className="w-8 h-8 text-indigo-600 group-hover:text-purple-600" />
        </div>
      </div>

      {/* Text with Animation */}
      <div className="flex flex-col items-start group">
        <span className="text-2xl font-extrabold tracking-tighter text-white group-hover:text-indigo-400">
          MusicTech
        </span>
        <span className="text-sm font-medium tracking-wide text-gray-300 group-hover:text-indigo-200">
          Online Music School
        </span>
      </div>
    </div>
  );
};

export default Logo;
