import logo from "./logo.svg";
import "./App.css";
import BasicInput from "./component/BasicInput";

import { useEffect, useState } from "react";
import BasicSelect from "./component/BasicSelect";
import BasicCheckbox from "./component/BasicCheckbox";
import axios from "axios";
function App() {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    inputValue1: "",
    inputValue2: "",
    inputValue3: "",
    select1:"",
    select2:""
  });

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users");
      if (response) {
        console.log("users response", response?.data);
        setUsers(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const alphanumericRegex = /^[a-zA-Z0-9]*$/;
    if (alphanumericRegex.test(value)) {
      setErrors({ ...errors, [name]: "" });
      setFormData({ ...formData, [name]: value });
      console.log("Valid input:", value);
    } else {
      setErrors({ ...errors, [name]: "Invalid input. Only alphanumeric characters are allowed." });
      console.log("Invalid input. Only alphanumeric characters are allowed.");
    }
  }
const handleSelectChange  = (e)=>{
  console.log(e.target.value)
  const {name,value} = e.target
  setFormData((prev)=>({
    ...prev,
    [name]:value
  }))
}

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // You can perform further actions here, like sending the data to the server
  }

  return (
    <>
      <div className="App">
        <div className="grid-container">
          <BasicInput
            name="inputValue1"
            error={errors.inputValue1}
            type="text"
            placeholder="Enter text here..."
            value={formData.inputValue1}
            onChange={handleChange}
            minLength={3}
            className="custom-input"
            maxLength={20}
            size={30}
          />
          <BasicSelect name = "select1" handleChange={handleSelectChange}   options={users} className="custom-select" />
          <BasicSelect selectedOption={formData?.select2} options={users} className="custom-select" />
          <BasicInput
            name="inputValue2"
            error={errors.inputValue2}
            type="text"
            placeholder="Enter text here..."
            value={formData.inputValue2}
            onChange={handleChange}
            minLength={3}
            className="custom-input"
            maxLength={20}
            size={30}
          />
          <BasicInput
            name="inputValue3"
            error={errors.inputValue3}
            type="text"
            placeholder="Enter text here..."
            value={formData.inputValue3}
            onChange={handleChange}
            minLength={3}
            className="custom-input"
            maxLength={20}
            size={30}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
}


export default App;
