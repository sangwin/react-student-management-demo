/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import React from 'react'

const StudentContext = React.createContext({
    list: [],
    add: (student) => { },
    delete: (id) => { },
    update: (id, student) => { },
    search: (str) => { },
});

export default StudentContext;

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */