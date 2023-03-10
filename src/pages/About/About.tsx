import { Commitment, Headquarters, Quality } from "../../components";

const About = () => {
  return (
    <div className="w-full mt-[90px] px-6 md:mt-[119px] md:px-10 xl:px-20">
      <div className="w-full h-[400px] rounded-[10px] bg-no-repeat bg-center bg-cover px-6 flex flex-col items-center about-poster-mobile md:about-poster-tablet md:items-start md:px-14 xl:about-poster-desktop">
        <h1 className="fraunces font-black text-[28px] leading-[28px] text-light mt-[111px] xl:text-[40px] xl:leading-[48px]">
          About Us
        </h1>
        <p className="mt-6 barlow font-normal text-[15px] leading-[25px] text-light opacity-80 text-center md:w-96 md:text-left xl:text-base xl:w-[445px]">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
      <Commitment />
      <Quality />
      <Headquarters />
    </div>
  );
};

export default About;
