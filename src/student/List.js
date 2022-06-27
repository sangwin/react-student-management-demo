/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StudentContext from "./students-context";

function List() {

    const navigate = useNavigate();

    const [search, setSearch] = useState('');

    const stdCtx = useContext(StudentContext);

    const deleteStudent = (id) => {
        stdCtx.delete(id);
    }

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const goToDetail = (id) => {
        navigate({ pathname: `/update/${id}` });
    }

    const filterByStr = (search, value) => {
        if (typeof value === "string" || typeof value === "number") {
            return value.toString().includes(search)
        } else {
            return Object.values(value).some(val => filterByStr(search, val));
        }
    }

    const searchStd = (list) => {
        return list.filter(value => {
            if (search.trim().length > 0) {
                return filterByStr(search, value) ? value : null;
            } else {
                return value;
            }
        })
    }

    return (
        <div className="w3-container">
            <div className="w3-panel w3-round-small w3-teal">
                <h3>Student List
                    <Link to="/add">
                        <button className="w3-button w3-green custom-button">
                            <i className="w3-medium  fa fa-plus"></i> Add New Student
                        </button>
                    </Link>
                </h3>
            </div>
            <span className="search_panel">
                <i className="w3-medium fa fa-search"></i>
                Search : <input type="text" value={search} onChange={handleSearch} />
                {search ? <i className="w3-medium fa fa-close search_back" onClick={() => { setSearch('') }}></i> : null}
            </span>
            {searchStd(stdCtx.list).length === 0 ?
                <div className="w3-panel w3-red">
                    <h3>Oh no</h3>
                    <p>No students found <span> with search <b>"{search}"</b></span> </p>
                </div> :
                <div className="w3-panel w3-light-grey w3-padding-16 w3-card-2">
                    <table className="w3-table w3-striped w3-bordered">
                        <thead>
                            <tr>
                                <th><i className="w3-medium custom-icon fa fa-refresh"></i> Sr. No.</th>
                                <th><i className="w3-medium custom-icon fa fa-user"></i> First Name</th>
                                <th><i className="w3-medium custom-icon fa fa-user"></i> Last Name</th>
                                <th><i className="w3-medium custom-icon fa fa-envelope-o"></i> Email</th>
                                <th><i className="w3-medium custom-icon fa fa-phone"></i> Phone</th>
                                <th><i className="w3-medium custom-icon fa fa-pencil"></i> Update</th>
                                <th><i className="w3-medium custom-icon fa fa-trash"></i> Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchStd(stdCtx.list).map((student, i) => {
                                return <tr key={i} onClick={() => goToDetail(student.id)}>
                                    <td>{i + 1}</td>
                                    <td className="pointer" >{student.first_name} </td>
                                    <td className="pointer" >{student.last_name}</td>
                                    <td className="pointer" >  {student.email}</td >
                                    <td className="pointer" >  {student.phone} </td >
                                    <td>
                                        <Link to="/add">
                                            <button className="w3-button w3-blue">Update</button>
                                        </Link>
                                    </td >
                                    <td>
                                        <button onClick={(event) => { event.stopPropagation(); deleteStudent(student.id); }} className="w3-button w3-red">
                                            Delete
                                        </button>
                                    </td >
                                </tr >
                            })}
                        </tbody>
                    </table >
                </div >
            }
        </div >
    )
}

export default List;

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */