import { useGlobalContext } from "Context/Contenxt";
import React from "react";
import phoneimg from '../../images/phone.svg'


const HeroComponent = () => {
  const {closeSubmenu} = useGlobalContext();

  return <section className="hero"> 
  
  <div className="hero-center">
  <article className="hero-info">
    <h1>Financial infrastructure for the internet</h1>
    <p>
      Millions of businesses of all sizes – from startups to Fortune 500s – use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online.
    </p>
    <button className=" btn ">Start Now</button>
  </article>
    <article className="hero-image">
        <img src={phoneimg} className='phone-img' alt="Phone" />
        </article></div></section>;
};

export default HeroComponent;
