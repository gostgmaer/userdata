import React, { useState } from 'react'
import SimpleHeading from '../../Components/ComponentBlock/SimpleHeading';
import SimpleDate from '../../Components/ComponentBlock/SimpleDate';
import Searchitem from './Searchitem';

const Shoppingcart = () => {
    const [title] = useState("Shopping Cart Application");
  return (
    <React.Fragment>
        <Searchitem></Searchitem>
      <SimpleHeading title={title}></SimpleHeading>
      <div className=" p-1 rounded-0 card text-center">
       
      </div>
      <SimpleDate></SimpleDate>
    </React.Fragment>
  )
}

export default Shoppingcart