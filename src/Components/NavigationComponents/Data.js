import React from "react";
import { FaFacebook } from "react-icons/fa";
import {SiAmericanexpress, SiJcb} from 'react-icons/si'
import {RiBankCard2Fill, RiMastercardFill, RiSwitchFill} from 'react-icons/ri'
const NavURL = [
  {
    id: 1,
    text: "mastercard",
    url: "https://sbwire.com",
    icon: "https://robohash.org/pariatureaesse.png?size=50x50&set=set1",
  },
  {
    id: 2,
    text: "jcb",
    url: "https://arstechnica.com",
    icon: "https://robohash.org/eligendiremet.png?size=50x50&set=set1",
  },
  {
    id: 3,
    text: "mastercard",
    url: "http://eepurl.com",
    icon: "https://robohash.org/quiatotamasperiores.png?size=50x50&set=set1",
  },
  {
    id: 4,
    text: "maestro",
    url: "http://bloglovin.com",
    icon: "https://robohash.org/beataeimpeditfugit.png?size=50x50&set=set1",
  },
  {
    id: 5,
    text: "solo",
    url: "http://globo.com",
    icon: "https://robohash.org/ipsumvoluptatemquis.png?size=50x50&set=set1",
  },
  {
    id: 6,
    text: "americanexpress",
    url: "https://cam.ac.uk",
    icon: "https://robohash.org/nobispariaturid.png?size=50x50&set=set1",
  },
  {
    id: 7,
    text: "jcb",
    url: "https://nationalgeographic.com",
    icon: "https://robohash.org/reiciendisimpeditsint.png?size=50x50&set=set1",
  }
];
const socialURL =[ {
    "id": 3,
    "text": "americanexpress",
    "url": "http://rambler.ru",
    "icon": <SiAmericanexpress></SiAmericanexpress>
  },  {
    "id": 10,
    "text": "bankcard",
    "url": "http://time.com",
    "icon": <RiBankCard2Fill></RiBankCard2Fill>
  },  {
    "id": 12,
    "text": "switch",
    "url": "https://joomla.org",
    "icon": <RiSwitchFill></RiSwitchFill>
  }, {
    "id": 17,
    "text": "mastercard",
    "url": "http://wix.com",
    "icon": <RiMastercardFill></RiMastercardFill>
  }, {
    "id": 18,
    "text": "jcb",
    "url": "https://twitpic.com",
    "icon":<SiJcb></SiJcb>
  }]
export { NavURL,socialURL };
