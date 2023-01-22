import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Steps, SubscribeForm } from "../../components";
import { useSummery } from "../../hooks";
import { Subscribe } from "../../types";
import { stepsData } from "../Home/helpers";

const initialState: Subscribe = {
  preferences: null,
  type: null,
  quantity: null,
  grind: null,
  deliveries: null,
};

const SubscribePage = () => {
  const [plan, setPlan] = useState<Subscribe>(initialState);
  const [showModal, setShowModal] = useState<boolean>(false);

  const backdrop = useRef<HTMLDivElement | null>(null);

  const closeModal: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === backdrop.current) {
      setShowModal(false);
    }
  };

  const updatePlan = (
    property: keyof Subscribe,
    value: Subscribe[keyof Subscribe]
  ) => {
    if (property === "preferences" && value === "capsule") {
      setPlan((state: Subscribe) => {
        return { ...state, [property]: value, grind: null };
      });
    } else {
      setPlan((state: Subscribe) => {
        return { ...state, [property]: value };
      });
    }
  };

  const summery = useSummery(plan, "gray");
  const navigate = useNavigate();

  return (
    <div className="w-full mt-[90px] px-6 md:mt-[119px] md:px-10 xl:px-20">
      <div className="w-full h-[500px] subscribe-poster-mobile rounded-[10px] bg-no-repeat bg-center bg-cover px-6 flex flex-col items-center justify-center md:items-start md:h-[400px] md:px-14 md:subscribe-poster-tablet xl:subscribe-poster-desktop">
        <h1 className="fraunces font-black text-[40px] leading-[40px] text-light xl:text-[72px] xl:leading-[72px]">
          Create a plan
        </h1>
        <p className="mt-6 barlow font-normal text-[15px] leading-[25px] text-light opacity-80 text-center md:w-96 md:text-left xl:text-base xl:w-[445px] xl:leading-[26px]">
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </div>
      <div className="w-full mt-32 bg-footerBg rounded-[10px] p-2 pb-20 lg:px-6 xl:mt-40 xl:pt-24 xl:px-20">
        <Steps items={stepsData} notHome={true} />
      </div>
      <SubscribeForm
        plan={plan}
        updatePlan={updatePlan}
        showModal={() => setShowModal(true)}
      />
      {showModal ? (
        <div
          className="fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-6 md:px-28"
          ref={backdrop}
          onClick={closeModal}
        >
          <div className="w-full rounded-lg bg-light">
            <div className="w-full h-[88px] bg-darkBlue rounded-t-lg fraunces font-black text-3xl text-white flex items-center p-6 mb-10 md:px-14 md:text-[40px] md:leading-[48px] md:h-[136px] md:mb-6">
              Order Summary
            </div>
            <div className="w-full px-6 md:px-14">{summery}</div>
            <p className="barlow font-normal text-[15px] leading-[25px] text-darkBlue opacity-80 px-6 md:px-14 md:text-base md:mt-2">
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.
            </p>
            <div className="mt-10 mx-6 mb-6 w-full flex justify-center -ml-6 items-center md:gap-x-3 md:mb-14">
              <p className="fraunces font-black text-[32px] leading-[36px] hidden md:block text-darkBlue">
                $14.00 / mo
              </p>
              <button
                className="fraunces font-black text-lg leading-[25px] text-light px-8 py-4 rounded-md bg-hulk md:px-14 "
                onClick={() => navigate("/home")}
              >
                <p className="md:hidden">Checkout - $14.00 / mo</p>
                <p className="hidden md:block">Checkout</p>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SubscribePage;
