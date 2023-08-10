import React from "react";
import "../Assets/Css/Leaguemap.css";
import { Link } from "react-router-dom";

const Leaguemap = ({ league }) => {
  return (
    <div style={{ margin: "0px 1%" }} className="makeinrowleaague mt-5">
      {league.map((item, ind) => (
        <div className="leaguecardbg" key={ind}>
          <p className="clubname">{item.leagueTitle && item.leagueTitle}</p>
          <div className="makecatfundmeminrow mt-4">
            <p className="categorytitle">Category</p>
            <p className="categoryitself">
              {item.gameTypeId?.gameTitle && item.gameTypeId.gameTitle}
            </p>
          </div>
          <div className="makecatfundmeminrow mt-2">
            <p className="categorytitle">Funds</p>
            <p className="categoryitself">
              {item.investableBudget && item.investableBudget}
            </p>
          </div>
          {/* <div className="makecatfundmeminrow mt-2">
            <p className="categorytitle">Membership Type</p>
            <p className="categoryitself">
              {item.membership && item.membership}
            </p>
          </div> */}
          <div className="makeaddleaguebuttonstretch mt-3">
            <Link
              className="addleaguebutton"
              to={`/Dashboard/game/editleague/${item.id}`}
            >
              Edit
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leaguemap;
