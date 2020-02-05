import React from 'react';
import './Table.css';

export default (props) => (
    <table className="table table-striped table-dark">
        <thead>
        <tr>
            <th onClick={props.onSort.bind(null, 'id')}>
                ID {props.sortBy === 'id' ? <small>{props.sort}</small> : null}
            </th>
            <th onClick={props.onSort.bind(null, 'firstName')}>
                First Name {props.sortBy === 'firstName' ? <small>{props.sort}</small> : null}
            </th>
            <th onClick={props.onSort.bind(null, 'lastName')}>
                Last Name {props.sortBy === 'lastName' ? <small>{props.sort}</small> : null}
            </th>
            <th onClick={props.onSort.bind(null, 'email')}>
                E-mail {props.sortBy === 'email' ? <small>{props.sort}</small> : null}
            </th>
            <th onClick={props.onSort.bind(null, 'phone')}>
                Phone {props.sortBy === 'phone' ? <small>{props.sort}</small> : null}
            </th>
        </tr>
        </thead>
        <tbody>
            { 
                props.dataTable.map((item, index) =>(
                    <tr key={item.id + index + item.phone} onClick={props.rowSelect.bind(null, item)}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
            ))
            }
        </tbody>
    </table>
)
