import { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import Navbar from './Components/partiels/Navbar';
import background from './assets/img/background.png';
import Accueil from './Components/interventions/Accueil';
import My from './Components/interventions/My';

import './App.css';

function App() {
  const [title, setTitle] = useState('Accueil');
  const [accueil, isAccueil] = useState(true);
  return (
    <Container>
      <Navbar title={title} />
      <br />
      <Row>
        <Col>
          <Card>
            <Card.Body style={{ height: '70vmin' }} className="d-flex justify-content-center align-items-center flex-column">
             {
               accueil ? <Accueil accueil={isAccueil}/> : <My title={setTitle}/>
             }
            </Card.Body>
            <Card.Footer>
              <Button className="float-right pull-right" style={{borderRadius: '25px' }} size="lg">
                <Plus size={25}/>
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
