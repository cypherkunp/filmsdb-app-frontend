import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class TableBody extends Component {
  createKey(row, rowKey, column) {
    return row[rowKey] + (column.path || column.key);
  }

  renderCell(row, column) {
    if (column.content) return column.content(row);
    else return _.get(row, column.path);
  }

  render() {
    const { rowKey, rowData, columnData } = this.props;

    return (
      <tbody>
        {rowData.map(row => (
          <tr key={row[rowKey]}>
            {columnData.map(column => (
              <td key={this.createKey(row, rowKey, column)}>{this.renderCell(row, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
