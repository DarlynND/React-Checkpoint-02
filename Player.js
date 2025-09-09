import React from 'react';
import { Card, Badge, Row, Col } from 'react-bootstrap';

const Player = ({ 
  name = "Joueur Inconnu",
  team = "Équipe Inconnue", 
  nationality = "Nationalité Inconnue",
  jerseyNumber = 0,
  age = 0,
  imageUrl = "https://via.placeholder.com/300x400?text=No+Image",
  position = "Position Inconnue",
  rating = 0,
  skills = []
}) => {
  
  // Fonction pour déterminer la couleur de la carte selon le rating
  const getCardColor = (rating) => {
    if (rating >= 90) return 'linear-gradient(135deg, #FFD700, #FFA500)'; // Or
    if (rating >= 85) return 'linear-gradient(135deg, #C0C0C0, #A9A9A9)'; // Argent
    if (rating >= 80) return 'linear-gradient(135deg, #CD7F32, #8B4513)'; // Bronze
    return 'linear-gradient(135deg, #4CAF50, #2E7D32)'; // Vert standard
  };

  // Fonction pour obtenir la couleur du rating
  const getRatingColor = (rating) => {
    if (rating >= 90) return '#FFD700';
    if (rating >= 85) return '#C0C0C0';
    if (rating >= 80) return '#CD7F32';
    return '#4CAF50';
  };

  const cardStyle = {
    background: getCardColor(rating),
    border: 'none',
    borderRadius: '20px',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.4s ease',
    transform: 'perspective(1000px) rotateY(0deg)',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '650px'
  };

  const cardHoverStyle = {
    transform: 'perspective(1000px) rotateY(5deg) translateY(-10px)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)'
  };

  const imageStyle = {
    borderRadius: '15px',
    border: '4px solid rgba(255, 255, 255, 0.8)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease',
    objectFit: 'cover',
    width: '100%',
    height: '250px'
  };

  const ratingStyle = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: getRatingColor(rating),
    color: rating >= 85 ? '#000' : '#fff',
    fontSize: '1.8rem',
    fontWeight: '900',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    fontFamily: 'Orbitron, monospace'
  };

  const jerseyStyle = {
    position: 'absolute',
    top: '15px',
    left: '15px',
    background: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Orbitron, monospace'
  };

  const nameStyle = {
    color: '#fff',
    fontWeight: '900',
    fontSize: '1.4rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    fontFamily: 'Orbitron, monospace',
    letterSpacing: '1px'
  };

  const detailStyle = {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    padding: '15px',
    margin: '10px 0',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
  };

  return (
    <Card 
      style={cardStyle}
      className="fifa-card h-100"
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, cardHoverStyle);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, cardStyle);
      }}
    >
      <div style={ratingStyle}>{rating}</div>
      <div style={jerseyStyle}>{jerseyNumber}</div>
      
      <Card.Body className="p-4 text-center">
        <div className="mb-3">
          <img 
            src={imageUrl} 
            alt={name}
            style={imageStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          />
        </div>

        <Card.Title style={nameStyle} className="mb-3">
          {name}
        </Card.Title>

        <div style={detailStyle}>
          <Row className="mb-2">
            <Col xs={6}>
              <strong><i className="fas fa-shield-alt me-2"></i>Équipe:</strong>
            </Col>
            <Col xs={6}>
              <Badge bg="primary" className="fs-6">{team}</Badge>
            </Col>
          </Row>

          <Row className="mb-2">
            <Col xs={6}>
              <strong><i className="fas fa-flag me-2"></i>Pays:</strong>
            </Col>
            <Col xs={6}>
              <Badge bg="success" className="fs-6">{nationality}</Badge>
            </Col>
          </Row>

          <Row className="mb-2">
            <Col xs={6}>
              <strong><i className="fas fa-running me-2"></i>Position:</strong>
            </Col>
            <Col xs={6}>
              <Badge bg="warning" text="dark" className="fs-6">{position}</Badge>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={6}>
              <strong><i className="fas fa-birthday-cake me-2"></i>Âge:</strong>
            </Col>
            <Col xs={6}>
              <Badge bg="info" className="fs-6">{age} ans</Badge>
            </Col>
          </Row>

          <div className="mb-2">
            <strong><i className="fas fa-star me-2"></i>Compétences:</strong>
            <div className="mt-2">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  bg="dark" 
                  className="me-1 mb-1"
                  style={{ fontSize: '0.7rem' }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3">
          <Badge 
            style={{ 
              background: getRatingColor(rating),
              color: rating >= 85 ? '#000' : '#fff',
              fontSize: '1rem',
              padding: '8px 15px'
            }}
          >
            <i className="fas fa-trophy me-2"></i>
            Rating: {rating}
          </Badge>
        </div>
      </Card.Body>
    </Card>
  );
};

// Props par défaut
Player.defaultProps = {
  name: "Joueur Mystère",
  team: "Équipe Inconnue",
  nationality: "Monde",
  jerseyNumber: 99,
  age: 25,
  imageUrl: "https://via.placeholder.com/300x400?text=Joueur+FIFA",
  position: "Polyvalent",
  rating: 75,
  skills: ["Polyvalence", "Détermination"]
};

export default Player;
