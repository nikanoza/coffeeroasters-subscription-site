import { Australia, Canada, Uk } from "../../svg";

const Headquarters = () => {
  return (
    <div className="mt-[120px] flex flex-col items-center md:mt-36 md:items-start xl:mt-40 xl:ml-20">
      <h2 className="fraunces font-black text-2xl text-gray">
        Our headquarters
      </h2>
      <div className="mt-[72px] flex flex-col items-center gap-y-20 md:flex-row md:gap-x-6 xl:gap-x-24">
        <div className="flex flex-col items-center md:items-start">
          <Uk />
          <h2 className="mt-12 fraunces font-black text-[28px] leading-9 text-darkBlue xl:text-[32px] xl:leading-[36px]">
            United Kingdom
          </h2>
          <ul className="flex flex-col items-center gap-y-2 mt-5 md:items-start">
            <span className="barlow font-normal text-base text-darkBlue">
              68 Asfordby Rd
            </span>
            <span className="barlow font-normal text-base text-darkBlue">
              Alcaston
            </span>
            <span className="barlow font-normal text-base text-darkBlue">
              SY6 1YA
            </span>
            <span className="barlow font-normal text-base text-darkBlue">
              +44 1241 918425
            </span>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <Canada />
          <h2 className="mt-12 fraunces font-black text-[28px] leading-9 text-darkBlue">
            Canada
          </h2>
          <ul className="flex flex-col items-center gap-y-2 mt-5 md:items-start">
            <span className="barlow font-normal text-base text-darkBlue">
              1528 Eglinton Avenue
            </span>
            <span className="barlow font-normal text-base text-darkBlue">
              Toronto
            </span>
            <span className="barlow font-normal text-base text-darkBlue">
              Ontario M4P 1A6
            </span>
            <span className="barlow font-normal text-base text-darkBlue">
              +1 416 485 2997
            </span>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <Australia />
          <h2 className="mt-12 fraunces font-black text-[28px] leading-9 text-darkBlue">
            Australia
          </h2>
          <ul className="flex flex-col items-center gap-y-2 mt-5 md:items-start">
            <span className="barlow font-normal text-base text-darkBlue">
              36 Swanston Street
            </span>
            <span className="barlow font-normal text-base text-darkBlue">
              Kewell
            </span>
            <span className="barlow font-normal text-base text-darkBlue">
              Victoria
            </span>
            <span className="barlow font-normal text-base text-darkBlue">
              +61 4 9928 3629
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Headquarters;
