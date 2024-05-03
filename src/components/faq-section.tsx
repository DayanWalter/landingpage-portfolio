import React from "react";

export default function FaqSection() {
  return (
    <>
      <div className="grid gap-12 py-16">
        {/* Container */}
        <div className="px-4">
          {/* Content */}
          <div>
            {/* Heading and supporting text */}
            <div className="grid gap-4 text-center">
              <h2 className="text-3xl font-semibold text-gray-900">
                Frequently asked questions
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about the product and billing.
              </p>
            </div>
          </div>
        </div>
        {/* Container */}
        <div className="px-4"></div>
        {/* Container */}
        <div className="px-4"></div>
      </div>
    </>
  );
}
