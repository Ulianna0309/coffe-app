import Card from 'react-bootstrap/Card';

import './app-best-card.scss';


const AppBestCard = (props) => {
    const {title, price, imgUrl} = props;
    return (
    <Card>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {price + '$'}
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default AppBestCard;