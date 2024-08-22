import { Link as ScrollLink } from 'react-scroll';
import car from "../assets/carproject.png";
import pro2 from "../assets/project2.png";
import pro3 from "../assets/project3.png";

const Projects = () => {
  return (
    <div className="flex flex-col  min-h-[60vh] bg-black text-white font-primary">
      <div className="">
        <div className="flex flex-col items-center text-center md:pl-20 mt-0 space-y-4">
          <h1 className="text-[30px] mt-8">Projects</h1>
          <div className="flex flex-col sm:flex-row sm:space-x-4 sm:mt-8 space-y-4 sm:space-y-0 justify-start">
            <div className="flex flex-col w-[350px] h-[250px] border-2 border-primary rounded-lg p-4 bg-[rgb(34,40,47)] transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img src={car} alt="Car Project" className="w-full h-[200px] object-cover rounded-md mb-4 transition-transform duration-300 ease-in-out hover:scale-110" />
            </div>
            <div className="flex flex-col w-[350px] h-[250px] border-2 border-primary rounded-lg p-4 bg-[rgb(34,40,47)] transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img src={pro2} alt="Project 2" className="w-full h-[200px] object-cover rounded-md mb-4 transition-transform duration-300 ease-in-out hover:scale-110" />
            </div>
            <div className="flex flex-col w-[350px] h-[250px] border-2 border-primary rounded-lg p-4 bg-[rgb(34,40,47)] transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img src={pro3} alt="Project 3" className="w-full h-[200px] object-cover rounded-md mb-4 transition-transform duration-300 ease-in-out hover:scale-110" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Projects;
