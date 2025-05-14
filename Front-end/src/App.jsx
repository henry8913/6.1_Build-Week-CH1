import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// Componenti
import Mynav from './component/Mynav';
import Footer from './component/Footer';
import HeroComponent from './component/HeroComponent';
import InfoComponent from './component/InfoComponent';
import ActivityComponent from './component/ActivityComponent';
import ExperienceComponent from './component/ExperienceComponent';
import EducationComponent from './component/EducationComponent';
import Sidebar from './component/Sidebar';
import ProtectedRoute from './component/ProtectedRoute';

// Pagine di autenticazione
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Context
import { AuthProvider } from './context/AuthContext';
import { Col, Container, Row } from 'react-bootstrap'

// Componente Home che contiene il contenuto principale
const HomePage = () => {
  return (
    <>
      <Container fluid className="px-0 px-sm-3">
        <Row className="mx-0">
          <Col xs={12} md={8}>
            <div className="mb-3">
              <HeroComponent/>
            </div>
            <div className="mb-3">
              <InfoComponent/>
            </div>
            <div className="mb-3">      
              <ActivityComponent/>
            </div>
            <div className="mb-3">
              <ExperienceComponent/>
            </div>
            <div className="mb-3">
              <EducationComponent/>
            </div>
          </Col>
          <Col md={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Mynav />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/auth/success" element={<Navigate to="/" />} />
          <Route path="/" element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  )
}

export default App