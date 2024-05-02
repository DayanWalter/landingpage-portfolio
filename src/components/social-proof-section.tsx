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
      <div className="px-4 pb-16">
        <h3 className="mb-8 text-center font-medium leading-6 text-gray-600">
          Join 4,000+ companies already growing
        </h3>
        <ul className="grid grid-cols-2 grid-rows-3 items-center justify-items-center gap-4">
          {companies.map((name) => (
            <li key={name}>
              <img src={`./companies/${name}.svg`} alt={`${name} logo`} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
