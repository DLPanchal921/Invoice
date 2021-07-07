import React from "react";
import axios from "axios";
import {  useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users");
        setUser(result.data.reverse());
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
    };

    
    return (
        <>
        <div className="container">
            <div className="py-4">
                <h1> Home Page </h1>
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">NO</th>
                            <th scope="col">Name</th>
                            <th scope="col">EMAIL </th>
                            <th scope="col">ADDRESS</th>
                            <th scope="col">ITEM LIST</th>
                            <th scope="col">AMOUNT</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.itemlist}</td>
                                <td>{user.amount}</td>
                                <td>
                                    <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                                        View
                                    </Link>
                                    <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>
                                        Edit
                                    </Link>
                                    <Link class="btn btn-danger" onClick={() => deleteUser(user.id)}>
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

        </div>
        </>
    );

};

export default Home;