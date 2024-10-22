import { Link } from "react-router-dom";
import { Cards, Collection, Steps } from "../../components";
import { cardItems, coffees, stepsData } from "./helpers";

const Home = () => {
  return (
    <div className="w-full mt-[90px] px-6 md:mt-[119px] md:px-10 xl:px-20">
      <div className="w-full h-[500px] rounded-[10px] home-poster-mobile bg-no-repeat bg-center bg-cover px-6 flex flex-col items-center justify-center md:home-poster-tablet md:items-start md:px-14 xl:home-poster-desktop">
        <h1
          id="slogan"
          className="fraunces font-black text-[40px] leading-10 text-light md:text-5xl md:leading-[48px] md:w-80 xl:text-7xl xl:leading-[72px] xl:w-[493px]"
        >
          Great coffee made simple.
        </h1>
        <p className="mt-6 barlow font-normal text-[15px] leading-[25px] text-light opacity-80 text-center md:w-96 md:text-left">
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
      <iframe
        src="https://test-front-amber.vercel.app/"
        width="50%"
        height="500px"
        style={{ border: "2px solid blue", margin: " 50px auto" }}
      ></iframe>

      <Cards items={cardItems} />
      <Steps items={stepsData} />
    </div>
  );
};

export default Home;
