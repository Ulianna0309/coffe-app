import "./app-intro.scss";


const AppIntro = () => {
    return (
        <div className="intro text-center d-flex flex-column justify-content-center">
            <div className="container">
                <h1 className="intro__title">Everything You Love About Coffee</h1>
                <div className="ps d-flex justify-content-center">
                <hr/>
                <img
                        src="../img/coffee-beans.svg"
                        width="30"
                        height="30"
                        alt="logo"
                        className="ps__img"
                        />
                <hr/>
                </div>
                <p className="intro__subtitle">We makes every day full of energy and taste</p>
                <p className="intro__subtitle">Want to try our beans?</p>
                <button type="submit" className="btn btn-outline-light intro__btn">More</button>
            </div>
        </div>
    )
}

export default AppIntro;