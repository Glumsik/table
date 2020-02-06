import React from 'react';
import axios from 'axios';
import {loadProgressBar} from 'axios-progress-bar'
import './App.css';
import Table from './Table/Table.js';
import _ from 'lodash';
import ReactPaginate from 'react-paginate'; 
import Row from './Row/Row'
import Input from './FormInput/Input'

class App extends React.Component
{
  constructor()
    {
        super();
        this.state =
          {
            textId: null,
            textFirstName: null,
            textLastName: null,
            textEmail: null,
            textPhone: null,
            data: [],
            sort: 'asc',
            sortBy: '',
            selectRow: null,
            currentPage: 0,
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


    addRow = () =>
    {
      const cloneData = this.state.data.concat(); 

      cloneData.unshift({id: this.state.textId, firstName: this.state.textFirstName, lastName: this.state.textLastName, email: this.state.textEmail, phone: this.state.textPhone})

      this.setState(
        {
          data: cloneData
        })
    }


    checkInputID = (e) =>
    {
      this.setState(
        {
          textId: e.target.value
        });
    }


    checkInputFirstName = (e) =>
    {
      this.setState(
        {
          textFirstName: e.target.value
        });
    }


    checkInputLastName = (e) =>
    {
      this.setState(
        {
          textLastName: e.target.value
        });
    }


    checkInputEmail = (e) =>
    {
      this.setState(
        {
          textEmail: e.target.value
        });
    }
     

    checkInputPhone = (e) =>
    {
      this.setState(
        {
          textPhone: e.target.value
        });
    }


    pageSelect = ({selected}) => 
    {
      this.setState({currentPage: selected})
    }
    

    render()
    {
        const pageSize = 10;
        const pageCount = Math.ceil(this.state.data.length / pageSize)
        const cloneData = this.state.data.concat(); 
        const display = _.chunk(cloneData, pageSize)[this.state.currentPage] 

        
        return (
          <div>

            <Input checkInputID={this.checkInputID}  checkInputFirstName={this.checkInputFirstName} checkInputLastName={this.checkInputLastName} checkInputEmail={this.checkInputEmail} checkInputPhone={this.checkInputPhone}/>
            <button className="fetch-button" onClick={this.addRow}>Add Row</button>

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
              /> : null
           }

            {this.state.selectRow ? <Row person={this.state.selectRow} /> : null}
            
          </div>
        );
    }
}

export default App;