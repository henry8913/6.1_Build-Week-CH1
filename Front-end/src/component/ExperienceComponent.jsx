
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './css/ExperienceComponent.css';

export default function ExperienceComponent() {
  const experiences = [
    {
      logo: "https://media.licdn.com/dms/image/v2/C4E03AQEflj5sFpUNmA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1647262624341?e=1749686400&v=beta&t=TQ7RQNFTYieAtgMD8WkXWkRg0n2KxGhPU-cDr3VtwPI",
      title: "Co-Founder and CEO",
      company: "EPICODE & EPICODE Institute of Technology",
      date: "2020 - Presente · 5 anni 4 mesi",
    },
    {
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQEYh2VLbukH4Q/company-logo_100_100/company-logo_100_100/0/1646049190342/gruppo_digitouch_logo?e=1749686400&v=beta&t=HG4-cm-zsznKXc2sYrDViM9ktr1Bhte-0y5C8xSIGRM",
      title: "Non Executive Director",
      company: "Digitouch",
      date: "lug 2024 - Presente · 10 mesi",
      location: "Rome, Latium, Italy",
    },
    {
      logo: "https://media.licdn.com/dms/image/v2/C510BAQGpRhkpxp5A9A/company-logo_100_100/company-logo_100_100/0/1630570672166/ernstandyoung_logo?e=1749686400&v=beta&t=Y3LI2bLkfMdNnwyFN-l80ohBxhsjqQaOZCBcPfNN2jw",
      title: "Med Experience Design & Engineering lead",
      company: "EY",
      date: "2020 - set 2021 · 1 anno 9 mesi",
      location: "Milano, Lombardia, Italia",
    },
    {
      logo: "https://media.licdn.com/dms/image/v2/C560BAQGAuGi4BBacsA/company-logo_100_100/company-logo_100_100/0/1631311666478?e=1749686400&v=beta&t=K6dA-GU9OTGWZI1eYIK1aVh3XMSQ8ulq-Abr-t5rJCA",
      title: "SME - Media Agency BU Director",
      company: "Italiaonline",
      date: "2017 - 2020 · 3 anni",
    },
    {
      logo: "https://media.licdn.com/dms/image/v2/C560BAQFvj9KRYnhOXA/company-logo_100_100/company-logo_100_100/0/1631342846517?e=1749686400&v=beta&t=y7Fn22aTFKiyTk7THuZIosVXWR8dZUeDTp1bVQ-e8LQ",
      title: "Member of the Board",
      company: "Consodata",
      date: "2017 - 2020 · 3 anni",
      location: "Milano, Italia",
    },
  ];

  return (
    <Container className="esperienze-container">
      <h2 className="section-title">Esperienza</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <Card key={index} className="experience-item">
            <div className="experience-content">
              <img src={exp.logo} alt={exp.company} className="company-logo" />
              <div className="experience-details">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="company-name">{exp.company}</p>
                <p className="experience-date">{exp.date}</p>
                {exp.location && <p className="experience-location">{exp.location}</p>}
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="show-all">
        <a href="#" className="show-all-link">Mostra tutte le esperienze (16) →</a>
      </div>
    </Container>
  );
}
