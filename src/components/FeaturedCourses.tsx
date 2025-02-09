import Link from "next/link";
import courseData from "../data/music_courses.json";

const FeaturedCourses = () => {
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-teal-600 text-base font-semibold tracking-wide uppercase">
            FEATURES COURSES
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight leading-8 text-white sm:text-4xl">
            Learn with the best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            test
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="relative bg-blue-500 text-white px-6 py-3 rounded-md 
            overflow-hidden transition-all duration-300 
            hover:scale-105 hover:shadow-[0_0_6px_rgba(59,130,246,0.3)]
            active:scale-95 focus:outline-none focus:ring-1 focus:ring-blue-300
            before:absolute before:inset-0 before:z-[-1] before:bg-blue-500 
            before:blur-sm before:opacity-30
            hover:before:opacity-50 animate-subtle-glow"
        >
          View all Courses
        </Link>
      </div>
    </div>
  );
};
export default FeaturedCourses;
