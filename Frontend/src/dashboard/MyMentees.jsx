import React from 'react';
import '../App.css';  // Adjust if you have a separate CSS file for the component
import logoImage from '../assets/4life.svg'  // Adjust the path to your logo image
import { Container, Row, Col, Nav, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaCalendarAlt, FaBell, FaUserCircle, FaHome, FaUsers, FaEnvelope, FaBriefcase, FaNetworkWired, FaUser, FaCog } from 'react-icons/fa';

// Sample mentee data
const mentees = [
  {
    name: "Opeoluwa Kuti",
    title: "front End Developer ",
    company: "nill",
    profileImage: "path-to-profile-image"  // Replace with actual path or URL
  },
  {
    name: "Amina Idris",
    title: "React experpet",
    company: "Piggy vest ",
    profileImage: "path-to-profile-image"  // Replace with actual path or URL
  },
  {
    name: "Abdulllateef",
    title: "Frontend -developer",
    company: "Tech expert ",
    profileImage: "path-to-profile-image"  // Replace with actual path or URL
  },

  // Repeat for more mentees...
];

const MyMentees = () => {
  return (
    <Container fluid>
      <Row>
        {/* Top Navigation Bar */}
        <Col xs={12} className="bg-white text-dark py-2">
          <Row>
            <Col xs={6} className="d-flex align-items-center">
              <img src={logoImage} alt='Logo' className="logo" />
              <h3 className='welcome'>WELCOME MENTOR</h3>
            </Col>
            <Col xs={6} className="text-end d-flex align-items-center justify-content-end">
              <FaCalendarAlt className="mx-2" size={24} />
              <FaBell className="mx-2" size={24} />
              <FaUserCircle className="mx-2" size={24} />
              <Button className="ml-2" variant="primary">Create Session</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        {/* Sidebar */}
        <Col md={2} className="bg-light vh-100">
          <Nav className="flex-column">
            <Nav.Link href="/" className="nav-link"><FaHome className="nav-icon" />Home</Nav.Link>
            <Nav.Link href="#" className="nav-link"><FaUsers className="nav-icon" />My Mentees</Nav.Link>
            <Nav.Link href="#" className="nav-link"><FaEnvelope className="nav-icon" />Messages</Nav.Link>
            <Nav.Link href="/groupsession" className="nav-link"><FaUsers className="nav-icon" />Group Session</Nav.Link>
            <Nav.Link href="#" className="nav-link"><FaBriefcase className="nav-icon" />Career Guidance </Nav.Link>
            <Nav.Link href="#" className="nav-link"><FaNetworkWired className="nav-icon" />Networking </Nav.Link>
            <Nav.Link href="#" className="nav-link"><FaUser className="nav-icon" />My profile</Nav.Link>
            <Nav.Link href="#" className="nav-link"><FaCog className="nav-icon" />Settings</Nav.Link>
          </Nav>
        </Col>

        {/* Main Content */}
        <Col md={10} className="ml-sm-auto px-4">
          <h5 className="mt-3">My Mentees</h5>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search for mentees"
              aria-label="Search for mentees"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
          <Row>
            {mentees.map((mentee, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="mentee-card">
                  <Card.Img variant="top" src={mentee.profileImage} />
                  <Card.Body>
                    <Card.Title>{mentee.name}</Card.Title>
                    <Card.Text>{mentee.title} at {mentee.company}</Card.Text>
                    <Card.Text>5 bookings</Card.Text>
                    <Card.Text>Last met {mentee.lastMet}</Card.Text>
                    <Button variant="primary">Check in</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
           </nav>
        </Col>
      </Row>
    </Container>
  );
}

export default MyMentees;
