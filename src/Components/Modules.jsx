import React, { useState, useEffect } from 'react'
import './Modules.css'
import LoaderSpinner from './LoaderSpinner'
import Nodes from './Nodes';

const Modules = (props) => {
  const url = ` https://64307b10d4518cfb0e50e555.mockapi.io/modules?page=${props.page}&limit=5`

  

  const [modules, setModules] = useState([]);

  const getModules = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setModules(data);
  }

  useEffect(() => {
    getModules();
  }, [props.page])

  const newArr = modules.map((item)=>{
    console.log(item);
    return {
      data : item,
      type : "customNode"
    }
  })

  return (
    <div className='modules'>
      {
        newArr.length === 0
          ?
          <LoaderSpinner />
          :
          newArr.map((item) => {
            console.log(item);
            return (
              <Nodes key={item.id} id={item.data.id} name = {item.data.name} input_type = {item.data.input_type} output_type = {item.data.output_type} type={item.type}/>
            )
          })
      }
    </div>
  )
}

export default Modules