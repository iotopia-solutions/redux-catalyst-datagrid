import React from 'react';
import ReactDOM from 'react-dom';
import DataGrid from './components/dataGrid';
import './styles/datagrid.scss';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    const data = [['0, 0', '0, 1', '0, 2'], ['1, 0', '1, 1', '1, 2'], ['2,0', '2,1', '2,2']];
    const columns = ['First', 'Second', 'Third'];

    return(
      <DataGrid data={data} columns={columns} />
    )
  }
}

ReactDOM.render( <App />
  , document.getElementById("main"));
