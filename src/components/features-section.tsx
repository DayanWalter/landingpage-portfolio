import Icon from "./ui/icon";

export default function FeaturesSection() {
  // Edit features as necessary
  const features = [
    {
      icon: "Mail",
      text: "Share team inboxes",
      supportingText:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: "BarChart2",
      text: "Deliver instant answers",
      supportingText:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: "Zap",
      text: "Manage your team with reports",
      supportingText:
        "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
    {
      icon: "Smile",
      text: "Connect with customers",
      supportingText:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    },
    {
      icon: "Command",
      text: "Connect the tools you already use",
      supportingText:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      icon: "MessageCircle",
      text: "Our people make the difference",
      supportingText:
        "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
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
              {/* Heading and Subheading */}
              <div className="grid gap-3">
                {/* Subheading */}
                <p className="text-center text-sm font-semibold text-primary/70 md:text-base">
                  Features
                </p>
                {/* Heading */}
                <h2 className="text-center text-3xl font-semibold  md:text-4xl">
                  Analytics that feels like it's from the future
                </h2>
              </div>
              {/* Supporting Text */}
              <p className="text-center text-lg text-gray-600 md:text-xl ">
                Powerful, self-serve product and growth analytics to help you
                convert, engage, and retain more users. Trusted by over 4,000
                startups.
              </p>
            </div>
          </div>
        </div>
        {/* Container */}
        <div className="px-4 md:max-w-7xl md:px-8">
          {/* Content */}
          <ul className="grid gap-10 md:grid-cols-3 md:grid-rows-2 md:gap-x-8 md:gap-y-16">
            {features.map((feature) => (
              // Feature
              <li
                key={feature.icon}
                className="grid justify-items-center gap-4 md:gap-5"
              >
                {/* Feature icon */}
                <div className="grid h-10 w-10 items-center justify-center rounded-full bg-primary/5 md:h-12 md:w-12">
                  <div className="grid h-7 w-7 items-center justify-center rounded-full bg-primary/10 md:h-9 md:w-9">
                    <Icon icon={`${feature.icon}`} />
                  </div>
                </div>

                {/* <img
                  src={`./features/${feature.icon}.svg`}
                  alt={`${feature.icon} icon`}
                /> */}
                {/* Text and supporting text */}
                <div className="grid gap-1 md:gap-2">
                  <p className="text-center text-lg font-medium md:text-xl">
                    {feature.text}
                  </p>
                  <p className="text-center text-gray-600">
                    {feature.supportingText}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
