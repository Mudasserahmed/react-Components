import logo from "./logo.svg";
import "./App.css";
import BasicInput from "./component/BasicInput";

import { useEffect, useState } from "react";
import BasicSelect from "./component/BasicSelect";
import BasicCheckbox from "./component/BasicCheckbox";
import axios from "axios";
function App() {
  const [users,setUsers] = useState([])
   useEffect(()=>{
    getUsers()
   },[])
   const getUsers = async ()=>{
    try {
      const response = await axios.get("http://localhost:8000/users")
      if(response){
        console.log("users response",response)
        setUsers(response?.data)
      }
    } catch (error) {
      console.log(error)
    } 
   }
  // const onCheckChange = (e)=>{
  //   console.log(e.target.checked)
  //   setChecked(e.target.checked)
  // }
    


  //  const handleSelectChange = (e,index)=>{
  //     console.log(e.target.value)
  //  }
  //  console.log("this is selected option",selectedOption)
  // console.log(selectedOption)


  return (
    <div className="App">
      <BasicSelect options={users}/>
      {/* basic input usage example */}
      {/* <BasicInput  value={inputValue} onChange={setInputValue} />
      <BasicInput  value={inputValue} onChange={setInputValue} />
      <BasicSelect options={options} handleChange={handleSelectChange} values={selectedOption}/>
      <BasicCheckbox checked={checked}  onChange={onCheckChange} label={"basic checkbox"}/> */}
    </div>
  );
}

export default App;
