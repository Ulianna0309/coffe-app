import { Component } from 'react';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import OurCoffee from '../../pages/our-coffee';
import Home from '../../pages/home';
import Pleasure from '../../pages/pleasure';
import Product from '../../pages/product';

import './app.scss';


class App extends Component {



  render(){
    return (
      <>
          <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/our-coffee" element={<OurCoffee/>} />
                    <Route path="/pleasure" element={<Pleasure/>} />

                    <Route path="/our-coffee/:id" element={ <Product />} />
                </Routes>
            </Router>
      </>
    );
  }
}

export default App;
