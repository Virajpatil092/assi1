import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [name, setName] = useState('');
    const [prn, setPrn] = useState('');
    const [year, setYear] = useState('');
    const [branch, setBranch] = useState('');
    const [email, setEmail] = useState('');
    
    const handleName = (e) => {
        setName(e.target.value);
    };

    const handlePrn = (e) => {
        setPrn(e.target.value);
    };

    const handleYear = (e) => {
        setYear(e.target.value);
    };

    const handleBranch = (e) => {
        setBranch(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://localhost:5000/student', {
                name,
                prn,
                year,
                branch,
                email,
            });

            setName('');
            setPrn('');
            setYear('');
            setBranch('');
            setEmail('');

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-9">
                    <h1 className="mb-3">Contact Us</h1>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    required
                                    value={name}
                                    onChange={handleName}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="prn" className="form-label">Your PRN</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="prn"
                                    name="prn"
                                    required
                                    value={prn}
                                    onChange={handlePrn}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="year" className="form-label">Your Year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="year"
                                    name="year"
                                    required
                                    value={year}
                                    onChange={handleYear}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="branch" className="form-label">Your Branch</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="branch"
                                    name="branch"
                                    required
                                    value={branch}
                                    onChange={handleBranch}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Your Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    required
                                    value={email}
                                    onChange={handleEmail}
                                />
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <button
                                            type="button"
                                            className="btn btn-dark w-100 fw-bold"
                                            onClick={handleSubmit}
                                        >
                                            Send
                                        </button>
                                    </div>
                                    <div className="col-md-6">
                                        <Link to="/table" className="btn btn-success w-100 fw-bold">
                                            Go to Table
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;
