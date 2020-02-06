import React from 'react';


export default (props) => (
    <div>
        <form>

            <div className="form-group">
                <label htmlFor="inputID">ID</label>
                <input type="text" className="form-control" id="inputID" placeholder="ID" onChange={(e) => props.checkInputID(e)}></input>
            </div>

            <div className="form-group">
                <label htmlFor="FirstName">First Name</label>
                <input type="text" className="form-control" id="FirstName" placeholder="First Name" onChange={(e) => props.checkInputFirstName(e)}></input>
            </div>

            <div className="form-group">
                <label htmlFor="LastName">Last Name</label>
                <input type="text" className="form-control" id="LastName" placeholder="Last Name" onChange={(e) => props.checkInputLastName(e)}></input>
            </div>

            <div className="form-group">
                <label htmlFor="E-mail">E-mail</label>
                <input type="text" className="form-control" id="E-mail" placeholder="E-mail" onChange={(e) => props.checkInputEmail(e)}></input>
            </div>

            <div className="form-group">
                <label htmlFor="Phone">Phone</label>
                <input type="text" className="form-control" id="Phone" placeholder="(000)000-0000" onChange={(e) => props.checkInputPhone(e)}></input>
            </div>

        </form>
    </div>
)