import { ArrowRight, ClockHistory } from 'react-bootstrap-icons';
import { Button, Badge } from 'react-bootstrap';

function Accueil({ accueil }) {
    return (
        <div>
            <Button 
                variant="outline-success" 
                size="lg"
                onClick={ () =>  accueil(false)}
                >
                <ArrowRight size={50} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   Mes interventions
                  <sup style={{ top: '-1.75em', left: '1.5em' }}><Badge pill className="text-light ml-auto mt-auto" variant="warning">3</Badge></sup>
            </Button>
            <br/><br/>
            <Button variant="outline-success" size="lg" style={{ minWidth: '289px' }}>
                <ClockHistory size={50} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   Historique
              </Button>
        </div>
    )
}

export default Accueil
