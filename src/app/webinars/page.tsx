"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const detailsofwebinars = [
  {
    title: "The Future of Music Production",
    date: "2025-02-20",
    time: "4:00 PM",
    host: "John Doe",
    description: "Exploring emerging trends in music production technology.",
    duration: "60 mins",
    registrationLink: "https://example.com/register1",
    image:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=400&h=300&fit=crop",
  },
  {
    title: "Mastering DAWs for Beginners",
    date: "2025-02-23",
    time: "11:00 AM",
    host: "Jane Smith",
    description: "Learn how to use Digital Audio Workstations effectively.",
    duration: "90 mins",
    registrationLink: "https://example.com/register2",
    image:
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=400&h=300&fit=crop",
  },
  {
    title: "How to Monetize Your Music",
    date: "2025-02-28",
    time: "2:30 PM",
    host: "Mark Thompson",
    description: "Tips for musicians to generate income through music.",
    duration: "75 mins",
    registrationLink: "https://example.com/register3",
    image:
      "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?w=400&h=300&fit=crop",
  },
  {
    title: "Live Performance Setup Guide",
    date: "2025-03-03",
    time: "6:00 PM",
    host: "Emily Carter",
    description: "Step-by-step guide to setting up live music performances.",
    duration: "60 mins",
    registrationLink: "https://example.com/register4",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
  },
  {
    title: "AI in Music Production",
    date: "2025-03-10",
    time: "3:00 PM",
    host: "Alex Johnson",
    description: "Discover how AI is transforming the music industry.",
    duration: "90 mins",
    registrationLink: "https://example.com/register5",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop",
  },
  {
    title: "Music Branding & Marketing",
    date: "2025-03-15",
    time: "1:00 PM",
    host: "Sarah Lopez",
    description: "Build your personal brand and market your music effectively.",
    duration: "60 mins",
    registrationLink: "https://example.com/register6",
    image:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=400&h=300&fit=crop",
  },
  {
    title: "Mixing & Mastering Essentials",
    date: "2025-03-20",
    time: "5:30 PM",
    host: "Daniel Lee",
    description: "Improve your audio mixing and mastering techniques.",
    duration: "90 mins",
    registrationLink: "https://example.com/register7",
    image:
      "https://images.unsplash.com/photo-1608328314055-3a7fc3ddfd41?w=400&h=300&fit=crop",
  },
  {
    title: "The Role of NFTs in Music",
    date: "2025-03-25",
    time: "4:00 PM",
    host: "Michelle Brooks",
    description: "How NFTs are revolutionizing the music industry.",
    duration: "60 mins",
    registrationLink: "https://example.com/register8",
    image:
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=400&h=300&fit=crop",
  },
];

export default function DetailsWebinars() {
  return (
    <div className="flex justify-center flex-wrap mt-20 m-8 p-8 ">
      {detailsofwebinars.map((webinar) => (
        <div className="w-auto p-4 sm:w-[30rem] group/card m-8" key={webinar.date}>
          <div
            className={cn(
              "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl flex flex-col justify-between p-4",
              "bg-cover bg-center"
            )}
            style={{ backgroundImage: `url(${webinar.image})`, opacity:60 }}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10">
              <Image
                height="100"
                width="100"
                alt="Avatar"
                src="/instructors/photo4.jpg"
                className="h-10 w-10 rounded-full border-2 object-cover"
              />
              <div className="flex flex-col ">
                <p className="font-medium text-base text-purple-700 relative z-10">
                  {webinar.host}
                </p>
                <p className="text-sm text-gray-400">{webinar.duration}</p>
              </div>
            </div>
            <div className="text content">
              <h1 className="font-bold text-2xl md:text-3xl text-white relative z-10">
                {webinar.title}
              </h1>
              <p className="font-normal text-sm text-white relative z-10 my-4">
                {webinar.description}
              </p>
          <Link href={webinar.registrationLink}>
            <button className="bg-blue-600 rounded p-2 text-black">
              Book now
            </button>
          </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
