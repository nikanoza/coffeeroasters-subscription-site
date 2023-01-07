import { Link } from "react-router-dom";
import { Cards, Collection } from "../../components";
import { CardItems, coffees } from "./helpers";

const Home = () => {
  return (
    <div className="w-full pt-[90px] pb-[538px] px-6">
      <div className="w-full h-[500px] rounded-[10px] home-poster-mobile bg-no-repeat bg-center bg-cover px-6 flex flex-col items-center justify-center">
        <h1 className="fraunces font-black text-[40px] leading-10 text-light">
          Great coffee made simple.
        </h1>
        <p className="mt-6 barlow font-normal text-[15px] leading-[25px] text-light opacity-80 text-center">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Link
          to="/subscribe"
          className="no-underline fraunces font-black text-lg leading-[25px] text-light px-8 py-4 rounded-md bg-hulk mt-10"
        >
          Create your plan
        </Link>
      </div>
      <Collection items={coffees} />
      <Cards items={CardItems} />
    </div>
  );
};

export default Home;
