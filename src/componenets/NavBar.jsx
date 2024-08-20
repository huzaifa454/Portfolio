import { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="sticky top-0  z-10 ">
      <div className=" bg-black h-[6vh] text-white p-[10px] flex justify-between items-center text-[30px] font-primary">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-white hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            <h1 className="text-white text-2xl hover:text-primary transition-colors duration-300 cursor-pointer">
              Developer<span className="text-primary"> H.</span>
            </h1>
          </Link>
        </div>

        <div className="flex gap-10  items-center">
          <div className="hidden sm:flex  gap-6 text-[20px] text-hover:text-primary">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="service"
              smooth={true}
              duration={500}
              className="hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              Service
            </Link>
            <Link
              to="Projects"
              smooth={true}
              duration={500}
              className="hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              Projects
            </Link>
          </div>

          <div className="sm:hidden">
            <HamburgerMenu
              isOpen={isOpen}
              menuClicked={handleToggle}
              width={18}
              height={15}
              strokeWidth={2}
              rotate={0}
              color="white"
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className=" sticky top-8 flex flex-col items-center bg-black text-white text-[20px] font-primary sm:hidden">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-primary transition-colors duration-300 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-primary transition-colors duration-300 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="service"
            smooth={true}
            duration={500}
            className="hover:text-primary transition-colors duration-300 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Service
          </Link>
          <Link
            to="Projects"
            smooth={true}
            duration={500}
            className="hover:text-primary transition-colors duration-300 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
