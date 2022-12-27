import { Component } from 'react';
// import AppHeader from '../app-header/app-header';
// import AppIntro from '../app-intro/app-intro';
// import AppAbout from '../app-about/app-about';
// import AppBest from '../app-best/app-best';
// import AppFooter from '../app-footer/app-footer';
// import SearchPanel from '../search-panel/search-panel';
// import AppFilter from '../app-filter/app-filter';
// import EmployeesList from '../employees-list/employees-list';
// import EmployeesAddForm from '../employees-add-form/employees-add-form';

import { BrowserRouter as Router, Route, Routes}
    from 'react-router-dom';
import OurCoffee from '../../pages/our-coffee';
import Home from '../../pages/home'

import './app.scss';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [
        {name: 'Jon', salary: 800, increase: true, rise: true, id: 1},
        {name: 'Alex', salary: 1000, increase: false, rise: false, id: 2},
        {name: 'Julia', salary: 8000, increase: false, rise: false, id: 3}
      ],
      term: '',
      filter: 'all',
    }

    this.maxId = 4;
  }
 
  deleteItem = (id) => {
    this.setState(({data}) => {
      // const index = data.findIndex(elem => elem.id === id)
    
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];

      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
        name, 
        salary,
        increase: false,
        rise: false,
        id: this.maxId++
    }
      this.setState(({data}) => {
          const newArr = [...data, newItem];
          return {
              data: newArr
          }
      });
  }

  onToggleProp = (id, prop) => {

    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id){
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }

  searchEmp = (items, term) => {
    if(term.length === 0){
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise': 
        return items.filter(item => item.rise);
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000);
        default:
          return items  
    }
  }

  onFilterSelect =(filter) => {
    this.setState({filter});
  }



  render(){
    // const{data, term, filter} = this.state;
    // const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <>
          {/* <AppHeader/>
          <AppIntro/>
          <AppAbout/>
          <AppBest dataCoffee={dataCoffee} />
          <AppFooter/>

          <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
          </div>
          
          <EmployeesList 
          data={visibleData} 
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp} />
          <EmployeesAddForm onAdd={this.addItem}/> */}
          <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/our-coffee" element={<OurCoffee/>} />
                </Routes>
            </Router>
      </>
    );
  }
}

export default App;
