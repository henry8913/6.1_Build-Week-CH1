import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [validated, setValidated] = useState(false);
  const { loginLocal, loginWithGoogle, error, loading, isAuthenticated, handleGoogleCallback } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Gestisce il callback di Google
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const authError = params.get('error');

    if (token) {
      handleGoogleCallback(token)
        .then(() => {
          navigate('/');
        })
        .catch(err => {
          console.error('Errore durante il callback di Google:', err);
        });
    }

    if (authError) {
      console.error('Errore di autenticazione Google:', authError);
    }
  }, [location, handleGoogleCallback, navigate]);

  // Reindirizza se già autenticato
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      await loginLocal(formData.email, formData.password);
      navigate('/');
    } catch (err) {
      console.error('Errore durante il login:', err);
    }
  };

  const handleGoogleLogin = () => {
    loginWithGoogle();
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4">Accedi</h2>
              
              {error && <Alert variant="danger">{error}</Alert>}
              
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Inserisci la tua email"
                  />
                  <Form.Control.Feedback type="invalid">
                    Inserisci un indirizzo email valido.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Inserisci la tua password"
                  />
                  <Form.Control.Feedback type="invalid">
                    La password è obbligatoria.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mb-3"
                  disabled={loading}
                >
                  {loading ? 'Caricamento...' : 'Accedi'}
                </Button>

                <div className="text-center mb-3">oppure</div>

                <Button
                  variant="outline-secondary"
                  className="w-100 d-flex align-items-center justify-content-center gap-2"
                  onClick={handleGoogleLogin}
                  disabled={loading}
                >
                  <FcGoogle size={20} />
                  Accedi con Google
                </Button>
              </Form>

              <div className="text-center mt-3">
                Non hai un account? <Link to="/register">Registrati</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;