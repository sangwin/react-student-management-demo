/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import { useReducer } from 'react';
import StudentContext from './students-context';

const initialStudentsList = [
    {
        id: 1,
        first_name: "Sangwin",
        last_name: "Gawande",
        email: "sangwin@yopmail.com",
        phone: 9503733178,
        department: "Science"
    },
    {
        id: 2,
        first_name: "Tom",
        last_name: "Cruise",
        email: "tom.cruise@yopmail.com",
        phone: 8574889658,
        department: "Commerce"
    },
    {
        id: 3,
        first_name: "Tina",
        last_name: "Dillon",
        email: "tina@yopmail.com",
        phone: 7485889658,
        department: "Science"
    },
    {
        id: 4,
        first_name: "John",
        last_name: "Doe",
        email: "john@yopmail.com",
        phone: 9685589748,
        department: "Arts"
    },
    {
        id: 5,
        first_name: "Peter",
        last_name: "Parker",
        email: "peter@yopmail.com",
        phone: 8595856547,
        department: "Engineering"
    }
];

const defaultState = {
    list: initialStudentsList
};

const StudentReducer = (state, action) => {
    if (action.type === "ADD") {
        return {
            ...state,
            list: [...state.list, action.data.student]
        }
    }
    if (action.type === "DELETE") {
        return {
            ...state,
            list: state.list.filter(a => a.id !== action.data.id)
        }
    }
    if (action.type === "UPDATE") {
        return {
            ...state,
            list: state.list.map(a => {
                if (a.id === action.data.id) {
                    a = action.data.student;
                }
                return a;
            })
        }
    }
    return defaultState;
}

const StudentContextProvider = props => {

    const [state, dispatchHandlers] = useReducer(StudentReducer, defaultState)

    const addHandler = (student) => {
        dispatchHandlers({ type: 'ADD', data: { student } })
    }

    const deleteHandler = (id) => {
        dispatchHandlers({ type: 'DELETE', data: { id } })
    }

    const updateHandler = (id, student) => {
        dispatchHandlers({ type: 'UPDATE', data: { id, student } })
    }

    const context = {
        list: state.list,
        add: addHandler,
        delete: deleteHandler,
        update: updateHandler,
    };


    return <StudentContext.Provider value={context}>
        {props.children}
    </StudentContext.Provider>
}

export default StudentContextProvider;

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */