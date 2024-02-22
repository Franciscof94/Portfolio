import AboutMe from "./AboutMe";
import Home from "./Home";
import { APortfolio } from "./APortfolio";

const Container = () => {
  return (
    <div className="bg-[#fffce64f]">
      <Home />
      <AboutMe />
      <APortfolio />
      {/*   <ContactMe /> */}
    </div>
  );
};

export default Container;
