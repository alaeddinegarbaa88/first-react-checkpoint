import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardSite() {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/UEFA_Champions_League_logo_2.svg/800px-UEFA_Champions_League_logo_2.svg.png" />
          <Card.Body>
            <Card.Title>Champions League</Card.Title>
            <Card.Text>
            The UEFA Champions League (abbreviated as UCL) is an annual club football competition organised by the Union of European Football Associations (UEFA) and contested by top-division European clubs, deciding the competition winners through a round robin group stage to qualify for a double-legged knockout format, and a single leg final. It is one of the most prestigious football tournaments in the world and the most prestigious club competition in European football, played by the national league champions (and, for some nations, one or more runners-up) of their national associations.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
}

export default CardSite;