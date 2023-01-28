
import Calculator from "Applications/Calculator/Calculator";
import MultistepForm from "Applications/MultiStepForm/MultistepForm";
import Sidebar from "Applications/Sidebar/Sidebar";
import StripMenu from "Applications/StripeMenu/StripMenu";
import CustomNavigationDesign from "Components/NavigationComponents/CustomNavigationDesign";
import NavigationHeader from "Components/NavigationComponents/NavigationHeader";
import React from "react";

const Homepage = () => {
  return (
    <main>
      <NavigationHeader/>
      {/* <CustomNavigationDesign></CustomNavigationDesign> */}
      {/* <Sidebar></Sidebar> */}
     {/* <StripMenu></StripMenu> */}
     {/* <MultistepForm></MultistepForm> */}
     <Calculator> </Calculator>

    </main>
  );
};

export default Homepage;
