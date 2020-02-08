import React from "react";

class Input extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            textId: '',
            textFirstName: '',
            textLastName: '',
            textEmail: '',
            textPhone: '',
            textIdCorrect: false,
            textFirstNameCorrect: false,
            textLastNameCorrect: false,
            textEmailCorrect: false,
            textPhoneCorrect: false
        };
    }

    checkInputID = (e) =>
    {
      if(!( /\D/g).test(e.target.value))
      {
        this.setState(
          {
            textId: e.target.value,
            textIdCorrect: true
          });
      }
      if(e.target.value.length === 0)
      {
        this.setState(
          {
            textIdCorrect: false
          });
      }
    }


    checkInputFirstName = (e) =>
    {
      if((/^[A-ZА-ЯЁ\s-]+$/i).test(e.target.value))
      {
        this.setState(
          {
            textFirstName: e.target.value,
            textFirstNameCorrect: true
          });
      }
      if(e.target.value.length === 0)
      {
        this.setState(
          {
            textIdCorrect: false
          });
      }
    }


    checkInputLastName = (e) =>
    {
      if((/^[A-ZА-ЯЁ\s-]+$/i).test(e.target.value))
      {
        this.setState(
          {
            textLastName: e.target.value,
            textLastNameCorrect: true
          });
      }
      if(e.target.value.length === 0)
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
      if(!( /\D/g).test(e.target.value))
      {
        this.setState(
          {
            textPhone: e.target.value,
            textPhoneCorrect: true
          });
      }
      if(e.target.value.length === 0)
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
        console.log(this.state.textIdCorrect)
        return (
            <div className="formInput">
            <form>
    
                <div className="form-group">
                    <label htmlFor="inputID">ID</label>
                    <input type="text" className="form-control" id="inputID" placeholder="ID" value={this.state.textId} onChange={(e) => this.checkInputID(e)}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="FirstName">First Name</label>
                    <input type="text" className="form-control" id="FirstName" placeholder="First Name" value={this.state.textFirstName} onChange={(e) => this.checkInputFirstName(e)}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="LastName">Last Name</label>
                    <input type="text" className="form-control" id="LastName" placeholder="Last Name" value={this.state.textLastName} onChange={(e) => this.checkInputLastName(e)}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="E-mail">E-mail</label>
                    <input type="email" className="form-control" id="E-mail" placeholder="E-mail" value={this.state.textEmail} onChange={(e) => this.checkInputEmail(e)}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="Phone">Phone</label>
                    <input type="tel" className="form-control" id="Phone" placeholder="(000)000-0000" value={this.state.textPhone} onChange={(e) => this.checkInputPhone(e)}></input>
                </div>

            </form>

            {correctInputs ? <button className="btn btn-info" onClick={() => this.props.addRow(inputData)}>Add Row</button> : null}
            </div>
        )
    }
}

export {Input}