import { Link } from "react-router-dom";
import { StepType } from "../../types";
import Step from "./Step";

const Steps: React.FC<{ items: StepType[]; notHome?: boolean }> = (props) => {
  return (
    <div
      className={
        "w-full flex flex-col items-center md:items-start " + props.notHome
          ? ""
          : "mt-[120px]"
      }
    >
      {!props.notHome ? (
        <h2 className="fraunces font-black text-2xl text-gray">How it works</h2>
      ) : null}
      <div className="hidden md:flex w-full mt-10 items-center relative gap-x-52 xl:gap-x-[305px]">
        <hr className="border-cream w-full absolute top-1/2 z-10" />
        <span className="w-8 h-8 rounded-full border-2 border-hulk z-20 bg-white"></span>
        <span className="w-8 h-8 rounded-full border-2 border-hulk z-20 bg-white"></span>
        <span className="w-8 h-8 rounded-full border-2 border-hulk z-20 bg-white"></span>
      </div>
      <ul className="list-none flex mb-10 flex-col items-center mt-20 gap-y-14 w-full md:flex-row md:gap-x-3 md:w-fit xl:gap-x-28">
        {props.items.map((step) => {
          return (
            <Step
              key={step.title}
              step={step.step}
              title={step.title}
              description={step.description}
              noHome={props.notHome}
            />
          );
        })}
      </ul>
      {!props.notHome ? (
        <Link
          to="/subscribe"
          className="no-underline fraunces font-black text-lg leading-[25px] text-light px-8 py-4 rounded-md bg-hulk md:mt-11"
        >
          Create your plan
        </Link>
      ) : null}
    </div>
  );
};

export default Steps;
