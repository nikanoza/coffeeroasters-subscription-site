import { Subscribe } from "../../types";

type PropsType = {
  title: Subscribe[keyof Subscribe];
  description: string;
  onClick: () => void;
  active: boolean;
};

const Button: React.FC<PropsType> = ({
  title,
  description,
  onClick,
  active,
}) => {
  const bg = active ? "bg-hulk" : "bg-[#F4F1EB]";
  const color = active ? "text-white" : "text-darkBlue";

  return (
    <button
      className={
        "w-full p-6 rounded-lg outline-none border-none flex flex-col items-start " +
        bg
      }
      onClick={() => onClick()}
    >
      <h2 className={"fraunces font-black capitalize text-2xl " + color}>
        {title}
      </h2>
      <p className={"mt-2 barlow font-normal text-base text-left " + color}>
        {description}
      </p>
    </button>
  );
};

export default Button;
