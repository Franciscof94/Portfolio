import Line from "./Line";

const Home = () => {
  return (
    <div className="px-6 md:px-0">
      <div className="text-center md:max-w-5xl mt-2">
        <div className="flex flex-col items-start ">
          <h2 className="text-5xl md:text-8xl font-bold text-blue-500 font-sans">
            Hola! Soy
          </h2>
          <h1 className="text-[82px] md:text-[240px] leading-[0.9] font-bold text-[#c9c9c9]">
            Francisco
          </h1>
        </div>
        <div className="text-end">
          <h2 className="text-[45px] md:text-8xl font-bold text-blue-500">
            Web Dev.
          </h2>
        </div>
      </div>
      <Line />
    </div>
  );
};

export default Home;
