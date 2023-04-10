import React, { useState, useRef, useCallback } from 'react'
import Nodes from './Nodes.jsx'
import './Workflow.css'

import ReactFlow, {
  addEdge,
  removeElements,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
} from 'reactflow'

import 'reactflow/dist/style.css';


const nodeTypes = {
  customNode : Nodes,
}


const initialNodes = [
  {
    id: '-1',
    type: 'customNode',
    input_type : "",
    output_type : "A",
    name : "Input Node",
    position: { x: 250, y: 50 }
  }
];




const Workfow = () => {
  const reactFlowWrapper = useRef();
  const defaultZoom = 0.5;

  console.log(reactFlowWrapper.current);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback((event) => {
    event.preventDefault();
    const reactFlowBOunds = reactFlowWrapper.current.getBoundingClientRect();
    const data = JSON.parse(event.dataTransfer.getData('text'));
    console.log("data", data);

    if (typeof data === 'undefined' || !data) {
      return;
    }

    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBOunds.left,
      y: event.clientY - reactFlowBOunds.top,
    });


    const newNode = {
      id: data.id,
      type : data.type,
      position,
      input_type : data.input_type,
      output_type : data.output_type,
    };

    console.log(newNode);

    setNodes((nds) => nds.concat(newNode));

  }, [reactFlowInstance]);





  return (
    <div className='workflow'>
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              nodes = {nodes}
              edges = {edges}
              zoom = {defaultZoom}
              nodeTypes= {nodeTypes}
              onNodesChange = {onNodesChange}
              onEdgeChange = {onEdgesChange}
              onConnect = {onConnect}
              onInit = {setReactFlowInstance}
              onDrop = {onDrop}
              onDragOver = {onDragOver}
              fitView
            >
            <Controls className='controls'/>
            <Background  gap={8} color = {"#79bcff"}/>
            </ReactFlow>
          </div>
    </div>
  )
}

export default Workfow