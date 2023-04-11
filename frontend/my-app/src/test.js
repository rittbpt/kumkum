import axios from 'axios';
import React, { useState } from 'react';
import Alertt from './Alert';
import './test.css';

function Showuser() {
  const [check, setCheck] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [showAlert, setShowAlert] = React.useState(false);

  const show = () => {
    setCheck(true);
    axios.get('http://localhost:8080/show').then((res) => {
      setData(res.data);
      console.log(data)
      setCheck(true);
    });
  };
  
  const closeshow = () => {
    setCheck(false);
  };

  const logout = () => {
    setShowAlert(true);
  };

  const [ch,setCh] = React.useState(false);
  const handleLogout = () => {
    localStorage.clear();
    setCh(7)
    setShowAlert(true);
    setTimeout(() => {
      window.location.href = './Login';
    }, 1500);
  };

  return (
    <div className="container">
      {showAlert && Alertt(ch)}
      <button onClick={(e) => show()} type="submit" className="btn btn-primary">
        <h3>Show</h3>
      </button>
      {check && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Firstname</th>
                <th>Lastname</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.username}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={(e) => closeshow()} type="submit" className="btn btn-primary">
            Close
          </button>
        </div>
      )}
      <button onClick={(e) => logout()} type="submit" className="btn btn-primary">
        <h3>Logout</h3>
      </button>
      {showAlert && (
        <div className="popup">
          <div className="popup-inner">
            <div>
              <p>Are you sure you want to log out?</p>
              <button onClick={(e) => handleLogout()} type="submit" className="boutton">
                Log out
              </button>
              <button onClick={() => setShowAlert(false)} type="submit" className="boutton">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
  </div>
  );
}

export default Showuser;
