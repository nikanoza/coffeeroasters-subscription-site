import { Subscribe } from "../../types";

type PropsType = {
  plan: Subscribe;
  updatePlan: (
    property: keyof Subscribe,
    value: Subscribe[keyof Subscribe]
  ) => void;
};

const SubscribeForm: React.FC<PropsType> = ({ plan, updatePlan }) => {
  return <div></div>;
};

export default SubscribeForm;
