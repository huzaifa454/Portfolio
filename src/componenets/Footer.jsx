import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 w-full text-center mt-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
                    <ScrollLink to="home" smooth={true} duration={500} className="hover:text-primary transition-colors duration-300 cursor-pointer"> Home </ScrollLink> <ScrollLink to="about" smooth={true} duration={500} className="hover:text-primary transition-colors duration-300 cursor-pointer"> About </ScrollLink> <ScrollLink to="service" smooth={true} duration={500} className="hover:text-primary transition-colors duration-300 cursor-pointer"> Services </ScrollLink> </div> <div className="text-center md:text-right mt-4 md:mt-0"> <p className="text-sm">© 2024 Company Name. All rights reserved.</p> </div> </div> </footer>
    )
}

export default Footer