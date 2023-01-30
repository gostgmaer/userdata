

import React from "react";
import { ProjectList } from "../../Assets/Mock/ProjectLists";
import NavigationHeader from "../../Components/NavigationComponents/NavigationHeader";
import HomeList from "./HomeList";
import './home.scss'


const Homepage = () => {
  return (
    <main>
      <NavigationHeader/>
        <div className="container">
          <ul className="UL">{ProjectList.map(item=><HomeList key={item.id} item={item} />)}</ul>
        </div>
    </main>
  );
};

export default Homepage;
