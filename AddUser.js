import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",  
    itemlist: "",
    amount: ""
  });

  const { name, email, address, itemlist, amount} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", user);
    history.push("/");
  };
  return (
    <div className="container">''
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add An Invoice</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Client Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />

            <br/>

          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Client Email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>

          <br/>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Street Address"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>

          <br/>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Item List"
              name="itemlist"
              value={itemlist}
              onChange={e => onInputChange(e)}
            />
          </div>

          <br/>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Amount"
              name="amount"
              value={amount}
              onChange={e => onInputChange(e)}
            />
          </div>

          <br/>

          <button className="btn btn-primary btn-block">Add Invoice</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;