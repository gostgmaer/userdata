import Sidebar from "Applications/Sidebar/Sidebar";
import StripMenu from "Applications/StripeMenu/StripMenu";
import CustomNavigationDesign from "Components/NavigationComponents/CustomNavigationDesign";
import NavigationHeader from "Components/NavigationComponents/NavigationHeader";
import React from "react";

const Homepage = () => {
  return (
    <main>
      {/* <CustomNavigationDesign></CustomNavigationDesign> */}
      {/* <Sidebar></Sidebar> */}
     <StripMenu></StripMenu>
    </main>
  );
};

export default Homepage;
