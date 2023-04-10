import React, { useState, useEffect } from 'react'
import './Home.css';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom'
import LoaderSpinner from '../Components/LoaderSpinner';

const Home = () => {
    const [workflows, setWorkflows] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://64307b10d4518cfb0e50e555.mockapi.io/workflow?page=1&limit=12");
            const data = await response.json();
            setWorkflows(data);
        }
        getData();
    }, []);
    return (
        <div className='home'>
            <Navbar isModulePage={false} />
            <div className="table">
                {
                    workflows.length === 0
                        ?
                        (<LoaderSpinner />)
                        :
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Input Type</th>
                                    <th>Created at</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    workflows.map((item) => {
                                        let date = item.createdAt.slice(0, 10);
                                        return (
                                            <tr key={item.id}>
                                                <td>
                                                    <Link
                                                        to={`${item.id}`}
                                                        state={{
                                                            id: item.id,
                                                            name: item.name,
                                                            input_type: item.input_type
                                                        }}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </td>
                                                <td>{item.input_type}</td>
                                                <td>{date}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                }
            </div>

        </div>
    )
}

export default Home