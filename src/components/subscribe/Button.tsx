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
  return (
    <button
      className={
        "w-full p-6 rounded-lg outline-none border-none " + active
          ? "bg-hulk"
          : "bg-[#F4F1EB]"
      }
      onClick={() => onClick()}
    >
      <h2
        className={
          "fraunces font-black capitalize text-2xl " + active
            ? "text-white"
            : "text-darkBlue"
        }
      >
        {title}
      </h2>
      <p
        className={
          "mt-2 barlow font-normal text-base " + active
            ? "text-white"
            : "text-darkBlue"
        }
      >
        {description}
      </p>
    </button>
  );
};

export default Button;
