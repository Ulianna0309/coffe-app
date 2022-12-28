

import './our-coffee-list.scss';
import OurCoffeeListCard from '../our-coffee-list-card/our-coffee-list-card';


const OurCoffeeList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
      const{id, ...itemProps} = item;
      return(
          <OurCoffeeListCard
          key={id} 
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleProp={(e)=> onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
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