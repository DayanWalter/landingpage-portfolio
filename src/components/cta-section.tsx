import { Button } from "./ui/button";

export default function CtaSection() {
  return (
    <>
      <div className="bg-gray-50 py-16">
        {/* Container */}
        <div className="px-4">
          {/* Content */}
          <div className="grid gap-8">
            {/* Heading and supporting text */}
            <div className="grid gap-4 text-center">
              <h2 className="text-3xl font-semibold text-gray-900">
                Start your free trial
              </h2>
              <p className="text-lg text-gray-500">
                Join over 4,000+ startups already growing with Untitled.
              </p>
            </div>
            {/* Actions */}
            <div className="grid gap-3 ">
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
