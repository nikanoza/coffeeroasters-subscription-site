import { useEffect, useState } from "react";
import DownArrow from "../../svg/DownArrow";
import { Key, Subscribe } from "../../types";
import Button from "./Button";

type PropsType = {
  plan: Subscribe;
  updatePlan: (
    property: keyof Subscribe,
    value: Subscribe[keyof Subscribe]
  ) => void;
  buttons: { title: Subscribe[keyof Subscribe]; description: string }[];
  property: Key;
  question: string;
  disabled: boolean;
};

const Question: React.FC<PropsType> = ({
  plan,
  buttons,
  property,
  updatePlan,
  question,
  disabled,
}) => {
  const [showAnswers, setShowAnswers] = useState<boolean>(disabled);
  useEffect(() => {
    if (disabled) {
      setShowAnswers(false);
    }
  }, [disabled]);
  return (
    <div className={disabled ? "opacity-70" : ""}>
      <div className="flex items-center justify-between w-full">
        <p
          className="fraunces font-black text-2xl text-gray w-[240px]"
          onClick={() => {
            return !disabled ? setShowAnswers(!showAnswers) : null;
          }}
        >
          {question}
        </p>
        <div className={showAnswers ? "rotate-180" : ""}>
          <DownArrow
            onClick={() => {
              return !disabled ? setShowAnswers(!showAnswers) : null;
            }}
          />
        </div>
      </div>
      {showAnswers ? (
        <ul className="mt-8 list-none flex flex-col w-full gap-y-4">
          {buttons.map((button) => (
            <Button
              key={button.title}
              title={button.title}
              description={button.description}
              active={plan[property] === button.title}
              onClick={() => updatePlan(property, button.title)}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Question;
