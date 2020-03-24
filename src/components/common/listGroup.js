import React from 'react';

const ListGroup = (props) => {
    const {
        items,
        textProperty,
        valueProperty,
        onItemSelect,
        selectedItem} = props;

    return (
        <div>
            <ul className="list-group">
                {items.map(item => (
                    <li key={item[valueProperty]}
                        onClick={() => onItemSelect(item)}
                        style={{cursor:'pointer'}}
                        className={item === selectedItem ? "list-group-item list-group-item-dark active" : "list-group-item list-group-item-dark"}>
                        {item[textProperty]}
                        </li>
                ))}
          </ul>
        </div>
        );
    };

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
};

export default ListGroup;
