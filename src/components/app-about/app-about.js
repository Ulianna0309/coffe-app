import "./app-about.scss";


const AppAbout = (props) => {
    const {aboutText, aboutTextLast, aboutTitle} = props;
    return (
        <div className="about">
             <img
                src="../img/about-img.png"
                alt="about__img"
                className="about__img"
                />
            <div className="about__block">
                <h2 className="about__title">{aboutTitle}</h2>
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
                <p className="about__text">{aboutText}</p>
                <p className="about__text">{aboutTextLast}</p>
            </div>
        </div>
    )
}

export default AppAbout;