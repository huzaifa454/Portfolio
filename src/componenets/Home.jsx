
import picture from "../assets/picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll"; 
const Home = () => {
 



  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] font-primary text-center md:pl-20 mt-0 space-y-4">
     <div className="w-72 h-72 rounded-full bg-gray-900 overflow-hidden border-4 border-primary shadow-custom">
  <img  
    src={picture}
    alt="image"
    className="w-full object-cover transform scale-110"
  />
</div>


      <h1 className="text-white text-[40px] md:text-[40px] leading-tight">
        <span className="text-primary">Hi,</span>
      </h1>
      <h2 className="text-white text-[50px] md:text-[32px]">
        This is
        <span className="text-primary"> Huzaifa</span>
      </h2>
      <div className="flex space-x-6 ">
        <a
          href="https://github.com/huzaifa454/Portfolio.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-white text-[24px] hover:text-primary transition-colors duration-300"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/huzaifa-aamir-0654b2262"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-white text-[24px] hover:text-primary transition-colors duration-300"
          />
        </a>
      </div>
      <p className="text-white text-[16px] p-4 md:text-[18px] max-w-[600px] leading-relaxed font-secondary">
        I specialize in MERN stack web development, creating dynamic and
        interactive web applications using the powerful combination of MongoDB,
        Express.js, React.js, and Node.js. With a passion for clean code and
        user-friendly interfaces, I bring your ideas to life on the web.
      </p>
      <div className="flex space-x-4 ">

      <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-primary transition-colors duration-300 bg-black text-white font-secondary font-bold py-2 px-4 md:px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        
          >
            Learn More
          </Link>
      </div>
      <div className="mt-4"></div>
    </div>
  );
};

export default Home;
