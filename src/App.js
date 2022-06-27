/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
import Login from './auth/Login';
import AuthContextProvider from './auth/AuthContextProvider';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard'
import Add from './student/Add'
import StudentContextProvider from './student/StudentContextProvider';
import List from './student/List';


function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/" element={<StudentContextProvider><Dashboard /></StudentContextProvider>}>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Add />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  )
}

export default App;

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */