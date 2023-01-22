import "./app-about.scss";
import coffeeBlack from '../../img/coffee-black.svg'


const AppAbout = (props) => {
    const {aboutText, aboutTextLast, aboutTitle, imgUrl} = props;
    return (
        <div className="about">
             <img
                src={imgUrl}
                alt="about__img"
                className="about__img"
                />
            <div className="about__block">
                <h2 className="about__title">{aboutTitle}</h2>
                <div className="ps d-flex justify-content-center">
                <hr/>
                <img
                        src={coffeeBlack}
                        width="30"
                        height="30"
                        alt="logo"
                        className="ps__img"
                        />
                <hr/>
                </div>
                <p className="about__text">{aboutText}</p>
                <p className="about__text">{aboutTextLast}</p>
            </div>
        </div>
    )
}

export default AppAbout;