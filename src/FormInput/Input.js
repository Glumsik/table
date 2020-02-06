import React from "react";

class Input extends React.Component
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
        };
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


    render()
    { 
        return (
            <div>
            <form>
    
                <div className="form-group">
                    <label htmlFor="inputID">ID</label>
                    <input type="text" className="form-control" id="inputID" placeholder="ID" onChange={(e) => this.checkInputID(e)}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="FirstName">First Name</label>
                    <input type="text" className="form-control" id="FirstName" placeholder="First Name" onChange={(e) => this.checkInputFirstName(e)}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="LastName">Last Name</label>
                    <input type="text" className="form-control" id="LastName" placeholder="Last Name" onChange={(e) => this.checkInputLastName(e)}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="E-mail">E-mail</label>
                    <input type="text" className="form-control" id="E-mail" placeholder="E-mail" onChange={(e) => this.checkInputEmail(e)}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="Phone">Phone</label>
                    <input type="text" className="form-control" id="Phone" placeholder="(000)000-0000" onChange={(e) => this.checkInputPhone(e)}></input>
                </div>

            </form>
            <button className="fetch-button" onClick={() => this.props.addRow({id: this.state.textId, firstName: this.state.textFirstName, lastName: this.state.textLastName, email: this.state.textEmail, phone: this.state.textPhone})}>Add Row</button>
            </div>
        )
    }
}

export {Input}