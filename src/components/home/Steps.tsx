import { Link } from "react-router-dom";
import { StepType } from "../../types";
import Step from "./Step";

const Steps: React.FC<{ items: StepType[] }> = (props) => {
  return (
    <div className="w-full mt-[120px] flex flex-col items-center">
      <h2 className="fraunces font-black text-2xl text-gray">How it works</h2>
      <ul className="list-none flex flex-col items-center mt-20 gap-y-14 w-full">
        {props.items.map((step) => {
          return (
            <Step
              key={step.title}
              step={step.step}
              title={step.title}
              description={step.description}
            />
          );
        })}
      </ul>
      <Link
        to="/subscribe"
        className="no-underline fraunces font-black text-lg leading-[25px] text-light px-8 py-4 rounded-md bg-hulk mt-20"
      >
        Create your plan
      </Link>
    </div>
  );
};

export default Steps;
