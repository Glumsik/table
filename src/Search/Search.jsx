import React from "react";

class Search extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            searchInput: '',
        };
    }


    searchInput = (e) =>
    {
      this.setState(
        {
          searchInput: e.target.value
        });
    }


    render()
    { 
        return (
            <div>
                <div className="input-group mb-3">
                    <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" value={this.state.searchInput} onChange={(e) => this.searchInput(e)}></input>
                    <div className="input-group-append">
                        <button className="btn btn-secondary" type="button" onClick={() => this.props.searchButton(this.state.searchInput)}>Search</button>
                    </div>
                </div>
            </div>
        )
    }
}

export {Search}