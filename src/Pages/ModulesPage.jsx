import React, { useState } from 'react'
import './ModulesPage.css'
import Navbar from '../Components/Navbar'
import Workflow from '../Components/Workflow'
import { useLocation } from 'react-router-dom'
import Modules from '../Components/Modules'
import { Pagination } from '@mui/material'
import { ReactFlowProvider } from 'reactflow'
import 'reactflow/dist/style.css';

const ModulesPage = () => {

  const location = useLocation();
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  }

  return (
    <div className='module-page'>
      <Navbar isModulePage={true} name={location.state.name} />

      <ReactFlowProvider>
        <div className="main">
          <div className="left">
            <div className="title">Modules</div>
            <div className="modules-container">
              <Modules page={page} />
              <div className="pagination">
                <Pagination count={20} page={page} onChange={handleChange} />
              </div>
            </div>
          </div>
          <div className="right">
            <Workflow />
          </div>
        </div>
      </ReactFlowProvider>
    </div >
  )
}

export default ModulesPage