import React from 'react';
import '../Assets/Css/Clubsmap.css';
import { images } from '../Components/Images';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  GetSingleClub,
  GetAllGameType,
  UpdateSingleClub,
  clearErrors,
  clearMessages,
} from './../storeRedux/actions';
const clubs = [
  {
    name: 'MI Club',
    img: images.clubone,
    btn: 'View Portfolio',
  },
  {
    name: 'PFC Club',
    img: images.clubtwo,
    btn: 'View Portfolio',
  },
  {
    name: 'GPJ Club',
    img: images.clubthree,
    btn: 'View Portfolio',
  },
  {
    name: 'MI Club',
    img: images.clubone,
    btn: 'View Portfolio',
  },
  {
    name: 'GPJ Club',
    img: images.clubthree,
    btn: 'View Portfolio',
  },
  {
    name: 'PFC Club',
    img: images.clubtwo,
    btn: 'View Portfolio',
  },
  {
    name: 'MI Club',
    img: images.clubone,
    btn: 'View Portfolio',
  },
  {
    name: 'PFC Club',
    img: images.clubtwo,
    btn: 'View Portfolio',
  },
  {
    name: 'GPJ Club',
    img: images.clubthree,
    btn: 'View Portfolio',
  },
  {
    name: 'MI Club',
    img: images.clubone,
    btn: 'View Portfolio',
  },
  {
    name: 'GPJ Club',
    img: images.clubthree,
    btn: 'View Portfolio',
  },
  {
    name: 'PFC Club',
    img: images.clubtwo,
    btn: 'View Portfolio',
  },
];

export const Clubsmap = ({ clubData }) => {
  const dispatch = useDispatch();
  const handleDisable = (e, planId, currentStatus) => {
    e.preventDefault(); // Prevent link navigation
    e.stopPropagation(); // Stop click event from reaching the parent link
    let body = {
      status: !currentStatus,
    };
    dispatch(UpdateSingleClub(body, planId));
    console.log('Disable plan with id: ', planId);
    // ... rest of your function
  };
  return (
    <div style={{ margin: '0px 1%' }} className="maketheinrowmain">
      {clubData.map((item, ind) => (
        <div
          className={`clubcardbg ${!item.status ? 'blurEffect' : ''}`}
          key={ind}
        >
          <Link
            className="clubmapremoveunderline"
            to={`/Dashboard/game/editclub/${item.id}`}
          >
            <p className="clubname">{item.title}</p>
            <Image src={item.logo} width="80%" />
          </Link>
          <div className="buttonContainer">
            <Link to={`/dashboard/game/viewportfolio/${item.id}`}>
              <Button className="clubaddbutton">View Portfolio</Button>
            </Link>
            <Button
              className="clubaddbutton disableButton"
              onClick={(e) => handleDisable(e, item.id, item.status)}
            >
              {item?.status ? 'Disable' : 'Enable'}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
