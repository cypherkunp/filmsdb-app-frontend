import React, { Component } from 'react';
import TableHeader from './table-header';
import TableBody from './table-body';

class Table extends Component {
  render() {
    const { columnData, sortColumn, rowKey, rowData, onSort } = this.props;

    return (
      <table className="table table-hover">
        <TableHeader columnData={columnData} sortColumn={sortColumn} onSort={onSort} />
        <TableBody rowKey={rowKey} rowData={rowData} columnData={columnData} />
      </table>
    );
  }
}

export default Table;
