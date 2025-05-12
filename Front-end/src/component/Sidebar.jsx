
import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import './css/Sidebar.css';

export default function Sidebar() {

    const [seguito, setSeguito] = useState({})
    const handleSeguiClick = (name) => {
      setSeguito(prevState => ({
        ...prevState,
        [name]: !prevState[name] 
      }));
    }
  const connections = [
    {
      name: "Alessandra Polcassi",
      title: "Key Account Specialist at Epicode",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEw2Ph1vrmcPQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730124187745?e=1749686400&v=beta&t=ZIr3ELFFXEIIJ3zAEaulqMhRtKx0I5pa5tB6dcku_rw"
    },
    {
      name: "Valeria Rossi",
      title: "Student at EPICODE",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQFW5z3GVUebNw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1622204746341?e=1749686400&v=beta&t=BkZy-7yVFgvnvwaEnYd_bBZuDntQEj37X4fyzY4miKw"
    },
    {
      name: "Paolo De Nadai",
      title: "Education Content & Fullstack Developer",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGjBWSfjZOpXA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713782199507?e=1749686400&v=beta&t=nLYS-OwhMV2xn82pugBSqqrmY7FIQQbwbHdy8DMIqtk"
    }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-header">
          Persone che potresti conoscere
        </div>
        {connections.map((connection, index) => (
          <div key={index} className="connection-item">
            <img 
              src={connection.image} 
              alt={connection.name} 
              className="profile-pic"
            />
            <div className="connection-info">
              <div className="connection-name">{connection.name}</div>
              <div className="connection-title">{connection.title}</div>
            </div>
            <Button 
              variant="outline-secondary" 
              size="sm" 
              className="connection-button"
              onClick={() => handleSeguiClick(connection.name)}
            >
              {seguito[connection.name] ? "Segui già" : "+ Segui"}
            </Button>
          </div>
        ))}
        <div className="show-more">
          Mostra tutto
        </div>
      </div>
    </div>
  );
}
