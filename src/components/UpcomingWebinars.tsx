import Button from "./ui/Button";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    slug: "understanding-music-theory",
    isFeatured: true,
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    slug: "the-art-of-songwriting",
    isFeatured: true,
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    slug: "mastering-your-instrument",
    isFeatured: true,
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    slug: "music-production-essentials",
    isFeatured: true,
  },
  // Added two more webinars
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    slug: "live-performance-techniques",
    isFeatured: true,
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    slug: "digital-music-marketing",
    isFeatured: true,
  },
];

const UpcomingWebinars = () => {
  return (
    <div className="py-12 bg-gray-900 ">
      <div>
        <div className="text-center">
          <h2 className="text-teal-600 text-base font-semibold tracking-wide uppercase">
            FEATURES WEBINARS
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight leading-8 text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
      </div>
      <div className="mr-10 ml-10">
        <div className="mt-10 flex flex-col gap-8 justify-center">
        <HoverEffect className="gap-5"
          items={featuredWebinars.map((webinar) => ({
            title: webinar.title,
            description: webinar.description,
            link: `/${webinar.slug}`,
          }))}
        />
        </div>
      </div>
      <div className="mt-10 text-center mb-5">
        <Button content={"View All Webinars"} />
      </div>
    </div>
  );
};

export default UpcomingWebinars;
