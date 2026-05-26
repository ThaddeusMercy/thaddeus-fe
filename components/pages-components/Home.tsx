import AboutInfo from "../Others/AboutInfo";
import HomeFooter from "../Others/HomeFooter";
import WhatYouFindHere from "../Others/WhatYouFindHere";

const HomeComponent = () => {
  return (
    <div className="space-y-20 font-sans not-italic">
      <AboutInfo />
      <WhatYouFindHere />
      <HomeFooter />
    </div>
  );
};

export default HomeComponent;
