import { Coffee } from "../../types";

const CoffeeItem: React.FC<Coffee> = (props) => {
  return (
    <div className="w-full flex flex-col items-center md:flex-row md:gap-x-14 z-20 xl:flex-col">
      <img src={props.image} alt="" className="w-[200px] translate-x-5" />
      <div className="w-full flex flex-col items-center">
        <h2 className="fraunces font-black text-2xl text-darkBlue mt-6 md:-mt-3 xl:mt-[70px]">
          {props.title}
        </h2>
        <p className="barlow font-normal text-[15px] leading-6 mt-4 text-center w-[282px] md:text-left xl:mt-6 xl:w-[255px] xl:text-center xl:text-base">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default CoffeeItem;
