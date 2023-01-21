const Commitment = () => {
  return (
    <div className="mt-28 w-full md:flex items-center justify-center gap-x-[69px] xl:gap-x-32">
      <div className="w-full h-[400px] commitment-poster-mobile rounded-lg bg-cover md:commitment-poster-table md:w-[281px] md:h-[470px] xl:w-[445px] xl:h-[520px] xl:commitment-poster-desktop"></div>
      <div className="mt-12 flex flex-col items-center md:w-[339px] md:mt-0 md:items-start xl:w-[540px]">
        <h2 className="fraunces font-black text-[32px] leading-[48px]">
          Our commitment
        </h2>
        <p className="w-full mt-8 barlow font-normal text-[15px] leading-[25px] text-darkBlue opacity-80 text-center md:text-left">
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
