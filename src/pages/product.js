import React from 'react';
import { Component } from 'react';
import AppHeader from '../components/app-header/app-header';
import AppIntro from '../components/app-intro/app-intro';
import ProductCard from '../components/product-card/product-card';
import AppFooter from '../components/app-footer/app-footer';
import OurCoffeeBg from '../img/our-coffee-bg.png';



class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      
      style: { 
          height: "260px", 
          backgroundImage: `url(${OurCoffeeBg})`,
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
    const{style} = this.state;
    
    return (
      <div className="our-coffee-page product-page">
        <AppHeader/>
        <AppIntro style={style} className="our-coffee-intro" titleIntro="Our Coffee" subtitleIntro="" subtitleIntroAsk="" btn=""/>
        <ProductCard imgUrl="../../img/p1.png" aboutTitle="About it" country='Brazil' desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        price='16.99$'/>

        <AppFooter/>
        
      </div>
    );
  };
}
 
export default Product;