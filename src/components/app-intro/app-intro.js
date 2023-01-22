import "./app-intro.scss";
import coffeeBeans from '../../img/coffee-beans.svg' 


const AppIntro = (props) => {
    const {titleIntro, subtitleIntro, subtitleIntroAsk, style, btn} = props;
    
    
    return (
        <div className="intro text-center d-flex flex-column justify-content-center" style={style}>
            <div className="container">
                <h1 className="intro__title">{titleIntro}</h1>
                <div className="ps d-flex justify-content-center">
                <hr/>
                <img
                        src={coffeeBeans}
                        width="30"
                        height="30"
                        alt="logo"
                        className="ps__img"
                        />
                <hr/>
                </div>
                <p className="intro__subtitle">{subtitleIntro}</p>
                <p className="intro__subtitle">{subtitleIntroAsk}</p>
                <button type="submit" className="btn btn-outline-light intro__btn">{btn}</button>
            </div>
        </div>
    )
}

export default AppIntro;