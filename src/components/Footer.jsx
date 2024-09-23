import React from "react";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
// import logo1 from "../assets/img/mdkrtf-putih.png";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { Container, Row, Col, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-white py-4">
      <Container>
        <Row className="justify-content-between align-items-center" style={{fontFamily: "'League Spartan', sans-serif"}}>
          <Col md={6} className="py-4">
            {/* <img src={logo1} className="w-25" alt="MDKRTF Logo" /> */}
            <h2>MakananKu</h2>
            <div className="mt-3">
              <div className="mb-2">
                Your Alamat in here
              </div>
              <div className="d-flex align-items-center mb-2">
                <MdLocalPhone className="me-2" />
                <a href="" className="text-white text-decoration-none">Nomor telepon</a>
              </div>
              <div className="d-flex align-items-center">
                <MdEmail className="me-2" />
                <a href="mailto:contact@mdkrtf.co.id" className="text-white text-decoration-none">Email kontak</a>
              </div>
            </div>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Nav className="justify-content-center justify-content-md-end mb-3">
              <Nav.Link href="https://www.facebook.com/profile.php?id=61560241922493&mibextid=LQQJ4d" className="text-white fs-3 me-1">
                <FaFacebook />
              </Nav.Link>
              <Nav.Link href="https://www.tiktok.com/@mdkrtf?_t=8oRlNGM2nNY&_r=1" className="text-white fs-3 me-1">
                <FaTiktok />
              </Nav.Link>
              <Nav.Link href="https://instagram.com/mdkrtf" className="text-white fs-3 me-1">
                <FaSquareInstagram />
              </Nav.Link>
              <Nav.Link href="https://api.whatsapp.com/send?phone=6281211118457" className="text-white fs-3">
                <IoLogoWhatsapp />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="mb-0">© 2024 PT Makanan Indonesia &middot; All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
