import React from 'react'
import "../Assets/Css/Footer.css"
import { Container, Row, Col, Image} from "react-bootstrap";
import { images } from "../Components/Images";
const Footer = () => {
  return (
    <div className='footerbgblack'>
        <Container>
            <Row>
                <Col md={6}>
                    <p className='footerlogo'>Shootfolio</p>
                    <p className='footercontacthead'>CONTACT</p>
                    <p className='footeremail'>shootfolio@gmail.com</p>
                </Col>
                <Col md={2}>
                    <p className='footheadlist'>Navigation</p>
                    <p className='footlist mt-4'>Home</p>
                    <p className='footlist'>about</p>
                    <p className='footlist'>Faqs</p>
                    <p className='footlist'>Termsof Service</p>
                </Col>
                <Col md={2}>
                    <p className='footheadlist'>Resources</p>
                    <p className='footlist mt-4'>Blog</p>
                    <p className='footlist'>Product Updates</p>
                </Col>
                <Col md={2}>
                    <p className='footheadlist'>Stay up to date</p>
                    <p className='footlist mt-4'>Stay Informed On How You Can Make a Difference</p>
                    <div className='socialfootspacebetween'>
                        <Image className='mblwidthicon' src={images.footone} width="20%"/>
                        <Image className='mblwidthicon' src={images.foottwo} width="20%"/>
                        <Image className='mblwidthicon' src={images.footthree} width="20%"/>
                        <Image className='mblwidthicon' src={images.footfour} width="20%"/>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container>
        <Row className='bodertop mt-5'>
                <p className='copywrite'>© 2023 All Rights Reserved -  Pixelette Technologies</p>
            </Row>
        </Container>
    </div>
  )
}

export default Footer