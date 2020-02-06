import React from 'react';
import axios from 'axios';
import {loadProgressBar} from 'axios-progress-bar'
import './App.css';
import Table from './Table/Table.js';
import _ from 'lodash';
import ReactPaginate from 'react-paginate'; 
import Row from './Row/Row'
import {Input} from './FormInput/Input'
import {Search} from './Search/Search'

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
        selectRow: null,
        currentPage: 0,
        searchInput: null
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
        currentPage: 0,
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
      if(Object.keys(row).length < 7)
      {
        return
      }
      this.setState({selectRow: row})
    }


    addRow = (newRow) =>
    {
      const cloneData = this.state.data.concat(); 
      
      cloneData.unshift(newRow)

      this.setState(
        {
          data: cloneData
        })
    }


    pageSelect = ({selected}) => 
    {
      this.setState({currentPage: selected})
    }


    searchButton = (search) =>
    {
      this.setState({searchInput: search})
    }


    getSearchData =() =>
    {
      const search = this.state.searchInput 

      if (!search) 
      {
        return this.state.data
      }

      return this.state.data.filter(item => {
        return (item['id']+'').includes(search)
      || item['firstName'].toLowerCase().includes(search.toLowerCase())
      || item['lastName'].toLowerCase().includes(search.toLowerCase())
      || item['email'].toLowerCase().includes(search.toLowerCase())
      })
     
    }


    render()
    {
        const pageSize = 15;
        const pageCount = Math.ceil(this.getSearchData().length / pageSize)
        const cloneData = this.getSearchData().concat(); 
        const display = _.chunk(cloneData, pageSize)[this.state.currentPage] 
        
        return (
          <div>

            <Input addRow={this.addRow}/>

            <Search searchInput={this.searchInput} searchButton={this.searchButton}/>

            <button className="fetch-button" onClick={this.smallURL}>Fetch Data small Url</button>
            <button className="fetch-button" onClick={this.bigURL}>Fetch Data big Url</button>

            <Table dataTable={(display !== undefined) ? display : []} onSort={this.onSort} sortBy={this.state.sortBy} sort={this.state.sort} rowSelect={this.rowSelect}/>

          
            {
              this.state.data.length > pageSize 
              ? <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.pageSelect}
                containerClassName={'pagination'}
                activeClassName={'active'}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                nextClassName="page-item"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                forcePage={this.state.currentPage}
              /> : null
           }

            {this.state.selectRow ? <Row person={this.state.selectRow} /> : null}
            
          </div>
        );
    }
}

export default App;