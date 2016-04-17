import React from 'react';
import ReactDOM from 'react-dom';
import DataGrid from './components/dataGrid';
import './styles/datagrid.scss';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    const data = [{revenue: 1000, costs: 500, misc: 'not sure'}, {revenue: 1200, costs: 600, misc: ''}];

    const columns = ['revenue', 'costs', 'misc'];
    const columnNames = ['Revenue', 'My Costs', 'Misc.'];

    return(
      <DataGrid data={data} columns={columns} columnNames={columnNames} />
    )
  }
}

ReactDOM.render( <App />
  , document.getElementById("main"));
