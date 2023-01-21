import { Steps } from "../../components";
import { stepsData } from "../Home/helpers";

const Subscribe = () => {
  return (
    <div className="w-full mt-[90px] px-6 md:mt-[119px] md:px-10 xl:px-20">
      <div className="w-full h-[500px] subscribe-poster-mobile rounded-[10px] bg-no-repeat bg-center bg-cover px-6 flex flex-col items-center justify-center md:items-start md:px-14 md:subscribe-poster-tablet xl:subscribe-poster-desktop">
        <h1 className="fraunces font-black text-[40px] leading-[40px] text-light">
          Create a plan
        </h1>
        <p className="mt-6 barlow font-normal text-[15px] leading-[25px] text-light opacity-80 text-center md:w-96 md:text-left">
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </div>
      <div className="w-full mt-32 bg-footerBg rounded-[10px] p-2 pb-20">
        <Steps items={stepsData} notHome={true} />
      </div>
    </div>
  );
};

export default Subscribe;
