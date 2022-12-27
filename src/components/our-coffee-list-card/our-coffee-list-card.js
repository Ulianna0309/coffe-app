import './our-coffee-list-card.scss';
import Card from 'react-bootstrap/Card';


const OurCoffeeListCard = (props) => {
    const {title, price, imgUrl, category} = props; 

    return (
        <Card>
            <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                       {category}
                    </Card.Text>
                    <Card.Text>
                       {price + '$'}
                    </Card.Text>
            </Card.Body>
        </Card>
    )

}

export default OurCoffeeListCard;