import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  //STATE VARIABLE
  const [data, setData] = useState([]);

  //ERROR CATCHING BLOCK
  try {
    const dataList = async () => {
      const response = await axios.get(
        "https://63209503e3bdd81d8efdb0f9.mockapi.io/vijayDemo"
      );
      //console.log(response.data);
      setData(response.data);
    };
    useEffect(() => {
      dataList();
    }, []);
  } catch (error) {
    console.log(`error happened in get ${error}`);
  }

  //NAVIGATION FOR EDIT
  const handleNavigate = (id) => {
    //console.log(id);
    navigate(`/add-edit/${id}`);
  };

  return (
    <Table striped bordered hover size="xlg">
      <thead>
        <tr>
          <th>S.no</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.email}</td>
              <button onClick={() => handleNavigate(row.id)}>edit</button>&nbsp;
              <button> delete</button>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Home;
