import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="flex min-h-[100vh] items-center justify-center">
      <div className="flex flex-col items-center justify-center font-primary text-center space-y-6 border-4 border-primary rounded-lg p-8 bg-[rgb(34,40,47)]">
        <h1 className="text-white text-[24px] md:text-[32px]">
          I am a<span className="text-[rgb(0,255,245)]"> MERN Stack </span>
          developer.
        </h1>

        <p className="text-white mt-4">
          Speciality:{" "}
          <span className="text-[rgb(0,255,245)] font-secondary">
            {" "}
            Web Developer
          </span>
        </p>
        <p className="text-white mt-4">
          Skills:{" "}
          <span className="text-[rgb(0,255,245)] font-secondary">
            HTML, CSS, JavaScript, Node.js, Express, MongoDB, React.
          </span>
        </p>
        <p className="text-white mt-4">
          Address:{" "}
          <span className="text-[rgb(0,255,245)] font-secondary">
            {" "}
            Pakistan, Karachi
          </span>
        </p>
        <p className="text-white mt-4">
          Phone:{" "}
          <span className="text-[rgb(0,255,245)] font-secondary">
            03252208246
          </span>
        </p>
        <p className="text-white mt-4">
          Email:{" "}
          <span className="text-[rgb(0,255,245)] font-secondary">
            huzaifaaamir454@gmail.com
          </span>
        </p>
        <div className="flex space-x-4 mt-6">
          <Link
            to="service"
            smooth={true}
            duration={500}
            className="cursor-pointer border-2 border-primary hover:text-primary transition-colors duration-300 bg-black text-white font-secondary font-bold py-2 px-4 md:px-6 rounded-lg hover:shadow-xl transition-all duration-300"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
