import { Component } from 'react';
import './search-panel.scss';

class SearchPanel extends Component {
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
     const term = e.target.value;
     this.setState({term});
     this.props.onUpdateSearch(term);
    }
   render(){
        return (
            <div className="search-panel__search d-flex align-items-center">
                <label htmlFor="" className="search-panel__search-label">Lookiing for</label>
                <input type="text"
                        className="form-control search-input"
                        placeholder="start typing here..."
                        value={this.setState.term}
                        onChange={this.onUpdateSearch}/>
            </div>
        )
    }
}

export default SearchPanel;