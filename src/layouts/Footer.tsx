import { Link } from "react-router-dom";
import { Github, Linkedin, Logo } from "../svg";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center bg-footerBg pb-14 xl:flex-row xl:py-[47px] xl:px-20">
      <div className="mt-14 xl:mt-0">
        <Logo color="#FEFCF7" />
      </div>
      <ul className="list-none flex flex-col gap-y-6 mt-12 items-center md:mt-8 md:flex-row md:gap-x-8 xl:mt-0 xl:ml-24">
        <Link
          to="/home"
          className="no-underline text-gray font-bold text-xs barlow uppercase"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="no-underline text-gray font-bold text-xs barlow uppercase"
        >
          About us
        </Link>
        <Link
          to="/subscribe"
          className="no-underline text-gray font-bold text-xs barlow uppercase"
        >
          Create Your Plan
        </Link>
      </ul>
      <ul className="list-none flex gap-x-6 items-center mt-12 xl:mt-0 xl:ml-auto">
        <a href="https://github.com/nikanoza" target="_blank">
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/nika-nozadze-67b62a210/"
          target="_blank"
        >
          <Linkedin />
        </a>
      </ul>
    </div>
  );
};

export default Footer;
