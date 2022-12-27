import React from 'react';
import { Component } from 'react';
import AppHeader from '../components/app-header/app-header';
import AppIntro from '../components/app-intro/app-intro';
import AppAbout from '../components/app-about/app-about';
import AppFooter from '../components/app-footer/app-footer';
import OurCoffeeBg from '../img/our-coffee-bg.png';
import AppFilter from '../components/app-filter/app-filter';
import SearchPanel from '../components/search-panel/search-panel';
import OurCoffeeList from '../components/our-coffee-list/our-coffee-list';



class OurCoffee extends Component {
  constructor(props){
    super(props);
    this.state = {
      
      style: { 
          height: "260px", 
          backgroundImage: `url(${OurCoffeeBg})`,
      },

      data: [
        {title: 'AROMISTICO Coffee 1 kg', category: "Brazil", price: 6.99, imgUrl: "../img/c1.png", id: 1},
        {title: 'Presto Coffee Beans 1 kg', category: "Kenya", price: 15.99, imgUrl: "../img/c2.png", id: 2,},
        {title: 'AROMISTICO Coffee 1 kg', category: "Columbia", price: 6.99, imgUrl: "../img/c3.png", id: 3}
      ],
     
      term: '',
      filter: 'all',
    }
  }

  searchEmp = (items, term) => {
    if(term.length === 0){
      return items;
    }

    return items.filter(item => {
      return item.title.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'Kenya': 
        return items.filter(item => item.category === "Kenya");
      case 'Columbia':
        return items.filter(item => item.category === "Columbia");
        default:
          return items  
    }
  }

  onFilterSelect =(filter) => {
    this.setState({filter});
  }

  render(){
    const{data, style, term, filter} = this.state;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    
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
            <div className="search-panel container">
               <hr/>
               <div className="d-flex justify-content-between">
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
              </div>
          </div>
          <OurCoffeeList
          data={visibleData} 
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp} /> 
        <AppFooter/>
      </div>
    );
  };
}
 
export default OurCoffee;