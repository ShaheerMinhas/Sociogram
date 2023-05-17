import React, { useState, useEffect } from 'react';
import './Table.css';

const Table = () => {
  const [peeps, setPeeps] = useState([]);
  const [fID, setfID] = useState('');

  const getPeeps = async () => {
    try {
      const response = await fetch("http://localhost:5000/meetpeople?", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: localStorage.getItem('logid')
        })
      });
      const jsonData = await response.json();
      console.log({ jsonData });
      setPeeps(jsonData);
    } catch (err) {
      console.error(err.message);
      alert("Error in getting peeps");
    }
  };

  useEffect(() => {
    console.log("i call meetpeople");
    getPeeps();
  }, []);

  const getImgURL = () => {
    let options = [100, 200, 250];
    let num = Math.floor(Math.random() * 3);
    let x = options[num];
    num = Math.floor(Math.random() * 3);
    let y = options[num];
    return `https://picsum.photos/${x}/${x}/`;
  }; 

  const handleFollow = async (followId) => {
    try {
      const response = await fetch('http://localhost:5000/followuser' , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: localStorage.getItem('logid'),
          followId: followId
        })
      });
      const res = await response.json();
      if (res.status) {
        alert('User Followed Successfully');
      } else {
        alert('Failed to follow the user');
      }
    } catch (err) {
      console.error(err.message);
      alert('Error occurred while following the user');
    }
  };

  return (
    <div className='table-responsive'>
      <table className='table'>
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>Details</th>
            <th>Follow</th>
          </tr>
        </thead>
        <tbody>
          {peeps.map((person, index) => (
            <tr key={index}>
              <td>
                <div className="avatar max-w-xs">
                  <div className="mask">
                    <img src={getImgURL()} alt="profile pic" />
                  </div>
                </div>
              </td>
              <td>
                <div className="max-height-20">
                  <h3>{person.username}</h3>
                  <h4>{person.email}</h4>
                </div>
              </td>
              <td>
                <button
                  className='btn btn-primary'
                  onClick={() => handleFollow(person.id)}
                >
                  Follow
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;