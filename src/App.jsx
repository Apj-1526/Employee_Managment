import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './Components/LogIn/Login'
import ResetPasswordForm from './Components/ResetPasswordForm';
import ProjectDetails from './Components/ProjectDetails'
import FinancialDetails from './Components/FinancialDetails'
import MainForm from './Components/MainForm';
import ViewDetails from './Components/ViewDetails';
import EmployeeDashboard from "./Components/EmployeeDashboard/EmployeeDashboard"
import EditEmployee from './Components/EditEmployee';
import Sidebar from './Components/Modal/SideBar';
import CompletedProject from './Components/Modal/CompletedProject';

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPasswordForm />} />
          <Route path="/home" element={<Sidebar/>} />
          <Route path="/mainform" element={<MainForm/>} />
          <Route path="/projectsection" element={<ProjectDetails />} />
          <Route path="/EmployeeDashboard" element={< EmployeeDashboard/>} />
          <Route path="/edit/:id"element={<EditEmployee/>}/>
          <Route path="/history" element={<CompletedProject/>} />
          <Route path="/FinanceForm" element={<FinancialDetails/>} />
          <Route path="/view" element={<ViewDetails/>} />

        </Routes>
      </div>
    </>
  );
};

export default App;
