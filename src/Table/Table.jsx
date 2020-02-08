import React from 'react';
import './Table.css';

export default (props) => (
    <table className="table table-bordered">
        <thead> 
        <tr className="tableHead">
            <th onClick={() => props.onSort('id')}>
                ID {props.sortBy === 'id' ? <div className={props.sort === 'asc' ? 'up' : 'down'}></div> : null}
            </th>
            <th onClick={() => props.onSort('firstName')}>
                First Name {props.sortBy === 'firstName' ? <div className={props.sort === 'asc' ? 'up' : 'down'}></div> : null}
            </th>
            <th onClick={() => props.onSort('lastName')}>
                Last Name {props.sortBy === 'lastName' ? <div className={props.sort === 'asc' ? 'up' : 'down'}></div> : null}
            </th>
            <th onClick={() => props.onSort('email')}>
                E-mail {props.sortBy === 'email' ? <div className={props.sort === 'asc' ? 'up' : 'down'}></div> : null}
            </th>
            <th onClick={() => props.onSort('phone')}>
                Phone {props.sortBy === 'phone' ? <div className={props.sort === 'asc' ? 'up' : 'down'}></div> : null}
            </th>
        </tr>
        </thead>
        <tbody>
            { 
                props.dataTable.map((item, index) => (
                    <tr key={item.id + index + item.phone} onClick={() => props.rowSelect(item)}>
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
