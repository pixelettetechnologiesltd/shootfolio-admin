import React, { useEffect } from "react";
import "../Assets/Css/Leaguemap.css";
import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   GetAllGameLeague,
//   clearErrors,
//   clearMessages,
// } from "./../storeRedux/actions";
// import { Puff } from "react-loader-spinner";

const leagues = [
  {
    name: "Crypto Amateur Learners League",
    categorytitle: "Category",
    category: "Ameture",
    fundstitle: "Funds",
    funds: "$10,000",
    membership: "Membership Type",
    memtype: "Free",
    btn: "Edit",
  },
  {
    name: "Crypto Super League ",
    categorytitle: "Category",
    category: "Ameture",
    fundstitle: "Funds",
    funds: "$10,000",
    membership: "Membership Type",
    memtype: "Subscription",
    btn: "Edit",
  },
  {
    name: "Crypto Expert League ",
    categorytitle: "Category",
    category: "Ameture",
    fundstitle: "Funds",
    funds: "$10,000",
    membership: "Membership Type",
    memtype: "Free",
    btn: "Edit",
  },
];

const Leaguemap = ({ league }) => {
  return (
    <div style={{ margin: "0px 1%" }} className="makeinrowleaague mt-5">
      {league.map((item, ind) => (
        <div className="leaguecardbg" key={ind}>
          <p className="clubname">{item.leagueTitle && item.leagueTitle}</p>
          <div className="makecatfundmeminrow mt-4">
            <p className="categorytitle">Category</p>
            <p className="categoryitself">
              {item.gameModeId?.gameType?.gameTitle &&
                item.gameModeId.gameType.gameTitle}
            </p>
          </div>
          <div className="makecatfundmeminrow mt-2">
            <p className="categorytitle">Funds</p>
            <p className="categoryitself">
              {item.investableBudget && item.investableBudget}
            </p>
          </div>
          <div className="makecatfundmeminrow mt-2">
            <p className="categorytitle">Membership Type</p>
            <p className="categoryitself">
              {item.membership && item.membership}
            </p>
          </div>
          <div className="makeaddleaguebuttonstretch mt-3">
            <Link className="addleaguebutton" to="/Dashboard/game/editleague">
              Edit
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leaguemap;
