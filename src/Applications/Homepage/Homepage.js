

import React from "react";
import NavigationHeader from "../../Components/NavigationComponents/NavigationHeader";
import Calculator from "../Calculator/Calculator";


const Homepage = () => {
  return (
    <main>
      <NavigationHeader/>
      {/* <CustomNavigationDesign></CustomNavigationDesign> */}
      {/* <Sidebar></Sidebar> */}
     {/* <StripMenu></StripMenu> */}
     {/* <MultistepForm></MultistepForm> */}
    <Calculator></Calculator>
    </main>
  );
};

export default Homepage;
