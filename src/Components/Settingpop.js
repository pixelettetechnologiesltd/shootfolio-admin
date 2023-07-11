import React from 'react'
import {Button} from "react-bootstrap"
import "../Assets/Css/Settingpop.css"
import { AiOutlineClose } from "react-icons/ai";
const Settingpop = (props) => {
  return (props.trigger)? (
    <div className='popup'>
        <div className='popup-inner'>
            <Button className="closebtn" onClick={()=> props.setTrigger(false)}>
                <AiOutlineClose/>
            </Button>
            {props.children}
        </div>
    </div>
  ):"";
}

export default Settingpop