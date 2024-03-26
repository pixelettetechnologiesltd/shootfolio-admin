import React from 'react';
import '../Assets/Css/Leaguemap.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateGameLeague } from '../storeRedux/actions';

const Leaguemap = ({ league }) => {
  // const league = useSelector((state) => state.gameLeagueReducer.gameLeague);

  const dispatch = useDispatch();
  const handleDisable = (id, currentStatus) => {
    console.log('Toggle disable action for league with id:', id);
    // Toggle the status
    let finalResult = {
      status: !currentStatus,
    };
    dispatch(UpdateGameLeague(finalResult, id));
  };

  console.log('status', league);
  return (
    <div style={{ margin: '0px 1%' }} className="makeinrowleaague mt-5">
      {league.map((item, ind) => (
        <div
          className={`leaguecardbg ${!item.status ? 'blurEffect' : ''}`}
          key={ind}
        >
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
            <button
              className="addleaguebutton disableButton"
              onClick={() => handleDisable(item.id, item.status)}
            >
              {item.status ? 'Disable' : 'Enable'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leaguemap;
