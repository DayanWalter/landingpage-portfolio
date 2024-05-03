export default function QuoteSection() {
  return (
    <>
      <div className="py-16">
        {/* Container */}
        <div className="px-4">
          {/* Content */}
          <div>
            {/* Quote and attribution */}
            <div className="grid gap-8">
              <img src="./companies/sisyphus.svg" alt="" />
              <h3>
                We've been using Untitled to kick start every new project and
                can't imagine working without it.
              </h3>
              {/* Avatar and text */}
              <div className="grid gap-4">
                <img src="./quote/avatar.svg" alt="" />
                {/* Text and supporting text */}
                <div className="grid gap-1">
                  <p>Candice Wu</p>
                  <p>Product Manager, Sisyphus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
