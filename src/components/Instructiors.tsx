"use client"
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Image from 'next/image';

const instructors = [
    {
      id: 1,
      name: 'Elena Briggs',
      designation: 'Vocal Coach',
      image:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 2,
      name: 'Marcus Reid',
      designation: 'Guitar Instructor',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 3,
      name: 'Julia Zhang',
      designation: 'Piano Teacher',
      image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    },
    {
      id: 4,
      name: 'Andre Gomez',
      designation: 'Drumming Expert',
      image:
            'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80%22,%20%20%20},',
    },
  ];

function Instructors(){
    return (
        <div className="flex items-center justify-center h-[40rem] overflow-hidden relative ">
            <WavyBackground className="w-full h-full flex flex-col items-center justify-center mx-auto max-w-7xl ">
                <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instrctors</h2>
                <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
                <div className="w-full mb-10 flex flex-row items-center justify-center">
                    <AnimatedTooltip items={instructors}/>
                </div>
            </WavyBackground>
        </div>
    )
}

export default Instructors;