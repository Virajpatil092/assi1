import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/student');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/student/${id}`);
            console.log(response.data);

            setData(data.filter(item => item.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container my-5">
            <h1 className="mb-3">Student Table</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>PRN</th>
                        <th>Year</th>
                        <th>Branch</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.prn}</td>
                            <td>{item.year}</td>
                            <td>{item.branch}</td>
                            <td>{item.email}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Delete
                                </button>
                                <Link
                                    to={`/update/${item.id}`}
                                    className="btn btn-warning mx-2"
                                >
                                    Update
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-3">
                <Link to="/" className="btn btn-primary">
                    Go Back
                </Link>
            </div>
        </div>
    );
};

export default Table;
