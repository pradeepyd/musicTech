import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import Logo from "./Logo";
import SigninBtne from "./SigninBtne";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div >

      {/* <div className="bg-transparent relative top-0 left-0 right-100 flex justify-between sm:display-hidden">
        <Logo className="top-0 left-0" />
        <div className=" relative border border-blue-700 p-2 m-2 pl-4 ml-4">
          <SigninBtne></SigninBtne>
        </div>
      </div> */}
         <div className="flex  bg-transparent border-none">
          <h3 className="flex justify-center p-4 mx-12">MusicTech</h3>
          <div className="relative w-full flex justify-center items-center">
          <Navbar/>
          </div>
          <SigninBtne/>
        </div>
      <div className="h-auto md:h-[40rem] flex flex-col items-center justify-center w-full relative overflow-hidden rounded-md mx-auto md:py-0">
   
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="aqua"
        />


        <div className="w-full text-center relative p-4 z-10">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Master the art of music
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Dive into our comprehensive music courses and transform your musical
            journey today. Whether you're a beginner or looking to refine your
            skills, join us to unlock your true potential.
          </p>
          <div className="mt-6">
            <Link href={"/courses"}>
              <Button
                borderRadius="1.8rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
