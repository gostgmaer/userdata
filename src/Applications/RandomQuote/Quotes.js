
import React,{useState} from "react";
import SimpleDate from "../../Components/ComponentBlock/SimpleDate";
import SimpleHeading from "../../Components/ComponentBlock/SimpleHeading";
import APicall from "./APicall";
import Show from "./Show";

const Quotes = () => {
  const title = "Random Quote Generation";
  const url = "https://quotes15.p.rapidapi.com/quotes/random/";

  const options = {
    headers: {
      "X-RapidAPI-Key": "8842f2a974msh6b0949e628a5e32p13683ejsn3912b12003ed",
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    },
    param: {},
  };

  const [value, setValue] = useState({});
  return (
    <React.Fragment>
      <SimpleHeading title={title}></SimpleHeading>
      <APicall value={value} setValue={setValue} options={options} url={url}></APicall>
      <Show value={value} setValue={setValue} options={options} url={url} ></Show>
      <SimpleDate></SimpleDate>
    </React.Fragment>
  );
};

export default Quotes;
