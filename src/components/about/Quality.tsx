const Quality = () => {
  return (
    <div className="mt-48 w-full h-[509px] rounded-[10px] bg-footerBg p-6 md:p-14 md:h-[488px] md:mt-[304px] xl:mt-64 xl:h-[474px] xl:p-0 xl:flex xl:items-center xl:flex-row-reverse xl:justify-center xl:gap-x-32">
      <div className="w-full h-[156px] quality-poster-mobile bg-cover rounded-lg -mt-[102px] md:quality-poster-tablet md:h-[320px] md:-mt-[216px] xl:quality-poster-desktop xl:h-full xl:w-[445px] bg-no-repeat"></div>
      <div className="w-full flex flex-col items-center mt-16 xl:w-[540px] xl:mt-0 xl:items-start">
        <h2 className="fraunces font-black text-[28px] leading-[28px] text-center text-light xl:text-[40px] xl:leading-[48px]">
          Uncompromising quality
        </h2>
        <p className="w-full mt-8 barlow font-normal text-[15px] leading-[25px] text-light opacity-80 text-center md:mt-6 md:px-5 xl:text-left xl:p-0 xl:text-base">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
    </div>
  );
};

export default Quality;
