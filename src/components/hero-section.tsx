import React from "react";

export default function HeroSection() {
  const headline = "Headline Emphasizes Value, Result or Transformation";
  const subheadline =
    "Subheadline clearly explains what you provide to get that result";

  return (
    <>
      <h1 className="px-4 py-16 text-4xl font-semibold leading-10">
        {headline}
      </h1>
      {/* <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight ">
        {subheadline}
      </h2> */}
    </>
  );
}
