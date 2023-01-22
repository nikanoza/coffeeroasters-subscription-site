import { useSummery } from "../../hooks";
import { Subscribe } from "../../types";
import Question from "./Question";

type PropsType = {
  plan: Subscribe;
  updatePlan: (
    property: keyof Subscribe,
    value: Subscribe[keyof Subscribe]
  ) => void;
  showModal: () => void;
};

const preferences: {
  title: Subscribe[keyof Subscribe];
  description: string;
}[] = [
  {
    title: "capsule",
    description: "Compatible with Nespresso systems and similar brewers",
  },
  {
    title: "filter",
    description:
      "For pour over or drip methods like Aeropress, Chemex, and V60",
  },
  {
    title: "espresso",
    description:
      "Dense and finely ground beans for an intense, flavorful experience",
  },
];

const types: {
  title: Subscribe[keyof Subscribe];
  description: string;
}[] = [
  {
    title: "single origin",
    description:
      "Distinct, high quality coffee from a specific family-owned farm",
  },
  {
    title: "decaf",
    description:
      "Just like regular coffee, except the caffeine has been removed",
  },
  {
    title: "blended",
    description:
      "Combination of two or three dark roasted beans of organic coffees",
  },
];

const quantities: {
  title: Subscribe[keyof Subscribe];
  description: string;
}[] = [
  {
    title: "250g",
    description:
      "Perfect for the solo drinker. Yields about 12 delicious cups.",
  },
  {
    title: "500g",
    description:
      "Perfect option for a couple. Yields about 40 delectable cups.",
  },
  {
    title: "1000g",
    description:
      "Perfect for offices and events. Yields about 90 delightful cups.",
  },
];

const grinds: {
  title: Subscribe[keyof Subscribe];
  description: string;
}[] = [
  {
    title: "wholebean",
    description: "Best choice if you cherish the full sensory experience",
  },
  {
    title: "filter",
    description:
      "For drip or pour-over coffee methods such as V60 or Aeropress",
  },
  {
    title: "cafetiére",
    description: "Course ground beans specially suited for french press coffee",
  },
];

const deliveries: {
  title: Subscribe[keyof Subscribe];
  description: string;
}[] = [
  {
    title: "every week",
    description: "$7.20 per shipment. Includes free first-class shipping.",
  },
  {
    title: "every 2 weeks",
    description: "$9.60 per shipment. Includes free priority shipping.",
  },
  {
    title: "every month",
    description: "$12.00 per shipment. Includes free priority shipping.",
  },
];

const SubscribeForm: React.FC<PropsType> = ({
  plan,
  updatePlan,
  showModal,
}) => {
  const summery = useSummery(plan, "white");
  const disabledBtn =
    plan.preferences === "capsule"
      ? plan.deliveries && plan.preferences && plan.quantity && plan.type
      : plan.deliveries &&
        plan.preferences &&
        plan.quantity &&
        plan.type &&
        plan.grind;

  const opacity = plan.preferences === "capsule" ? "opacity-25" : "opacity-100";

  return (
    <div
      className="mt-[120px] w-full xl:mt-40 xl:flex items-start xl:px-20 xl:gap-x-24 2xl:gap-x-[125px]"
      id="plan"
    >
      <div className="hidden xl:flex xl:flex-col xl:gap-y-6 w-[255px]">
        <a
          href="#preferences"
          className="fraunces font-black text-2xl no-underline"
        >
          <span className="text-hulk mr-7">01</span>Preferences
        </a>
        <div className="w-full h-[1px] bg-gray opacity-25"></div>
        <a href="#type" className="fraunces font-black text-2xl no-underline">
          <span className="text-hulk mr-7">02</span>Bean Type
        </a>
        <div className="w-full h-[1px] bg-gray opacity-25"></div>
        <a
          href="#quantity"
          className="fraunces font-black text-2xl no-underline"
        >
          <span className="text-hulk mr-7">03</span>Quantity
        </a>
        <div className="w-full h-[1px] bg-gray opacity-25"></div>
        <a
          href={plan.preferences === "capsule" ? "#plan" : "#grind"}
          className={"fraunces font-black text-2xl no-underline " + opacity}
        >
          <span className="text-hulk mr-7">04</span>Grind Option
        </a>
        <div className="w-full h-[1px] bg-gray opacity-25"></div>
        <a
          href="#deliveries"
          className="fraunces font-black text-2xl no-underline"
        >
          <span className="text-hulk mr-7">05</span>Deliveries
        </a>
      </div>
      <div className="w-full flex flex-col items-center xl:w-[730px]">
        <div className="w-full flex flex-col gap-y-[110px]">
          <Question
            plan={plan}
            updatePlan={updatePlan}
            property="preferences"
            question="How do you drink your coffee?"
            buttons={preferences}
            disabled={false}
          />
          <Question
            plan={plan}
            updatePlan={updatePlan}
            property="type"
            question="What type of coffee?"
            buttons={types}
            disabled={false}
          />
          <Question
            plan={plan}
            updatePlan={updatePlan}
            property="quantity"
            question="How much would you like?"
            buttons={quantities}
            disabled={false}
          />
          <Question
            plan={plan}
            updatePlan={updatePlan}
            property="grind"
            question="Want us to grind them?"
            buttons={grinds}
            disabled={plan.preferences === "capsule"}
          />
          <Question
            plan={plan}
            updatePlan={updatePlan}
            property="deliveries"
            question="How often should we deliver?"
            buttons={deliveries}
            disabled={false}
          />
        </div>
        <div className="w-full bg-footerBg rounded-[10px] py-8 px-6 mt-[120px] md:mt-[144px] md:py-7 md:px-11">
          <h2 className="barlow font-normal text-base text-white opacity-50 uppercase">
            Order Summary
          </h2>
          {summery}
        </div>
        <button
          className="no-underline fraunces font-black text-lg leading-[25px] text-light px-8 py-4 rounded-md bg-hulk mt-10 disabled:opacity-50 xl:ml-auto"
          disabled={!disabledBtn}
          onClick={showModal}
        >
          Create your plan!
        </button>
      </div>
    </div>
  );
};

export default SubscribeForm;
