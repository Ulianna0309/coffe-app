import React from 'react';
import { Component } from 'react';
import AppHeader from '../components/app-header/app-header';
import AppIntro from '../components/app-intro/app-intro';
import AppAbout from '../components/app-about/app-about';
import AppBest from '../components/app-best/app-best';
import AppFooter from '../components/app-footer/app-footer';
import MainBg from '../img/main.png';
 
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataCoffee: [
        {title: 'Solimo Coffee Beans 2 kg', price: 10.73, imgUrl: "../img/c1.png", id: 1},
        {title: 'Presto Coffee Beans 1 kg', price: 15.99, imgUrl: "../img/c2.png", id: 2,},
        {title: 'AROMISTICO Coffee 1 kg', price: 6.99, imgUrl: "../img/c3.png", id: 3}
      ],
      style: { 
        height: "640px", 
        backgroundImage: `url(${MainBg})`,
      }
    }
  }
  render(){

    const{dataCoffee, style} = this.state;
    return (
      <div className="home-page">
        <AppHeader/>
        <AppIntro style={style} className="home-intro" titleIntro="Everything You Love About Coffee" 
                  subtitleIntro="We makes every day full of energy and taste" 
                  subtitleIntroAsk="Want to try our beans?"
                  btn="More"/>
        <AppAbout aboutTitle="About Us" aboutText="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                  Afraid at highly months do things on at. Situation recommend objection do intention
                  so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                  met spot shy want. Children me laughing we prospect answered followed. At it went
                  is song that held help face." aboutTextLast="Now residence dashwoods she excellent you. Shade being under his bed her, Much
                  read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                  horrible but confined day end marriage. Eagerness furniture set preserved far
                  recommend. Did even but nor are most gave hope. Secure active living depend son
                  repair day ladies now."/>
        <AppBest dataCoffee={dataCoffee} />
        <AppFooter/>
      </div>
    );
  };
}
 
export default Home;