/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StudentContext from "./students-context";

function Add() {

    const navigate = useNavigate();
    const params = useParams();
    const id = +params.id;

    const [student, setStudent] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
    })
    const [error, setError] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
    })
    const stdCtx = useContext(StudentContext);
    useEffect(() => {
        if (id) {
            const index = stdCtx.list.findIndex(a => a.id.toString() === id.toString());
            setStudent(stdCtx.list[index]);
        }
    }, [id, stdCtx.list])

    const doRegister = (event) => {
        event.preventDefault();
        if (id) {
            stdCtx.update(id, student);
        } else {
            student.id = Date.now().toString();
            stdCtx.add(student);
        }
        navigate({ pathname: `/` });
    }

    const handleInput = (event) => {
        if (event.target.id === 'phone') {
            const phoneNum = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            setError((state) => ({
                ...state,
                [event.target.id]: !event.target.value.match(phoneNum)
            }));
        }
        if (event.target.id === 'email') {
            const email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            setError((state) => ({
                ...state,
                [event.target.id]: !event.target.value.match(email)
            }));
        }
        if (event.target.id === 'first_name' || event.target.id === 'last_name') {
            setError((state) => ({
                ...state,
                [event.target.id]: event.target.value.length <= 3
            }));
        }
        setStudent((state) => ({
            ...state,
            [event.target.id]: event.target.value
        }));
    }

    return (
        <form className="w3-container" onSubmit={doRegister}>
            <div className="w3-panel w3-round-small w3-teal">
                <h3>
                    <span>
                        {id ? 'Student Registration' : 'Student Update'}
                    </span>
                    <Link to="/" className="w3-button w3-green custom-button">
                        <i className="w3-medium fa fa-chevron-left"></i>
                        Back
                    </Link>
                </h3>
            </div>

            <label className="w3-text-blue"><i className="w3-medium custom-icon fa fa-user"></i><b>First Name</b></label>
            <input className="w3-input w3-border" type="text" id="first_name" required value={student.first_name} onChange={handleInput} />
            {error.first_name ? <div className="w3-panel w3-red" >Please enter minimum 3 characters</div> : null}

            <label className="w3-text-blue"><i className="w3-medium custom-icon fa fa-user"></i><b>Last Name</b></label>
            <input className="w3-input w3-border" type="text" id="last_name" required value={student.last_name} onChange={handleInput} />
            {error.last_name ? <div className="w3-panel w3-red" >Please enter minimum 3 characters </div> : null}

            <label className="w3-text-blue"><i className="w3-medium custom-icon fa fa-envelope-o"></i><b>Email Address</b></label>
            <input className="w3-input w3-border" type="email" id="email" required value={student.email} onChange={handleInput} />
            {error.email ? <div className="w3-panel w3-red" >Please enter valid email address</div> : null}

            <label className="w3-text-blue"><i className="w3-medium custom-icon fa fa-phone"></i><b>Phone</b></label>
            <input className="w3-input w3-border" type="tel" id="phone" required value={student.phone} onChange={handleInput} />
            {error.phone ? <div className="w3-panel w3-red" >Please enter valid phone number</div> : null}
            <br />
            <button className="w3-btn w3-blue" type="submit">
                <span>{id ? 'Register' : 'Update'}</span>
                <i className="w3-medium fa fa-check"></i>
            </button>
        </form >

    )
}

export default Add;

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
