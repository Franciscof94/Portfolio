import data from "../data/data";
import Line from "./Line";

export const APortfolio = () => {
  return (
    <div className="px-6 md:px-0 max-w-[1500px] m-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-4">
        Portafolio
      </h1>
      <h3 className="text-xl md:text-3xl font-bold text-center text-gray-800 mb-16">
        Mis <span className="text-blue-500">proyectos</span>
      </h3>
      <div className="flex flex-wrap justify-center gap-8">
           {data.map((img) => (
          <div key={img.id} className="max-w-md w-full">
            <a
              href={img.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-md shadow-md overflow-hidden"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  {img.title}
                </h2>
                <p className="text-sm text-center text-gray-600">{img.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      <Line />
    </div>
  );
};
