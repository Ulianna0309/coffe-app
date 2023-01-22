import React from 'react';
import { Component } from 'react';
import AppHeader from '../components/app-header/app-header';
import AppIntro from '../components/app-intro/app-intro';
import AppAbout from '../components/app-about/app-about';
import AppFooter from '../components/app-footer/app-footer';
import OurCoffeeList from '../components/our-coffee-list/our-coffee-list';
import PleasureBg from '../img/pleasure-bg.png';
import PleasureImg from '../img/pleasure.png';



class Pleasure extends Component {
  constructor(props){
    super(props);
    this.state = {
      
      style: { 
          height: "260px", 
          backgroundImage: `url(${PleasureBg})`,
      },

      data: [
        {title: 'AROMISTICO Coffee 1 kg', category: "Brazil", price: 6.99, imgUrl: "../img/our-card-card.png", id: 1},
        {title: 'Presto Coffee Beans 1 kg', category: "Kenya", price: 15.99, imgUrl: "../img/our-card-card.png", id: 2,},
        {title: 'AROMISTICO Coffee 1 kg', category: "Columbia", price: 6.99, imgUrl: "../img/our-card-card.png", id: 3},
        {title: 'AROMISTICO Coffee 1 kg', category: "Kenya", price: 6.99, imgUrl: "../img/our-card-card.png", id: 4},
        {title: 'AROMISTICO Coffee 1 kg', category: "Kenya", price: 6.99, imgUrl: "../img/our-card-card.png", id: 5},
        {title: 'AROMISTICO Coffee 1 kg', category: "Brazil", price: 6.99, imgUrl: "../img/our-card-card.png", id: 6}
      ],
    }
  }

  

  render(){
    const{data, style} = this.state;
    
    return (
      <div className="our-coffee-page">
        <AppHeader/>
        <AppIntro style={style} className="our-coffee-intro" titleIntro="For your pleasure" subtitleIntro="" subtitleIntroAsk="" btn=""/>
        <AppAbout imgUrl={PleasureImg} aboutTitle="About our goods" aboutText="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."
                  aboutTextLast="Afraid at highly months do things on at. Situation recommend objection do intention
                  so questions. 
                  As greatly removed calling pleased improve an. Last ask him cold feel
                  met spot shy want. Children me laughing we prospect answered followed. At it went
                  is song that held help face."/>
            
          <OurCoffeeList
          data={data} 
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp} /> 
        <AppFooter/>
      </div>
    );
  };
}
 
export default Pleasure;