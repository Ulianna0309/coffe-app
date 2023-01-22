import './our-coffee-list-card.scss';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const OurCoffeeListCard = (props) => {
    const {title, price, imgUrl, category, id} = props; 

    return (
        <Card>
            <Link to={`/our-coffee/${id}`}>
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
            </Link>
        </Card>
    )

}

export default OurCoffeeListCard;