import { CardType, Coffee } from "../../types";
import Card from "./Card";

const Cards: React.FC<{ items: CardType[] }> = (props) => {
  return (
    <div className="mt-[120px] w-full cardsBackground flex flex-col items-center px-6 md:px-10 md:cards-background-tablet xl:px-20 xl:card-background-desktop">
      <h2 className="fraunces font-black text-[28px] leading-[28px] text-light mt-16 md:text-[32px] md:leading-[48px]">
        Why choose us?
      </h2>
      <p className="barlow text-[15px] leading-[25px] font-normal text-light opacity-80 mt-6 text-center md:w-[540px]">
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working closely with the best coffee
        growers to give you a more impactful experience on every level.
      </p>
      <ul className="list-none flex flex-col items-center mt-16 gap-y-6 w-full xl:mt-[86px] xl:flex-row xl:justify-center xl:gap-x-8">
        {props.items.map((card) => {
          return (
            <Card
              key={card.title}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Cards;
