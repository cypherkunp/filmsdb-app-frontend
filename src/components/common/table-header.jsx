import React, { Component } from 'react';

class TableHeader extends Component {
  raiseSort = path => {
    const { sortColumn, onSort } = this.props;
    let order = 'asc';
    if (sortColumn.path === path) order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    onSort({ path, order });
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;

    if (column.path !== sortColumn.path) return null;
    else {
      if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc" />;
      else return <i className="fa fa-sort-desc" />;
    }
  };

  render() {
    const { columnData } = this.props;
    return (
      <thead>
        <tr>
          {columnData.map(column => {
            const key = column.path || column.key;
            if (column.name) {
              return (
                <th
                  className="clickable"
                  key={key}
                  onClick={() => this.raiseSort(column.path)}
                  scope="col"
                >
                  {column.name} {this.renderSortIcon(column)}
                </th>
              );
            } else {
              return <th key={key} scope="col" />;
            }
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
