export default function MetricsSection() {
  const metrics = [
    {
      number: "4,000+",
      text: "Global customers",
      supportingText: "We've helped over 4,000 amazing global companies.",
    },
    {
      number: "600%",
      text: "Return on investment",
      supportingText: "Our customers have reported an average of ~600% ROI.",
    },
    {
      number: "10k",
      text: "Global downloads",
      supportingText: "Our app has been downloaded over 10k times.",
    },
    {
      number: "200+",
      text: "5-star reviews",
      supportingText: "We're proud of our 5-star rating with over 200 reviews.",
    },
  ];
  return (
    <>
      {/* Section */}
      <div className="grid justify-center gap-12 py-16 md:gap-16 md:py-24">
        {/* Container */}
        <div className="px-4 md:max-w-7xl md:px-8">
          {/* Content */}
          <div>
            {/* Heading and supporting text */}
            <div className="grid gap-4 md:gap-5">
              {/* Heading and subheading */}
              <div className="grid gap-3">
                <p className="text-sm font-semibold text-primary/70 md:text-base">
                  Launch faster
                </p>
                <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
                  Build something great
                </h2>
              </div>
              <p className="text-lg text-gray-600 md:text-xl">
                We've done all the heavy lifting so you don't have to — get all
                the data you need to launch and grow your business faster.
              </p>
            </div>
          </div>
        </div>
        {/* Maincontainer */}
        <div className="grid gap-12 px-4 md:max-w-7xl md:grid-cols-2 md:gap-24 md:px-8">
          {/* Container */}
          <div className="">
            {/* Content */}
            <ul className="grid gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
              {/* Metric item */}
              {metrics.map((metric) => (
                /* Number and text */
                <li key={metric.number} className="grid gap-3 text-center">
                  <h3 className="text-5xl font-semibold text-primary/60 md:text-6xl">
                    {metric.number}
                  </h3>
                  {/* Text and supporting text */}
                  <div className="grid gap-2">
                    <p className="text-lg font-medium text-gray-900">
                      {metric.text}
                    </p>
                    <p className="text-gray-600">{metric.supportingText}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Container */}
          <div className="">
            <img src="./metric/whiteboard.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
