import React from 'react';
import { Component } from 'react';
import AppHeader from '../components/app-header/app-header';
import AppIntro from '../components/app-intro/app-intro';
import AppAbout from '../components/app-about/app-about';
import AppBest from '../components/app-best/app-best';
import AppFooter from '../components/app-footer/app-footer';
import OurCoffeeBg from '../img/our-coffee-bg.png';


class OurCoffee extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataCoffee: [
        {title: 'Solimo Coffee Beans 2 kg', price: 10.73, imgUrl: "../img/c1.png", id: 1},
        {title: 'Presto Coffee Beans 1 kg', price: 15.99, imgUrl: "../img/c2.png", id: 2,},
        {title: 'AROMISTICO Coffee 1 kg', price: 6.99, imgUrl: "../img/c3.png", id: 3}
      ],
      style: { 
          height: "260px", 
          backgroundImage: `url(${OurCoffeeBg})`,
      }
    }
  }
  render(){
    const{dataCoffee, style} = this.state;
    
    return (
      <div className="our-coffee-page">
        <AppHeader/>
        <AppIntro style={style} className="our-coffee-intro" titleIntro="Our Coffee" subtitleIntro="" subtitleIntroAsk="" btn=""/>
        <AppAbout aboutTitle="About our beans" aboutText="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."
                  aboutTextLast="Afraid at highly months do things on at. Situation recommend objection do intention
                  so questions. 
                  As greatly removed calling pleased improve an. Last ask him cold feel
                  met spot shy want. Children me laughing we prospect answered followed. At it went
                  is song that held help face."/>
        <AppBest dataCoffee={dataCoffee} />
        <AppFooter/>
      </div>
    );
  };
}
 
export default OurCoffee;