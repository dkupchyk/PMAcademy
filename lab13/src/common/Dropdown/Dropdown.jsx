import React from "react";

import "./Dropdown.css";

class Dropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            showItems: false,
            selectedItem: null
        };
    }

    dropDown = () => {
        this.setState(prevState => ({showItems: !prevState.showItems}));
    };

    selectItem = item => {
        this.setState({
            selectedItem: item,
            showItems: false
        });
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            items: nextProps.items,
            selectedItem: nextProps.items[0]
        });
    }

    render() {
        const {dropDown, selectItem} = this;
        const {selectedItem, showItems, items} = this.state;

        return (<div className="dropdown-container">
                <div className="dropdown-selected"
                     onClick={dropDown}>{items.length !== 0 ? selectedItem.name : ''}</div>

                {showItems
                    ? <img className="dropdown-arrow" src='./icons/up-arrow.svg' alt="icon" onClick={dropDown}/>
                    : <img className="dropdown-arrow" src='./icons/down-arrow.svg' alt="icon" onClick={dropDown}/>}

                <div style={{display: showItems ? "block" : "none"}} className="dropdown-items">
                    {items.map(item => (
                        <div key={item.id}
                             onClick={() => selectItem(item)}>
                            {item.name}
                        </div>
                    ))}
                </div>

            </div>
        );
    }
}

export default Dropdown;
