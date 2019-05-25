import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListGroup extends Component {
  render() {
    const { itemList, selectedItem, itemNameProperty, itemIdProperty, onItemSelect } = this.props;
    const itemClass = 'list-group-item d-flex justify-content-between align-items-center';
    return (
      <ul className="list-group">
        {itemList.map(item => (
          <li
            key={item[itemIdProperty]}
            className={selectedItem === item[itemNameProperty] ? `${itemClass} active` : itemClass}
            onClick={() => {
              onItemSelect(item[itemNameProperty]);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    );
  }
}

ListGroup.defaultProps = {
  itemNameProperty: 'name',
  itemIdProperty: '_id'
};

ListGroup.propTypes = {
  itemList: PropTypes.array.isRequired,
  itemIdProperty: PropTypes.string.isRequired,
  itemNameProperty: PropTypes.string.isRequired,
  selectedItem: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired
};

export default ListGroup;
