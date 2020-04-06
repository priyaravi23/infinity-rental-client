import React from 'react';

const DropDown = (props) => {
    const {
        items,
        textProperty,
        valueProperty,
        onItemSelect,
        selectedItem} = props;

    return (
        <React.Fragment>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle btn-info" type="button" id="dropdownMenu2"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Genres
                </button>

                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    {items.map(item => (
                        <button key={item[valueProperty]}
                            onClick={() => onItemSelect(item)}
                            style={{cursor:'pointer'}}
                            className={item === selectedItem ? "dropdown-item active" : "dropdown-item"}>
                            {item[textProperty]}
                            </button>
                    ))}
                </div>
          </div>
        </React.Fragment>
        );
    };

DropDown.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
};

export default DropDown;
