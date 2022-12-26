import "./app-about.scss";


const AppAbout = () => {
    return (
        <div className="about text-center d-flex flex-column justify-content-center">
            <div className="container">
                <h2 className="about__title">About Us</h2>
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
                <p className="about__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
Afraid at highly months do things on at. Situation recommend objection do intention
so questions. As greatly removed calling pleased improve an. Last ask him cold feel
met spot shy want. Children me laughing we prospect answered followed. At it went
is song that held help face.</p>
                <p className="about__text">Now residence dashwoods she excellent you. Shade being under his bed her, Much
read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
horrible but confined day end marriage. Eagerness furniture set preserved far
recommend. Did even but nor are most gave hope. Secure active living depend son
repair day ladies now.</p>
            </div>
        </div>
    )
}

export default AppAbout;