import { Coffee } from "../../types";
import CoffeeItem from "./CoffeeItem";

const Collection: React.FC<{ items: Coffee[] }> = (props) => {
  return (
    <div className="w-full flex flex-col items-center mt-[120px]">
      <div className="w-full h-[72px] relative">
        <div className="absolute w-full h-full top-0 left-0 bg-text-gradient"></div>
        <h2 className="fraunces font-black text-[40px] leading-[72px] text-center text-gray">
          our collection
        </h2>
      </div>
      <ul className="list-none flex flex-col items-center mt-3 gap-y-12">
        {props.items.map((coffee) => {
          return (
            <CoffeeItem
              key={coffee.title}
              image={coffee.image}
              title={coffee.title}
              description={coffee.description}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Collection;
