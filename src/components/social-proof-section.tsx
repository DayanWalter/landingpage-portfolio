export default function SocialProofSection() {
  const companies = [
    "layers",
    "sisyphus",
    "circooles",
    "catalog",
    "quotient",
    "hourglass",
  ];

  return (
    <>
      <div className="pb-16">
        {/* Container */}
        <div className="grid gap-8 px-4">
          <p className="text-center font-medium leading-6 text-gray-600">
            Join 4,000+ companies already growing
          </p>
          {/* Logos wrap */}
          <ul className="grid grid-cols-2 grid-rows-3 items-center justify-items-center gap-x-8 gap-y-4">
            {companies.map((name) => (
              <li key={name}>
                <img src={`./companies/${name}.svg`} alt={`${name} logo`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
