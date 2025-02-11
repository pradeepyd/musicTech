"use client"
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Image from 'next/image';

const instructors = [
    {
      id: 1,
      name: 'Pradeep',
      designation: 'Vocal Coach',
      image:
        '/instructors/photo1.jpg',
    },
    {
      id: 2,
      name: 'Pradeep Yadav',
      designation: 'Guitar Instructor',
      image:
        '/instructors/photo2.jpg',
    },
    {
      id: 3,
      name: 'Yadav Pradeep',
      designation: 'Piano Teacher',
      image:
            '/instructors/photo3.jpg',
    },
    {
      id: 4,
      name: 'Pradeep yadav',
      designation: 'Drumming Expert',
      image:
            '/instructors/photo4.jpg',
    },
  ];

function Instructors(){
    return (
        <div className="flex items-center justify-center h-[40rem] overflow-hidden relative " id="instructor">
            <WavyBackground className="w-full h-full flex flex-col items-center justify-center mx-auto max-w-7xl ">
                <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
                <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
                <div className="w-full mb-10 flex flex-row items-center justify-center">
                    <AnimatedTooltip items={instructors}/>
                </div>
            </WavyBackground>
        </div>
    )
}

export default Instructors;