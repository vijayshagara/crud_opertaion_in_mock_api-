import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddEdit = () => {
  const params = useParams();
  console.log(params.id);
  const navigate = useNavigate();
  /* useEffect(()=>{
        getById()
    },[params]) */

    
  //STATE VARIABLE
  const [postData, setPostData] = useState({
    id: "",
    name: "",
    age: "",
    email: "",
  });
  ///TARGET CHANGES
  const handleChange = ({ e, field }) => {
    setPostData((prev) => {
      const update = { ...prev };
      update[field] = e.target.value;
      return update;
    });
  };
  /////GET BY ID
  const getById = async () => {
    const response = await axios.get(
      `https://63209503e3bdd81d8efdb0f9.mockapi.io/vijayDemo/${params.id}`
    );
    console.log(response.data);
  };
  getById();

  ////SUBMIT OPERATION
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://63209503e3bdd81d8efdb0f9.mockapi.io/vijayDemo",
        { ...postData }
      );
      if (response) {
        setPostData({
          name: "",
          age: "",
          email: "",
        });
      }
      if (response) {
        navigate("/");
      }
    } catch (error) {
      console.log({ msg: `post did not work ${error}` });
    }
  };
  return (
    <div>
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        Name:
        <input
          type="text"
          value={postData.name}
          onChange={(e) => {
            handleChange({ e, field: "name" });
          }}
        />
        <br />
        age:
        <input
          type="number"
          value={postData.age}
          onChange={(e) => {
            handleChange({ e, field: "age" });
          }}
        />
        <br />
        Email:
        <input
          type="text"
          value={postData.email}
          onChange={(e) => {
            handleChange({ e, field: "email" });
          }}
        />
        <br />
        <input type="button" value="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default AddEdit;
