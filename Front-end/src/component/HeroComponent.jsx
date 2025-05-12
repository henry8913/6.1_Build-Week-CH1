
import React, { useState, useEffect } from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap'
import './css/HeroComponent.css'

export default function HeroComponent() {

  const [seguito, setSeguito] = useState(false)
  const handleSeguiClick = () => {
    setSeguito(!seguito)
  }

  const [user, setUser] = useState([])

  const url = import.meta.env.VITE_APIURL;
  const authKey = import.meta.env.VITE_APIKEY

  useEffect(() => {
    fetch(url, {
      headers: {
        'Authorization': authKey
      }
    })
      .then((res) => res.json())
      .then((user) => setUser(user))
      .catch((err) => console.log('Errore nel fetch:', err))
  }, [])


  return (
    <Card className="hero-card mb-2">
      <div className="cover-container">
        <Card.Img
          variant="top"
          src="https://media.licdn.com/dms/image/v2/D4D16AQHgPuQErUOj1g/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1715028641452?e=1749686400&v=beta&t=5qsUhvIeNVHjcEgw8GmFZxskRZCWnRsDDMaun2mgZH4"
          className="cover-image"
        />

        <ListGroup.Item key={user._id}  >
          <img
            src="https://i.pinimg.com/736x/ea/c2/b7/eac2b7844ad390cd510dc94bb4e7a7ab.jpg"
            className="profile-img"
            alt="Foto profilo"
          />
        </ListGroup.Item>

      </div>

      <Card.Body>
        <div className="profile-info">
          <div className="main-info">
            <h2>Ivan Ranza</h2>


            <ListGroup.Item>
              <p className="role">{user.bio}</p>
            </ListGroup.Item>


            <p className="location">Roma, Lazio, Italia · <a href="#" className="contact-link">Informazioni di contatto</a></p>
            <p className="connections">4.917 follower · Più di 500 collegamenti</p>
          </div>
          <div className="company-logos">
            <div className="company-logo-item">
              <img
                src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1749686400&v=beta&t=hya8yRFhK7TYDJKpNy9gyph0MJmrmHUm8ZzRLweiVzc"
                alt="EPICODE"
              />
              <span>EPICODE & EPICODE Institute of Technology</span>
            </div>
            <div className="company-logo-item">
              <img
                src="https://media.licdn.com/dms/image/v2/C4E0BAQGGK49QM3u7NQ/company-logo_100_100/company-logo_100_100/0/1630650117382/insead_logo?e=1749686400&v=beta&t=65HcycbuLSiIVp8qZUKQk0rImkpzyfdhyqrRq3V256I"
                alt="INSEAD"
              />
              <span>INSEAD</span>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <Button variant="primary">Messaggio</Button>
          <Button variant="outline-primary" onClick={handleSeguiClick}> {seguito ? "Segui già" : "+ Segui"}</Button>
          <Button variant="outline-secondary">Altro</Button>
        </div>
      </Card.Body>
    </Card>
  )
}
