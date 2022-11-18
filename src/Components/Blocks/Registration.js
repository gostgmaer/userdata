import React, { useState } from "react";
import { database } from "../../services/Firebase";
import { ref, push, child, update } from "firebase/database";

function Registration() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target.value;
    console.log(value);
    if (id === firstName) {
      setFirstName(value);
    }
    if (id === lastName) {
      setLastName(value);
    }
    if (id === email) {
      setEmail(value);
    }
    if (id === password) {
      setPassword(value);
    }
    if (id === confirmPassword) {
      setConfirmPassword(value);
    }
  };
  const handleSubmit = () => {
    console.log(firstName, lastName, email, password, confirmPassword);
    let obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    const newPostKey = push(child(ref(database), "posts")).key;
    const updates = {};
    updates["/" + newPostKey] = obj;
    return update(ref(database), updates);
  };
  return (
    <div className="card-body card col-6 m-auto ">
      <div className="form">
        <div className="form-body">
          <div className="username">
            <label className="form__label">First Name </label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              className="form__input"
              value={firstName}
              type="text"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="lastname">
            <label className="form__label">Last Name </label>
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              name=""
              id="lastName"
              value={lastName}
              className="form__input"
              placeholder="LastName"
            />
          </div>
          <div className="email">
            <label className="form__label">Email </label>
            <input
              type="email"
              onChange={e=>setEmail(e.target.value)}
              id="email"
              value={email}
              className="form__input"
              placeholder="Email"
            />
          </div>
          <div className="password">
            <label className="form__label">Password </label>
            <input
              className="form__input"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="confirm-password">
            <label className="form__label">Confirm Password </label>
            <input
              className="form__input"
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              value={confirmPassword}
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="footer">
          <button type="submit" onClick={() => handleSubmit()} className="btn btn-primary">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
