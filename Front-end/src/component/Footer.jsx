
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { QuestionCircle, Gear } from 'react-bootstrap-icons';
import './css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <div className="footer-links">
              <ul>
                <li><a href="#">Informazioni</a></li>
                <li><a href="#">Informativa sulla community professionale</a></li>
                <li><a href="#">Privacy e condizioni</a></li>
                <li><a href="#">Sales Solutions</a></li>
                <li><a href="#">Centro sicurezza</a></li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="footer-links">
              <ul>
                <li><a href="#">Accessibilità</a></li>
                <li><a href="#">Carriera</a></li>
                <li><a href="#">Opzioni per gli annunci pubblicitari</a></li>
                <li><a href="#">Mobile</a></li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="footer-links">
              <ul>
                <li><a href="#">Talent Solutions</a></li>
                <li><a href="#">Soluzioni di marketing</a></li>
                <li><a href="#">Pubblicità</a></li>
                <li><a href="#">Piccole imprese</a></li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="footer-help">
              <div className="help-section">
                <div className="help-icon">
                  <QuestionCircle size={20} />
                  <span>Domande?</span>
                </div>
                <p>Visita il nostro Centro assistenza.</p>
              </div>
              <div className="settings-section">
                <div className="settings-icon">
                  <Gear size={20} />
                  <span>Gestisci il tuo account e la tua privacy</span>
                </div>
                <p>Vai alle impostazioni</p>
              </div>
              <div className="transparency-section">
                <div className="transparency-icon">
                  <span className="transparency-symbol">!</span>
                  <span>Trasparenza sui contenuti consigliati</span>
                </div>
                <p>Scopri di più sui contenuti consigliati.</p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <div className="language-selector">
            <select>
              <option>Italiano (Italiano)</option>
            </select>
          </div>
          <span className="copyright">LinkedIn Corporation © {new Date().getFullYear()}</span>
        </div>
      </Container>
    </footer>
  );
}
