import "./product-card.scss";


const ProductCard = (props) => {
    const {country, desc, aboutTitle, imgUrl, price} = props;
    return (
        <div className="product">
             <img
                src={imgUrl}
                alt="product__img"
                className="product__img"
                />
            <div className="product__block">
                <h2 className="product__title">{aboutTitle}</h2>
                <div className="ps d-flex justify-content-center">
                <hr/>
                <img
                        src="../img/coffee-black.svg"
                        width="30"
                        height="30"
                        alt="logo"
                        className="ps__img"
                        />
                <hr/>
                </div>
                <p className="product__text"><span className="fw-bold">Country: </span>{country}</p>
                <p className="product__text"><span className="fw-bold">Description: </span>{desc}</p>
                <p className="product__text">Price: <span className="fw-bold product__price">{price}</span></p>
            </div>
        </div>
    )
}

export default ProductCard;