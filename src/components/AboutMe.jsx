import PropTypes from "prop-types";

import {
  Bootstrap,
  Javascript,
  MaterialUi,
  NestJS,
  NextJs,
  ProfileImage,
  ReactJs,
  Redux,
  Sass,
  Tailwind,
  Typescript,
  VueJs,
} from "../Images";
import Line from "./Line";

const TechContainer = ({ image, title }) => {
  return (
    <div className="relative cursor-pointer w-20 h-20 group">
      <div className="absolute inset-0 flex items-center justify-center bg-white p-2 rounded shadow-md opacity-0 group-hover:opacity-100">
        {title}
      </div>
      <img src={image} alt={title} className="h-16" />
    </div>
  );
};

TechContainer.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

const AboutMe = () => {
  const techStack = [
    { title: "React Js", image: ReactJs },
    { title: "Next js", image: NextJs },
    { title: "Typescript", image: Typescript },
    { title: "NestJs", image: NestJS },
    { title: "Redux", image: Redux },
    { title: "Vue.js", image: VueJs },
    { title: "Sass", image: Sass },
    { title: "Bootstrap", image: Bootstrap },
    { title: "MaterialUi", image: MaterialUi },
    { title: "Tailwind", image: Tailwind },
    { title: "Javascript", image: Javascript },
  ];

  return (
    <div className="px-10 py-16">
      <h1 className="text-5xl font-bold text-center text-gray-800">
        Sobre <span className="text-blue-500">mí</span>
      </h1>
      <div className="flex flex-col lg:flex-row mt-12 max-w-[1600px]">
        <div className="flex flex-col items-center w-full lg:w-[45%]">
          <img
            src={ProfileImage}
            alt="ProfileImage"
            className="h-80 w-80 lg:h-96 lg:w-96 rounded-full"
          />
          <h5 className="text-3xl text-gray-800 mt-4 font-medium">Francisco</h5>
        </div>
        <div className="flex flex-col mt-8 lg:mt-0 w-full text-center lg:text-start lg:w-[55%]">
          <div>
            {" "}
            <p className=" text-gray-800 text-3xl font-light">
              Desarrollador{" "}
              <span className="text-blue-500 font-medium">Front-end</span> con
              mas de dos años y medio de experiencia trabajando con React JS,
              Next js, Typescript, Tailwind, Nest js y demas tecnologias. <br />
              <br />
              Soy apasionado por explorar nuevas herramientas y frameworks que
              mejoren la eficiencia y la calidad de mis proyectos. Mi enfoque en
              el <span className="text-blue-500 font-medium">
                aprendizaje
              </span>{" "}
              continuo me ha permitido mantenerme al día con las últimas
              tendencias en desarrollo web y{" "}
              <span className="text-blue-500 font-medium">adaptarme</span>{" "}
              rápidamente a las demandas cambiantes del mercado. <br />
              <br />
              Estoy siempre abierto a nuevos{" "}
              <span className="text-blue-500 font-medium">desafíos</span> y
              oportunidades que me permitan seguir creciendo como profesional en
              el campo del desarrollo Front-end.
            </p>
            <h3 className="text-xl md:text-3xl font-bold text-center lg:text-start text-gray-800 mt-8">
              Mis <span className="text-blue-500">habilidades</span>
            </h3>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-6 mt-8 max-w-[530px] justify-items-center">
            {techStack.map((tech) => (
              <TechContainer
                key={tech.title}
                title={tech.title}
                image={tech.image}
              />
            ))}
          </div>
        </div>
      </div>

      <Line />
    </div>
  );
};

export default AboutMe;
