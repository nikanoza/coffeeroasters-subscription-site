import { CoffeeIcon } from "../../svg";
import { CardType, Coffee } from "../../types";

const Card: React.FC<CardType> = (props) => {
  console.log(props.image);
  return (
    <div className="w-full bg-hulk rounded-lg flex flex-col items-center pb-12">
      <div className="mt-[72px]">{<props.image />}</div>
      <h2 className="mt-14 fraunces font-black text-2xl text-light">
        {props.title}
      </h2>
      <p className="barlow text-[15px] leading-[25px] font-normal text-light opacity-80 mt-6 text-center w-[212px]">
        {props.description}
      </p>
    </div>
  );
};

export default Card;
