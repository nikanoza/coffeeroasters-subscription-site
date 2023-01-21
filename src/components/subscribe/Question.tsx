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
};

const Question: React.FC<PropsType> = ({
  plan,
  buttons,
  property,
  updatePlan,
}) => {
  return (
    <div className="">
      <div>
        <p></p>
      </div>
      <ul>
        {buttons.map((button) => (
          <Button
            title={button.title}
            description={button.description}
            active={plan[property] === button.title}
            onClick={() => updatePlan(property, button.title)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Question;
