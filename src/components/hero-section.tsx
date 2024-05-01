import { Button } from "./ui/button";
import { CirclePlay } from "lucide-react";

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
        <Button className="mb-4" variant="link">
          <img src="./src/assets/newFeature.svg" alt="new feature button" />
        </Button>

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
