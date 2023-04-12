import React from "react";
import { ProjectList } from "../../Assets/Mock/ProjectLists";
import NavigationHeader from "../../Components/NavigationComponents/NavigationHeader";
import HomeList from "./HomeList";
import "./home.scss";
import SearchFilter from "../SearchFilter/SearchFilter";

const Homepage = () => {
  return (
    <main>
      <SearchFilter />
    </main>
  );
};

export default Homepage;
