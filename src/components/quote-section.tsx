export default function QuoteSection() {
  return (
    <>
      <div className="bg-gray-50 py-16">
        {/* Container */}
        <div className="px-4">
          {/* Content */}
          <div>
            {/* Quote and attribution */}
            <div className="grid justify-items-center gap-8">
              <img src="./companies/sisyphus.svg" alt="" />
              <h3 className="text-center text-3xl font-medium text-gray-900">
                We've been using Untitled to kick start every new project and
                can't imagine working without it.
              </h3>
              {/* Avatar and text */}
              <div className="grid justify-items-center gap-4">
                <img src="./quote/avatar.svg" alt="" />
                {/* Text and supporting text */}
                <div className="grid gap-1 text-center">
                  <p className="text-lg font-medium text-gray-900">
                    Candice Wu
                  </p>
                  <p className="text-gray-600 ">Product Manager, Sisyphus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
