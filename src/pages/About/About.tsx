import { Commitment } from "../../components";

const About = () => {
  return (
    <div className="w-full mt-[90px] px-6 md:mt-[119px] md:px-10 xl:px-20">
      <div className="w-full h-[400px] rounded-[10px] bg-no-repeat bg-center bg-cover px-6 flex flex-col items-center about-poster-mobile">
        <h1 className="fraunces font-black text-[28px] leading-[28px] text-light mt-[111px]">
          About Us
        </h1>
        <p className="mt-6 barlow font-normal text-[15px] leading-[25px] text-light opacity-80 text-center md:w-96 md:text-left">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
      <Commitment />
    </div>
  );
};

export default About;
