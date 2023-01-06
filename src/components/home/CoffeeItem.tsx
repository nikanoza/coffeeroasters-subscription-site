import { Coffee } from "../../types";

const CoffeeItem: React.FC<Coffee> = (props) => {
  return (
    <div className="w-full flex flex-col items-center">
      <img src={props.image} alt="" className="w-[200px] translate-x-5" />
      <div className="w-full flex flex-col items-center">
        <h2 className="fraunces font-black text-2xl text-darkBlue mt-6">
          {props.title}
        </h2>
        <p className="barlow font-normal text-[15px] leading-6 mt-4 text-center w-[282px]">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default CoffeeItem;
