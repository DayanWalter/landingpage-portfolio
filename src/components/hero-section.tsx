import { Button } from "./ui/button";
import { ArrowRight, CirclePlay, Link } from "lucide-react";

export default function HeroSection() {
  const headlineUUI = "Beautiful analytics to grow smarter";
  const subheadlineUUI =
    "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.";
  const headline = "Headline Emphasizes Value, Result or Transformation";
  const subheadline =
    "Subheadline clearly explains what you provide to get that result";

  return (
    <>
      <div className="flex flex-col px-4 py-16">
        <div className="mb-4 inline-flex items-center justify-center text-xs font-medium text-primary transition-transform hover:translate-x-2 hover:cursor-pointer">
          <div className="flex items-center gap-3 rounded-full bg-primary/5 p-1">
            <div className="rounded-full border border-primary/20 bg-white px-2 py-1">
              <h4>New feature</h4>
            </div>
            <h4>Check our the team dashboard</h4>
            <ArrowRight className="text-primary/50" />
          </div>
        </div>

        <h1 className="mb-4 text-center text-4xl font-semibold leading-10">
          {headlineUUI}
        </h1>
        <h2 className="mb-8 text-center text-lg text-gray-600">
          {subheadlineUUI}
        </h2>
        <div className="mb-16 flex flex-col gap-3">
          <Button>Sign up</Button>

          <Button className="gap-2" variant="outline">
            <CirclePlay className="h-4 w-4" />
            Demo
          </Button>
        </div>
        <img src="./src/assets/macbook.svg" alt="macbook image" />
      </div>
    </>
  );
}
