import "./app-filter.scss";

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all',label: 'Brazil', colored: false},
        {name: 'Kenya',label: 'Kenya', colored: false},
        {name: 'Columbia',label: ' Columbia', colored: false}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        const style = active ? {color: 'red'} : null;
        return(
            <button type="button"
            className={`btn ${clazz}`} 
            key={name}
            onClick={() => props.onFilterSelect(name)}
            style={style}>
               {label}
             </button>
        )
    })
    
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )

}

export default AppFilter;