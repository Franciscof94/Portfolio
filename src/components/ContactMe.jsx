import { FaGithub, FaLinkedin, FaCloudDownloadAlt } from "react-icons/fa";
import CV from "../Images/FranciscoFerraro.pdf";

const ContactMe = () => {
  return (
    <div
      className="fixed bottom-[-7.8rem] left-1/2 transform -translate-x-1/2 flex flex-col gap-y-2 items-center"
      style={{ transform: "rotate(-90deg" }}
    >
      <div className="bg-[#c9c9c9] rounded-r-[30px]">
        <a
          href="https://github.com/Franciscof94"
          className="flex items-center text-white py-2 text-2xl px-4 rounded-md "
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
          <FaGithub
            className="ml-2 rounded-full p-2.5"
            style={{ backgroundColor: "white" }}
            size={65}
            color="black"
          />
        </a>
      </div>

      <div className="bg-[#c9c9c9] rounded-r-[30px]">
        <a
          href="https://www.linkedin.com/in/franciscoferraro/"
          className="flex items-center text-2xl  text-white py-2 px-4 rounded-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
          <FaLinkedin
            className="ml-2 rounded-full p-2.5"
            style={{ backgroundColor: "white" }}
            size={60}
            color="black"
          />
        </a>
      </div>
      <div className="bg-[#c9c9c9] rounded-r-[30px]">
        <a
          href={CV}
          download="FranciscoFerraro.pdf"
          className="flex items-center text-2xl  text-white py-2 px-4 rounded-md"
        >
          Curriculum
          <FaCloudDownloadAlt
            className="ml-2 rounded-full p-2.5"
            style={{ backgroundColor: "white" }}
            size={65}
            color="black"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
