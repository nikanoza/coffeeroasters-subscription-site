import { StepType } from "../../types";

const Step: React.FC<StepType> = (props) => {
  return (
    <div className="w-full flex flex-col items-center md:items-start md:h-[369px] md:w-[223px]">
      <h2 className="fraunces font-black text-[72px] leading-[72px] text-cream">
        {props.step}
      </h2>
      <h3 className="fraunces font-black text-[28px] leading-8 text-darkBlue mt-6">
        {props.title}
      </h3>
      <p className="barlow text-[15px] leading-[25px] font-normal text-darkBlue mt-6 text-center md:text-left">
        {props.description}
      </p>
    </div>
  );
};

export default Step;
