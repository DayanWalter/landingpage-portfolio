import { Button } from "./ui/button";

export default function CtaSection() {
  return (
    <>
      <div className="grid justify-center bg-gray-50 py-16 md:py-24">
        {/* Container */}
        <div className="px-4 md:max-w-7xl md:px-8">
          {/* Content */}
          <div className="grid gap-8 md:gap-10">
            {/* Heading and supporting text */}
            <div className="grid gap-4 text-center md:gap-5">
              <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
                Start your free trial
              </h2>
              <p className="text-lg text-gray-500 md:text-xl">
                Join over 4,000+ startups already growing with Untitled.
              </p>
            </div>
            {/* Actions */}
            <div className="flex flex-col gap-3 md:flex-row md:justify-center">
              <Button className="font-semibold">Get started</Button>
              <Button className="font-semibold text-gray-700" variant="outline">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
