import React, {PropTypes, Component} from 'react';
import Columns from './columns';

export default class DataGrid extends Component {
    propTypes: {
        data: React.PropTypes.array,
        columns: React.PropTypes.array,
        columnNames: React.PropTypes.array,
        row: React.PropTypes.func,
        children: React.PropTypes.object
    },

    getDefaultProps() {
        return {
            columnNames: {},
            data: [],
            columns: []
        };
    },

    render() {
        const data = this.props.data || [];
        const columns = this.props.columns || [];
        const columnNames = this.props.columnNames || {};
        const rowProps = this.props.row || noop;

        return (
            <table {...props}>
                <thead><Columns columnNames={columnNames} columns={columns} /></thead>
                <tbody>
                    {data.map((row, i) => <tr key={'datagrid-row' + i} {...rowProps(row, i)}>{
                        columns.map((column, j) => {
                            const property = column.property;
                            const value = row[property];
                            const cell = column.cell || [identityFunc];
                            let content = undefined;

                            cell = typeof cell === 'function' ? [cell] : cell;

                            if (typeof cell === 'function') {
                                content = cell(value, data, i, property);
                            }
                            else {
                                content = value;
                            }

                            content = content || {};

                            return <td key={j + '-cell'} {...content.props}>{content.value}</td>;
                        }
                    )}</tr>)}
                </tbody>
                {this.props.children}
            </table>
        );
    }
});

function identityFunc(x) {
    return x;
}

function noop() {}

