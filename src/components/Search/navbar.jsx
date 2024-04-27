import React, { useState } from 'react';
import { Navbar, Container, Form, Button } from 'react-bootstrap';
import {Navigate, useNavigate} from 'react-router-dom'
import './search.css'

const NavBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
        await onSearch(query);
    } catch (error) {
        console.error(error)
    }
  };
  const handleLogout = () => {
    
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.setItem('loggedIn', 'false');
    
    navigate('/login');
  };

 

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">The Movie Engine</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Enter movie title"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="outline-info" onClick={handleSearch}>
              Search
            </Button>
            <Button className='logout' variant="outline-danger"  onClick={handleLogout}>
            Logout
          </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
