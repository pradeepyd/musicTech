import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Button from "./ui/Button";

interface Course {
  id: number;
  slug: string;
  description: string;
  title: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900 ">
      <div>
        <div className="text-center">
          <h2 className="text-teal-600 text-base font-semibold tracking-wide uppercase">
            FEATURES COURSES
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight leading-8 text-white sm:text-4xl">
            Learn With The Best
          </p>
        </div>
      </div>
      <div className="mr-10 ml-10">
        <div className="mt-20 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((course: Course) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col bg-white rounded-[22px] h-full max-w-sm overflow-hidden dark:bg-zinc-900">
                  <div className="flex flex-col items-center text-center p-4 sm:p-6 flex-grow">
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {course.title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                      {course.description}
                    </p>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="hover:underline mt-2"
                    >
                      Learn More
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-20 text-center mb-5">
        <Button content={"View All Courses"} href={"courses"} />
      </div>
    </div>
  );
};
export default FeaturedCourses;
