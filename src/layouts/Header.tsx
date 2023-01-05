import { useState } from "react";
import { Hamburger, Logo } from "../svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="w-full h-[90px] flex justify-between items-center">
      <Logo />
      {showMenu ? <div></div> : <Hamburger onClick={() => setShowMenu(true)} />}
    </div>
  );
};

export default Header;
