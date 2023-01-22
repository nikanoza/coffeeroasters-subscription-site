import { Subscribe } from "../types";

const useSummery = (plan: Subscribe, color: string) => {
  const text = "text-" + color;
  const summery = (
    <p className={"w-full fraunces font-black text-2xl mt-8 " + text}>
      “I drink my coffee as
      {
        <span className="text-hulk capitalize">
          {plan.preferences || "_____"}
        </span>
      }
      , with a
      {<span className="text-hulk capitalize"> {plan.type || "_____"}</span>}{" "}
      type of bean.
      {
        <span className="text-hulk capitalize">
          {" "}
          {plan.quantity || "_____"}
        </span>
      }{" "}
      ground ala
      {<span className="text-hulk capitalize"> {plan.grind || "_____"}</span>},
      sent to me
      {
        <span className="text-hulk capitalize">
          {plan.deliveries || "_____"}
        </span>
      }
      .”
    </p>
  );

  const noGridSummery = (
    <p
      className={"w-full fraunces font-black text-2xl text-white mt-8 " + text}
    >
      “I drink my coffee using
      {<span className="text-hulk capitalize"> Capsules</span>}, with a
      {<span className="text-hulk capitalize"> {plan.type || "_____"}</span>}{" "}
      type of bean.
      {
        <span className="text-hulk capitalize">
          {" "}
          {plan.quantity || "_____"}
        </span>
      }
      , sent to me
      {
        <span className="text-hulk capitalize">
          {plan.deliveries || "_____"}
        </span>
      }
      .”
    </p>
  );

  return plan.preferences === "capsule" ? noGridSummery : summery;
};

export default useSummery;
