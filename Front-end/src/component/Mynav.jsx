import React, {useState, useEffect} from 'react'
import { Col, Container, Form, Nav, Navbar, ListGroup, NavDropdown, Row, Button } from 'react-bootstrap';
import { FaLinkedin, FaHome, FaUserFriends, FaBriefcase, FaCommentDots, FaBell, FaTh, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Mynav() {
  const [profiles, setProfiles] = useState([])
  const [filteredProfiles, setFilteredProfiles] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showResults, setShowResults] = useState(false)
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const url = import.meta.env.VITE_APIURL;
  const authKey = import.meta.env.VITE_APIKEY

  useEffect(() => {
    fetch(url, {
      headers: {
        'Authorization': authKey
      }
    })
      .then((res) => res.json())
      .then((data) => setProfiles(data))
      .catch((err) => console.log('Errore nel fetch:', err))
  }, []);


  
  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    setShowResults(value.length > 0)


    const filtered = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProfiles(filtered)
  };


  return (

<Navbar expand="lg" className="fixed-top bg-white border-bottom py-1">
<Container>
  <div className="d-flex align-items-center justify-content-between flex-wrap">
    <FaLinkedin size={40} color="#0A66C2"/>
    <Form className="mx-2 position-relative" style={{ width: '250px' }}>
      <Form.Control
        type="text"
        placeholder="Search"
        className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}

      />
       {showResults && filteredProfiles.length > 0 && (
            <ListGroup
              className="position-absolute shadow"
              style={{
                zIndex: 10,
                width: '100%',
                top: '100%',
                maxHeight: '300px',
                overflowY: 'auto'
              }}
            >
                {filteredProfiles.slice(0, 8).map((profile) => (
                <ListGroup.Item key={profile._id} className="d-flex align-items-center gap-2" style={{cursor:'pointer'}}>
                  <img
                    src={profile.image}
                    alt={profile.name}
                    width="32"
                    height="32"
                    className="rounded-circle"
                  />
                  <div>
                    <strong>{profile.name}</strong>
                    <div style={{ fontSize: '12px' }}>{profile.title}</div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}

    </Form>
  </div>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto d-flex align-items-center gap-1">
      <Nav.Link href="#" className="nav-item text-center px-3">
        <FaHome size={22} />
        <div className="nav-text">Home</div>
      </Nav.Link>
      <Nav.Link href="#" className="nav-item text-center px-3">
        <FaUserFriends size={22} />
        <div className="nav-text">My Network</div>
      </Nav.Link>
      <Nav.Link href="#" className="nav-item text-center px-3">
        <FaBriefcase size={22} />
        <div className="nav-text">Jobs</div>
      </Nav.Link>
      <Nav.Link href="#" className="nav-item text-center px-3">
        <FaCommentDots size={22} />
        <div className="nav-text">Messaging</div>
      </Nav.Link>
      <Nav.Link href="#" className="nav-item text-center px-3">
        <FaBell size={22} />
        <div className="nav-text">Notifications</div>
      </Nav.Link>
    </Nav>
    
    <Nav className="d-flex align-items-center gap-2">
      <Nav.Link href="#" className="nav-item text-center">
        <img 
          src="https://imageio.forbes.com/specials-images/imageserve/67531eb2b5f7c9e191f632d7/0x0.jpg?format=jpg&crop=711,713,x316,y125,safe&height=416&width=416&fit=bounds" 
          width="24" 
          height="24" 
          className="rounded-circle" 
          alt="me" 
        />
        <div className="nav-text">Me</div>
      </Nav.Link>
      <div className="vertical-divider"></div>
      <Nav.Link href="#" className="nav-item text-center">
        <FaTh size={22} />
        <div className="nav-text">Work</div>
      </Nav.Link>
      <Nav.Link href="#" className="premium-link">Try Premium for €0</Nav.Link>
    </Nav>
    
    <Nav className="ml-auto d-flex align-items-center">
      {isAuthenticated ? (
        <>
          <NavDropdown 
            title={
              <div className="d-flex align-items-center gap-2">
                <img 
                  src={user?.avatar || 'https://ui-avatars.com/api/?name=User&background=random'} 
                  alt="Profile" 
                  className="rounded-circle" 
                  width="30" 
                  height="30" 
                />
                <span>{user?.name || 'Utente'}</span>
              </div>
            } 
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item as={Link} to="/profile">Profilo</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item 
              onClick={() => {
                logout();
                navigate('/login');
              }}
              className="text-danger d-flex align-items-center gap-2"
            >
              <FaSignOutAlt /> Logout
            </NavDropdown.Item>
          </NavDropdown>
        </>
      ) : (
        <>
          <Button 
            as={Link} 
            to="/login" 
            variant="outline-primary" 
            className="me-2"
          >
            Accedi
          </Button>
          <Button 
            as={Link} 
            to="/register" 
            variant="primary"
          >
            Registrati
          </Button>
        </>
      )}
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  )
}

