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
            textIdCorrect: false,
            textFirstNameCorrect: false,
            textLastNameCorrect: false,
            textEmailCorrect: false,
            textPhoneCorrect: false
        };
    }

    checkInputID = (e) =>
    {
      if(e.target.value.length > 0)
      {
        this.setState(
          {
            textId: e.target.value,
            textIdCorrect: true
          });
      }
      else
      {
        this.setState(
          {
            textIdCorrect: false
          });
      }
    }


    checkInputFirstName = (e) =>
    {
      if(e.target.value.length > 0)
      {
        this.setState(
          {
            textFirstName: e.target.value,
            textFirstNameCorrect: true
          });
      }
      else
      {
        this.setState(
          {
            textIdCorrect: false
          });
      }
    }


    checkInputLastName = (e) =>
    {
      if(e.target.value.length > 0)
      {
        this.setState(
          {
            textLastName: e.target.value,
            textLastNameCorrect: true
          });
      }
      else
      {
        this.setState(
          {
            textLastNameCorrect: false
          });
      }
    }


    checkInputEmail = (e) =>
    {
      if(e.target.value.length > 0)
      {
        this.setState(
          {
            textEmail: e.target.value,
            textEmailCorrect: true
          });
      }
      else
      {
        this.setState(
          {
            textEmailCorrect: false
          });
      }
    }
     

    checkInputPhone = (e) =>
    {
      if(e.target.value.length > 0)
      {
        this.setState(
          {
            textPhone: e.target.value,
            textPhoneCorrect: true
          });
      }
      else
      {
        this.setState(
          {
            textPhoneCorrect: false
          });
      }
    }


    render()
    { 
        const correctInputs = (this.state.textIdCorrect && this.state.textFirstNameCorrect && this.state.textLastNameCorrect && this.state.textEmailCorrect && this.state.textPhoneCorrect);
        const inputData = {id: this.state.textId, firstName: this.state.textFirstName, lastName: this.state.textLastName, email: this.state.textEmail, phone: this.state.textPhone} ;
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
                    <input type="email" className="form-control" id="E-mail" placeholder="E-mail" onChange={(e) => this.checkInputEmail(e)}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="Phone">Phone</label>
                    <input type="tel" className="form-control" id="Phone" placeholder="(000)000-0000" onChange={(e) => this.checkInputPhone(e)}></input>
                </div>

            </form>

            {correctInputs ? <button className="btn btn-info" onClick={() => this.props.addRow(inputData)}>Add Row</button> : null}
            </div>
        )
    }
}

export {Input}