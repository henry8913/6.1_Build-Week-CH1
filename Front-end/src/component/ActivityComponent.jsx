import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { HandThumbsUp, Chat, Share, Send } from 'react-bootstrap-icons'; // Import Bootstrap icons
import './css/ActivityComponent.css';

export default function ActivityComponent() {
  
    const [seguito, setSeguito] = useState(false)
    const handleSeguiClick = () => {
      setSeguito(!seguito);
    }
  
  return (
    <Container className="activity-container">
      <div className="activity-header">
        <div className="activity-title">
          <h2>Attività</h2>
          <span>4.915 follower</span>
        </div>
        <Button variant="outline-secondary" className="follow-button" onClick={handleSeguiClick}> {seguito ? "Segui già" : "+ Segui"}</Button>
      </div>

      <div className="activity-tabs">
        <Button variant="success" className="tab-button active">Post</Button>
        <Button variant="light" className="tab-button">Commenti</Button>
        <Button variant="light" className="tab-button">Immagini</Button>
      </div>

      <div className="activity-posts">
        <Row className="g-4">
          <Col xs={12} lg={6}>
            <div className="post-item">
              <div className="post-header">
                <img src="https://media.licdn.com/dms/image/v2/C4E03AQEflj5sFpUNmA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1647262624341?e=1749686400&v=beta&t=TQ7RQNFTYieAtgMD8WkXWkRg0n2KxGhPU-cDr3VtwPI" className="profile-pic" alt="Profile" />
                <div className="post-meta">
                  <div className="post-meta-header">
                    <span className="author">Ivan Ranza</span>
                    <span className="dot">·</span>
                    <span className="connection">3° e oltre</span>
                    <Button variant="light" className="more-options">...</Button>
                  </div>
                  <p className="role">Co-Founder & CEO at EPICODE & EPIC...</p>
                  <div className="post-time">
                    <span>3 giorni</span>
                    <span className="dot">·</span>
                    <i className="fas fa-globe-americas"></i>
                  </div>
                </div>
              </div>
              <div className="post-content">
                <p>Sono molto lieto di vedere il riconoscimento per l'incredibile lavoro che il team di EPICODE ha svolto dietro le quinte. Stiamo guidando una profonda...</p>                
                <img src="https://media.licdn.com/dms/image/v2/D4D22AQFFwQ9vxu-GWQ/feedshare-shrink_800/B4DZVhGyFDHwAg-/0/1741090924273?e=1750291200&v=beta&t=iH1MHNEfjTF7gHGiI0df5HR2Ugs7SKmrk5qrBBF0JrU" />
              </div>
              <div className="post-stats">
                <span>43 · 1 commento · 1 diffusione post</span>
              </div>
              <div className="post-actions">
                <Button variant="light"><HandThumbsUp /></Button>
                <Button variant="light"><Chat /></Button>
                <Button variant="light"><Share /></Button>
                <Button variant="light"><Send /></Button>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="post-item">
              <div className="post-header">
                <img src="https://media.licdn.com/dms/image/v2/C4E03AQEflj5sFpUNmA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1647262624341?e=1749686400&v=beta&t=TQ7RQNFTYieAtgMD8WkXWkRg0n2KxGhPU-cDr3VtwPI" className="profile-pic" alt="Profile" />
                <div className="post-meta">
                  <div className="post-meta-header">
                    <span className="author">Ivan Ranza</span>
                    <span className="dot">·</span>
                    <span className="connection">3° e oltre</span>
                    <Button variant="light" className="more-options">...</Button>
                  </div>
                  <p className="role">Co-Founder & CEO at EPICODE & EPIC...</p>
                  <div className="post-time">
                    <span>1m</span>
                    <span className="dot">·</span>
                    <i className="fas fa-globe-americas"></i>
                  </div>
                </div>
              </div>
              <div className="post-content">
                <p>Quando qualche fenomeno vi dice che 'l\'Italia potrebbe vivere di turismo' e poi vi chiedete perché la produttività italiana è bassa, guardate...</p>
                <img src="https://media.licdn.com/dms/image/v2/D4D22AQGuGlV7749kxg/feedshare-shrink_800/B4DZVw3q9VHwAg-/0/1741355398368?e=1750291200&v=beta&t=JjPGq0gLp8c8WZmv57I1jdtMqJ7oJ66mbrCbXPWPlOI" />
              </div>
              <div className="post-stats">
                <span>43 · 1 commento · 1 diffusione post</span>
              </div>
              <div className="post-actions">
                <Button variant="light"><HandThumbsUp /></Button>
                <Button variant="light"><Chat /></Button>
                <Button variant="light"><Share /></Button>
                <Button variant="light"><Send /></Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="show-all-posts">
        <Button variant="link">Mostra tutti i post →</Button>
      </div>
    </Container>
  );
}