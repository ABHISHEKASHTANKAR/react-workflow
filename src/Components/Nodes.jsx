import React, {useState} from 'react'
import './Nodes.css'

import { Handle, Position } from 'reactflow';

const Nodes = ({ name, type, input_type, output_type, id, isConnectable }) => {
    const [draggedItem, setDraggedItem] = useState(null);
    const onDragStart = (event, data) => {
        setDraggedItem(data);
        event.dataTransfer.setData('text/plain', JSON.stringify(data));
        event.dataTransfer.effectAllowed = 'move';
    }
    return (
        <div className='custom-node'>
            <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
            <div className="node" key={id} onDragStart={(event) => onDragStart(event, {id, input_type, output_type, name, type})} draggable>
                <div className="input">{input_type}</div>
                <div className="name">{name}</div>
                <div className="output">{output_type}</div>
            </div>
            <Handle type="source" position={Position.Right} isConnectable={isConnectable}/>
        </div>
    )
}

export default Nodes;