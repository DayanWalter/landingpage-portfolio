import { Button } from "./ui/button";
import { ArrowRight, CirclePlay } from "lucide-react";

export default function HeroSection() {
  const headlineUUI = "Beautiful analytics to grow smarter";
  const subheadlineUUI =
    "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.";
  // const headline = "Headline Emphasizes Value, Result or Transformation";
  // const subheadline =
  //   "Subheadline clearly explains what you provide to get that result";

  return (
    <>
      {/* Section */}
      <div className="grid justify-center gap-16 py-16 md:py-24">
        {/* Container */}
        <div className="px-4 md:max-w-7xl md:px-8">
          {/* Content */}
          <div className="grid gap-8 md:gap-12">
            {/* Heading and supporting text */}
            <div className="grid items-center justify-items-center gap-4 md:gap-6">
              {/* Heading and badge */}
              <div className="grid gap-4">
                {/* Badge group */}
                <div className="mx-auto text-xs font-medium text-primary transition-transform hover:translate-x-2">
                  <a href="#" target="_blank">
                    {/* Button */}
                    <div className="flex items-center gap-3 rounded-full bg-primary/5 p-1">
                      {/* Badge */}
                      <div className="rounded-full border border-primary/20 bg-white px-2 py-1">
                        <p>New feature</p>
                      </div>
                      <p>Check our the team dashboard</p>
                      <ArrowRight className="text-primary/50" />
                    </div>
                  </a>
                </div>

                {/* Heading */}
                <h1 className="text-center text-4xl font-semibold leading-10 md:text-6xl">
                  {headlineUUI}
                </h1>
              </div>
              {/* Supporting text */}
              <p className="text-center text-lg text-gray-600 md:max-w-3xl md:text-xl">
                {subheadlineUUI}
              </p>
            </div>
            {/* Actions */}
            <div className="flex flex-col gap-3 md:flex-row md:justify-center">
              <Button>Sign up</Button>
              <Button className="gap-2" variant="outline">
                <CirclePlay className="h-4 w-4" />
                Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Container */}
        <div className="px-4 md:max-w-7xl md:px-8">
          {/* Content */}
          <div className="overflow-hidden md:max-h-[480px]">
            <img src="./macbook.svg" alt="macbook image" />
          </div>
        </div>
      </div>
    </>
  );
}
