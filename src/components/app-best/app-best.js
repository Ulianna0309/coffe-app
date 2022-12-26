import "./app-best.scss";
import AppBestCard from '../app-best-card/app-best-card';

const AppBest = ({dataCoffee}) => {

    const elements = dataCoffee.map(item => {
        const {id, ...itemProps} = item;
        return (
            <AppBestCard key={id} {...itemProps}/>
        )
    })

    
    return (
        <div className="best text-center d-flex flex-column justify-content-center">
        <div className="container">
            <h2 className="best__title">Our best</h2>
            <div className="best__cards d-md-flex justify-content-between">
              { elements }
            </div>
        </div>
    </div>
    )
}

export default AppBest;