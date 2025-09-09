import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Player from './Player';
import players from '../data/players';

const PlayersList = () => {
  return (
    <Container fluid className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-3 fifa-title mb-3">
          <i className="fas fa-futbol me-3"></i>
          FIFA PLAYER CARDS
          <i className="fas fa-futbol ms-3"></i>
        </h1>
        <p className="lead fifa-subtitle">
          Découvrez les meilleurs joueurs de football mondial
        </p>
        <div className="fifa-divider"></div>
      </div>

      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Col 
            key={index} 
            xl={4} 
            lg={6} 
            md={6} 
            sm={12} 
            className="mb-4 d-flex justify-content-center"
          >
            {/* Utilisation du spread operator pour passer toutes les props */}
            <div style={{ maxWidth: '350px', width: '100%' }}>
              <Player {...player} />
            </div>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-5">
        <div className="fifa-stats">
          <div className="row">
            <div className="col-md-4">
              <div className="stat-item">
                <i className="fas fa-users fa-2x mb-2"></i>
                <h3>{players.length}</h3>
                <p>Joueurs</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-item">
                <i className="fas fa-globe fa-2x mb-2"></i>
                <h3>{new Set(players.map(p => p.nationality)).size}</h3>
                <p>Nationalités</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-item">
                <i className="fas fa-shield-alt fa-2x mb-2"></i>
                <h3>{new Set(players.map(p => p.team)).size}</h3>
                <p>Équipes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PlayersList;
