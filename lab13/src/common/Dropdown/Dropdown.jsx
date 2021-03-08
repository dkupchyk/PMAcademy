import React from "react";

import "./Dropdown.css";

class Dropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedItemId: 0,
            showItems: false,
        };
    }

    dropDown = () => {
        this.setState(prevState => ({showItems: !prevState.showItems}));
    };

    selectItem = id => {
        if (id !== this.state.selectedItemId) {
            this.setState({selectedItemId: id});
            this.props.itemWasChanged(id);
        }

        this.setState({showItems: false});
    };

    render() {
        const {dropDown, selectItem} = this;
        const {items} = this.props
        const {selectedItemId, showItems} = this.state;

        return (<div className="dropdown-container">
                <div className="dropdown-selected"
                     onClick={dropDown}>{items.length !== 0 ? items[selectedItemId].name : ''}</div>

                {showItems
                    ? <img className="dropdown-arrow" src='./icons/up-arrow.svg' alt="icon" onClick={dropDown}/>
                    : <img className="dropdown-arrow" src='./icons/down-arrow.svg' alt="icon" onClick={dropDown}/>}

                <div style={{display: showItems ? "block" : "none"}} className="dropdown-items">
                    {items.map(item => (
                        <div key={item.id}
                             onClick={() => selectItem(item.id)}>
                            {item.name}
                        </div>
                    ))}
                </div>

            </div>
        );
    }
}

export default Dropdown;
