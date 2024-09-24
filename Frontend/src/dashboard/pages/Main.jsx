import '../../App.css';
import logoImage from '../../assets/4life.svg';
import { Container, Row, Col, Nav, Card, Button, Table } from 'react-bootstrap';
import { FaCalendarAlt, FaBell,FaUserCircle, FaUserFriends, FaHome, FaUsers, FaEnvelope, FaBriefcase, FaNetworkWired, FaCog, FaUser, FaChalkboardTeacher} from 'react-icons/fa';

const Home = () => {
    return (
        <Container fluid>
          <Row>
            {/* Top Navigation Bar */}
            <Col xs={12} className="bg-white text-dark py-2">
              <Row>
                <Col xs={6} className="d-flex align-items-center">
                  <img src={logoImage} alt='Logo' className="logo" />
                     <h3 className='welcome'> WELCOME  MENTOR </h3> 
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
              {/*  <Nav.Link href="#" className="active"><FaTachometerAlt/>Dashboard</Nav.Link> */}
                <Nav.Link  href="#" className="nav-link"><FaHome className="nav-icon" />Home</Nav.Link>
                 <Nav.Link href="/mymentee" className="nav-link">  <FaUsers className="nav-icon" />My Mentees</Nav.Link>
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
              <h5 className="mt-3" id="quick">QUICK ACTION</h5>
             
              <Row className="mt-4">
                <Col md={4} className="d-flex">
                  <Card className="info-box">
                    <Card.Body className="d-flex align-items-center">
                      <FaUser className="info-box-icon mr-3"/>
                      <div>
                        <Card.Title>Skill Development</Card.Title>
                        <Card.Text>resources</Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="d-flex">
                  <Card className="info-box">
                    <Card.Body className="d-flex align-items-center">
                      <FaChalkboardTeacher className="info-box-icon mr-3" />
                      <div>
                        <Card.Title>Create a session</Card.Title>
                        <Card.Text>Group mentoring session</Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="d-flex">
                  <Card className="info-box">
                    <Card.Body className="d-flex align-items-center">
                      <FaUserFriends className="info-box-icon mr-3" />
                      <div className="text-left">
                        <Card.Title>One to One mentoring</Card.Title>
                        <Card.Text>Orientate the Mentees</Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
             {/*
              <Row className="mt-4">
                <Col md={6}>
                  <Card>
                    <Card.Header>Recent Activities</Card.Header>
                    <Card.Body>
                      <ul>
                        <li>Reviewed assignment 1</li>
                        <li>Replied to student queries</li>
                        <li>Updated course material</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
             
                <Col md={6}>
                  <Card>
                    <Card.Header>Notifications</Card.Header>
                    <Card.Body>
                      <p>No new notifications.</p>
                    </Card.Body>
                  </Card>
                </Col> 
              </Row> */}
    
              <Row className="mt-4">
                <Col md={12}>
                  <Card>
                    <Card.Header>Student Progress</Card.Header>
                    <Card.Body>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Progress</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Jane Doe</td>
                            <td>75%</td>
                            <td><Button size="sm">View</Button></td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>John Smith</td>
                            <td>60%</td>
                            <td><Button size="sm">View</Button></td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      );
    }
    
export default Home;