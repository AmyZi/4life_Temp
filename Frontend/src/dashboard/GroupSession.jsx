import React from 'react';
import '../App.css';
import logoImage from '../assets/4life.svg';
import { Container, Row, Col, Button, Nav, Form, InputGroup } from 'react-bootstrap';
import { FaUserCircle, FaMicrophone, FaVideo, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const GroupSession = () => {
  return (
    <Container fluid className="vh-100 d-flex flex-column">
      {/* Header */}
      <Row className="bg-light p-3 shadow-sm">
        <Col xs={6}>
          <img src={logoImage} alt="Logo" className="logo" />
        </Col>
        <Col xs={6} className="d-flex justify-content-end align-items-center">
          <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/settings">Settings</Nav.Link>
          </Nav>
          <FaUserCircle size={32} className="ml-3" />
        </Col>
      </Row>

      {/* Main Content */}
      <Row className="flex-grow-1">
        <Col xs={2} className="bg-light p-3 border-right">
          <h5>Participants</h5>
          <ul className="list-unstyled">
            <li><FaUserCircle size={24} /> Mr Abdulllateef (Mentor)</li>
            <li><FaUserCircle size={24} /> Amina Idris</li>
            <li><FaUserCircle size={24} /> Opeoluwa kuti</li>
          </ul>
        </Col>

        <Col xs={7} className="p-3">
          <div className="video-call">
            <p>Video Call Placeholder</p>
          </div>
          <div className="chat-box mt-3">
            <h5>Chat</h5>
            <div className="chat-messages" style={{ height: '200px', overflowY: 'scroll', border: '1px solid #ddd', padding: '10px' }}>
              <p><strong>ope kuti:</strong> Hello everyone!</p>
              <p><strong>amina idris :</strong> Hi John!</p>
            </div>
           
           
          </div>
        </Col>

        <Col xs={3} className="bg-light p-3">
          <h5>Session Details</h5>
          <p><strong>Title:</strong> Career Development</p>
          <p><strong>Date:</strong> September 20, 2024</p>
          <p><strong>Time:</strong> 3:00 PM - 4:00 PM</p>
          <p><strong>Agenda:</strong> Discussion on career growth strategies and networking.</p>
          <h5>Resources</h5>
          <ul className="list-unstyled">
            <li><a href="#">Presentation Slides</a></li>
            <li><a href="#">Related Article</a></li>
          </ul>
        </Col>
      </Row>

      {/* Action Buttons */}
      <Row className="bg-light p-3 shadow-sm">
        <Col className="d-flex justify-content-center">
          <Button variant="secondary" className="mr-2"><FaMicrophone /> Mute</Button>
          <Link to="https://meet.google.com/ymm-uiay-xmu" style={{ textDecoration: 'none' }}>
      <Button variant="secondary" className="mr-2">
        <FaVideo /> Start Video
      </Button>
    </Link>
          <Button variant="secondary" className="mr-2"><FaVideo /> Stop Video</Button>
          <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="danger"><FaSignOutAlt /> Leave Session</Button></Link>
        </Col>
      </Row>
    </Container>
  );
}

export default GroupSession;
