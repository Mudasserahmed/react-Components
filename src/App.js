import logo from "./logo.svg";
import "./App.css";
import BasicInput from "./component/BasicInput";

import { useEffect, useState } from "react";
import BasicSelect from "./component/BasicSelect";
import BasicCheckbox from "./component/BasicCheckbox";
import axios from "axios";
import BasicRadio from "./component/BasicRadio";
import SnippingTool from "./component/SnippingTool";
import Chat1 from "./component/Chat1";
import Chat2 from "./component/Chat2";
function App() {
  // const [users, setUsers] = useState([]);
  // const [errors, setErrors] = useState({});
  // const [checked,setChecked] = useState(false)
  // const [formData, setFormData] = useState({
  //   inputValue1: "",
  //   inputValue2: "",
  //   inputValue3: "",
  //   select1: "",
  //   select2: "",
  //   select3: ""
  // });

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // const getUsers = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8000/users");
  //     if (response) {
  //       console.log("users response", response?.data);
  //       setUsers(response?.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // //handle change for text input   
  // const handleChange = (e) => {
  //   console.log(e.target.value)
  //   const { name, value } = e.target;
  //   const alphanumericRegex = /^[a-zA-Z0-9]*$/;
  //   if (alphanumericRegex.test(value)) {
  //     setErrors({ ...errors, [name]: "" });
  //     setFormData({ ...formData, [name]: value });
  //     console.log("Valid input:", value);
  //   } else {
  //     setErrors({ ...errors, [name]: "Invalid input. Only alphanumeric characters are allowed." });
  //     console.log("Invalid input. Only alphanumeric characters are allowed.");
  //   }
  // }
  // //handle change for select input 
  // const handleSelectChange = (e) => {
  //   console.log(e.target.value)
  //   const { name, value } = e.target
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value
  //   }))
  // }
  // const handleSubmit = () => {
  //   console.log("Form Data:", formData);
  // }
  // const handleCheckChange = (e)=>{
  //    console.log(e.target.checked)
  //    setChecked(e.target.checked)
  // }

  return (
    <>
    {/* <h1> Hello world</h1> */}
   {/* <SnippingTool/> */}
{/* <Chat1/> */}
<Chat2/>
      {/* <div>
        <div className="App">
          <div className="grid-container">
            <BasicRadio handleChange={handleChange}/>
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
            <BasicSelect name="select1" handleChange={handleSelectChange} options={users} className="custom-select" />
            <BasicSelect name="select2" handleChange={handleSelectChange} options={users} className="custom-select" />
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
            <BasicCheckbox
              checked={checked}
              label={"accept terms and condition"}
              onChange={handleCheckChange}
            />
             
            <BasicSelect name="select3" handleChange={handleSelectChange} options={users} className="custom-select" />
            <button style={{ cursor: "pointer" }} onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div> */}
    </>
  );
}


export default App;
