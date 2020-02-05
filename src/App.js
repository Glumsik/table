import React from 'react';
import axios from 'axios';
import {loadProgressBar} from 'axios-progress-bar'
import './App.css';
import Table from './Table/Table.js';
import _ from 'lodash';
import Row from './Row/Row'

class App extends React.Component
{
  constructor()
    {
        super();
        this.state =
          {
            data: [],
            sort: 'asc',
            sortBy: '',
            selectRow: null
          };
    }


    fetchData = async (URL) => 
    {
      loadProgressBar();

      const response = await axios.get(URL);

      this.setState(
        {
          data: response.data,
          sortBy: '',
          selectRow: null
        })
    };


    smallURL = () =>
    {
      this.fetchData('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
    }


    bigURL = () =>
    {
      this.fetchData(' http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
    }

  
    onSort = (sortField) => 
    {
      // const cloneData = this.state.data.concat();
      const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';
      const orderedData = _.orderBy(this.state.data, sortField, sortType);

      this.setState(
        {
          data: orderedData,
          sort: sortType,
          sortBy: sortField
        })
    }


    rowSelect = (row) => 
    {
      this.setState({selectRow: row})
    }
     
    

    render()
    {
        return (
          <div>
          <button className="fetch-button" onClick={this.smallURL}>Fetch Data small Url</button>
          <button className="fetch-button" onClick={this.bigURL}>Fetch Data big Url</button>
          <Table dataTable={this.state.data} onSort={this.onSort} sortBy={this.state.sortBy} sort={this.state.sort} rowSelect={this.rowSelect}/>
          {this.state.selectRow ? <Row person={this.state.selectRow} /> : null}
          </div>
        );
    }
}

export default App;