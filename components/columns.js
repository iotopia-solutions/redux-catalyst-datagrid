import React, {PropTypes, Component} from 'react';

export default class Columns extends Component {
    propTypes: {
        columns: React.PropTypes.array,
        columnNames: React.PropTypes.array
    },

    render() {
        const columnNames = this.props.columnNames || {};

        return (
            <tr>
                {
                    columnNames.map((col) => {
                        return <th>{col}</th>;
                    })
                }
            </tr>
        );
    }
});

