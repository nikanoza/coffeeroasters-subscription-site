const Quality = () => {
  return (
    <div className="mt-48 w-full h-[509px] rounded-[10px] bg-footerBg p-6">
      <div className="w-full h-[156px] quality-poster-mobile bg-cover rounded-lg -mt-[102px]"></div>
      <div className="w-full flex flex-col items-center mt-16">
        <h2 className="fraunces font-black text-[28px] leading-[28px] text-center text-light">
          Uncompromising quality
        </h2>
        <p className="w-full mt-8 barlow font-normal text-[15px] leading-[25px] text-light opacity-80 text-center">
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
