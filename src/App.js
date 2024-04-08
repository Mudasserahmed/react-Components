import logo from "./logo.svg";
import "./App.css";
import BasicInput from "./component/BasicInput";

import { useState } from "react";
import BasicSelect from "./component/BasicSelect";
import BasicCheckbox from "./component/BasicCheckbox";
function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption , setSelectedOption] = useState([]);
  const [checked,setChecked] = useState(false)
  const onCheckChange = (e)=>{
    console.log(e.target.checked)
    setChecked(e.target.checked)
  }
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option4', label: 'Option 4' },
  ];


   const handleSelectChange = (e,index)=>{
      console.log(e.target.value)
   }
   console.log("this is selected option",selectedOption)
  console.log(selectedOption)


  return (
    <div className="App">
      {/* basic input usage example */}
      <BasicInput  value={inputValue} onChange={setInputValue} />
      <BasicInput  value={inputValue} onChange={setInputValue} />
      <BasicSelect options={options} handleChange={handleSelectChange} values={selectedOption}/>
      <BasicCheckbox checked={checked}  onChange={onCheckChange} label={"basic checkbox"}/>
    </div>
  );
}

export default App;
