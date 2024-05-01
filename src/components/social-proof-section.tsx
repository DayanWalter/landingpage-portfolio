import React from "react";

export default function SocialProofSection() {
  return (
    <>
      <div className="border px-4 pb-16">
        <h3 className="mb-8 text-center font-medium leading-6 text-gray-600">
          Join 4,000+ companies already growing
        </h3>
        <div className="grid grid-cols-2 grid-rows-3 items-center justify-items-center">
          <img src="./src/assets/layers.svg" alt="layers logo" />
          <img src="./src/assets/sisyphus.svg" alt="sisyphus logo" />
          <img src="./src/assets/circooles.svg" alt="circooles logo" />
          <img src="./src/assets/catalog.svg" alt="catalog logo" />
          <img src="./src/assets/quotient.svg" alt="quotient logo" />
          <img src="./src/assets/hourglass.svg" alt="hourglass logo" />
        </div>
      </div>
    </>
  );
}
