import AboutInfo from "../Others/AboutInfo";
import HomeFooter from "../Others/HomeFooter";
import LaunchBanner from "../Others/LaunchBanner";
import WhatYouFindHere from "../Others/WhatYouFindHere";

const HomeComponent = () => {
  return (
    <div className="space-y-20 font-sans not-italic">
      <div className="space-y-10">
        <LaunchBanner />
        <AboutInfo />
      </div>
      <WhatYouFindHere />
      <HomeFooter />
    </div>
  );
};

export default HomeComponent;
