import React from 'react';
import './Table.css';

export default (props) => (
    <table className="table table-bordered">
        <thead> 
        <tr className="tableHead">
            <th onClick={() => props.onSort('id')}>
                ID {props.sortBy === 'id' ? <small className='up'>{props.sort === 'asc' ? 'rise' : 'wane'}</small> : null}
            </th>
            <th onClick={() => props.onSort('firstName')}>
                First Name {props.sortBy === 'firstName' ? <small>{props.sort === 'asc' ? 'rise' : 'wane'}</small> : null}
            </th>
            <th onClick={() => props.onSort('lastName')}>
                Last Name {props.sortBy === 'lastName' ? <small>{props.sort === 'asc' ? 'rise' : 'wane'}</small> : null}
            </th>
            <th onClick={() => props.onSort('email')}>
                E-mail {props.sortBy === 'email' ? <small>{props.sort === 'asc' ? 'rise' : 'wane'}</small> : null}
            </th>
            <th onClick={() => props.onSort('phone')}>
                Phone {props.sortBy === 'phone' ? <small>{props.sort === 'asc' ? 'rise' : 'wane'}</small> : null}
            </th>
        </tr>
        </thead>
        <tbody>
            { 
                props.dataTable.map((item, index) => (
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
