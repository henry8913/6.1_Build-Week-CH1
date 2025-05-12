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
                <p>Un ottimo editoriale di Maurizio Belpietro, in poche righe fa un'analisi lucida della scuola italiana. Ogni riferimento a persone o fatti è puramente...</p>
                <img src="https://media.licdn.com/dms/image/v2/D4D22AQFFwQ9vxu-GWQ/feedshare-shrink_800/B4DZVhGyFDHwAg-/0/1741090924273?e=1747267200&v=beta&t=OqYrKsn0thpALVsw9m5k_Np7Y7Gqq7lpisevWlTowr0" />
              </div>
              <div className="post-stats">
                <span>15</span>
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
                <p>Quando qualche fenomeno vi dice che 'l'Italia potrebbe vivere di turismo' e poi vi chiedete perché la produttività italiana è bassa, guardate...</p>
                <img src="https://media.licdn.com/dms/image/v2/D4D22AQGuGlV7749kxg/feedshare-shrink_2048_1536/B4DZVw3q9VHwAo-/0/1741355398392?e=1747267200&v=beta&t=ne0CdUbh_e18rsn6ywpqfgSJ4DKo-n9KCYFjVKYcpIo" />
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