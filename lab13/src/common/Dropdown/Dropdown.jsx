import React from "react";

import "./Dropdown.css";

class Dropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: this.props.items || [],
            showItems: false,
            selectedItem: this.props.items && this.props.items[0]
        };
    }

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems
        }));
    };

    selectItem = item => {
        this.setState({
            selectedItem: item,
            showItems: false
        });
    };

    render() {
        const {dropDown, selectItem} = this;
        const {selectedItem, showItems, items} = this.state;

        return (<div className="dropdown-container">
                <div className="dropdown-selected" onClick={dropDown}>{selectedItem.name}</div>

                {showItems
                    ? <img className="dropdown-arrow" src='./icons/up-arrow.svg' alt="icon" onClick={dropDown}/>
                    : <img className="dropdown-arrow" src='./icons/down-arrow.svg' alt="icon" onClick={dropDown}/>}

                <div style={{display: showItems ? "block" : "none"}} className={"dropdown-items"}>
                    {items.map(item => (
                        <div key={item.id}
                             onClick={() => selectItem(item)}
                             className={selectedItem === item ? "selected" : ""}>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Dropdown;
