import { useState } from "react";
import { Link } from "react-router-dom";
import { Hamburger, Logo, Close } from "../svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="fixed z-50 w-full h-[90px] left-0 top-0 px-6 flex justify-between items-center bg-white md:px-10 md:h-[119px] xl:px-20">
      <Logo color="#333D4B" />
      {showMenu ? (
        <div className="fixed left-0 top-[90px] w-screen px-6 h-screen bg-menu-back flex flex-col items-center">
          <div className="fixed right-6 top-10">
            <Close onClick={() => setShowMenu(false)} />
          </div>
          <ul className="list-none flex flex-col gap-y-8 mt-10 items-center">
            <Link
              to="/home"
              className="no-underline text-darkBlue font-black text-2xl fraunces"
              onClick={() => setShowMenu(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="no-underline text-darkBlue font-black text-2xl fraunces"
              onClick={() => setShowMenu(false)}
            >
              About us
            </Link>
            <Link
              to="/subscribe"
              className="no-underline text-darkBlue font-black text-2xl fraunces"
              onClick={() => setShowMenu(false)}
            >
              Create Your Plan
            </Link>
          </ul>
        </div>
      ) : (
        <Hamburger onClick={() => setShowMenu(true)} />
      )}
      <ul className="list-none gap-x-8 items-center hidden md:flex">
        <Link
          to="/home"
          className="no-underline text-gray font-bold text-xs uppercase barlow"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="no-underline text-gray font-bold text-xs uppercase barlow"
          onClick={() => setShowMenu(false)}
        >
          About us
        </Link>
        <Link
          to="/subscribe"
          className="no-underline text-gray font-bold text-xs uppercase barlow"
          onClick={() => setShowMenu(false)}
        >
          Create Your Plan
        </Link>
      </ul>
    </div>
  );
};

export default Header;
