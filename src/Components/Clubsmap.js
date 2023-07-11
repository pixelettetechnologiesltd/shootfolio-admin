import React from "react";
import "../Assets/Css/Clubsmap.css";
import { images } from "../Components/Images";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
const clubs = [
  {
    name: "MI Club",
    img: images.clubone,
    btn: "View Portfolio",
  },
  {
    name: "PFC Club",
    img: images.clubtwo,
    btn: "View Portfolio",
  },
  {
    name: "GPJ Club",
    img: images.clubthree,
    btn: "View Portfolio",
  },
  {
    name: "MI Club",
    img: images.clubone,
    btn: "View Portfolio",
  },
  {
    name: "GPJ Club",
    img: images.clubthree,
    btn: "View Portfolio",
  },
  {
    name: "PFC Club",
    img: images.clubtwo,
    btn: "View Portfolio",
  },
  {
    name: "MI Club",
    img: images.clubone,
    btn: "View Portfolio",
  },
  {
    name: "PFC Club",
    img: images.clubtwo,
    btn: "View Portfolio",
  },
  {
    name: "GPJ Club",
    img: images.clubthree,
    btn: "View Portfolio",
  },
  {
    name: "MI Club",
    img: images.clubone,
    btn: "View Portfolio",
  },
  {
    name: "GPJ Club",
    img: images.clubthree,
    btn: "View Portfolio",
  },
  {
    name: "PFC Club",
    img: images.clubtwo,
    btn: "View Portfolio",
  },
];

export const Clubsmap = ({ clubData }) => {
  return (
    <div style={{ margin: "0px 1%" }} className="maketheinrowmain">
      {clubData.map((item, ind) => (
        <Link
          className="clubmapremoveunderline"
          to="/Dashboard/game/editclub"
          key={ind}
        >
          <div className="clubcardbg">
            <p className="clubname">{item.title && item.title}</p>
            <Image
              crossOrigin="true"
              src={item.logo && item.logo}
              width="80%"
            />
            <Link to={`/dashboard/game/viewportfolio/${item.id}`}>
              <Button className="clubaddbutton">View Portfolio</Button>
            </Link>
          </div>
        </Link>
      ))}
    </div>
  );
};
