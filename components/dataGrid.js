import React, {PropTypes, Component} from 'react';
import Columns from './columns';

export default class DataGrid extends Component {
    propTypes: {
        data: React.PropTypes.array,
        columns: React.PropTypes.array,
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
        var data = this.props.data;
        var columns = this.props.columns;
        var rowProps = this.props.row || noop;

        return (
            <table {...props}>
                <thead><Columns columns={columns} /></thead>
                <tbody>
                    {data.map((row, i) => <tr key={'datagrid-row' + i} {...rowProps(row, i)}>{
                        columns.map((column, j) => {
                            var property = column.property;
                            var value = row[property];
                            var cell = column.cell || [identityFunc];
                            var content;

                            cell = typeof cell === 'function' ? [cell] : cell;

                            content = reduce(cell, (v, fn) => {
                                if(React.isValidElement(v.value)) {
                                    return v;
                                }

                                var val = fn(v.value, data, i, property);

                                if(!isPlainObject(val) || val.value === undefined) {
                                    // formatter shortcut
                                    val = {value: val};
                                }

                                return {
                                    value: val.value === undefined ? v.value : val.value,
                                    props: Object.assign({}, v.props, val.props)
                                };
                            }, {value: value, props: {}});

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

