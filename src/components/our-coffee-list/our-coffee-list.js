

import './our-coffee-list.scss';
import OurCoffeeListCard from '../our-coffee-list-card/our-coffee-list-card';


const OurCoffeeList = ({data}) => {

    const elements = data.map(item => {
      const{id, ...itemProps} = item;
      return(
          <OurCoffeeListCard 
          key={id} 
          {...itemProps}
          />
          
      )
    })

    return (
        <ul className="our-coffee__cards d-flex justify-content-between">
            {elements}
        </ul>
    )
}


export default OurCoffeeList;