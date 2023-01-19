const Commitment = () => {
  return (
    <div className="mt-28 w-full">
      <div className="w-full h-[400px] commitment-poster-mobile rounded-lg bg-cover"></div>
      <div className="mt-12 flex flex-col items-center">
        <h2 className="fraunces font-black text-[32px] leading-[48px]">
          Our commitment
        </h2>
        <p className="w-full mt-8 barlow font-normal text-[15px] leading-[25px] text-darkBlue opacity-80 text-center">
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </div>
  );
};

export default Commitment;
