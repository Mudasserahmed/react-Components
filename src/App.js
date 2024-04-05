import logo from "./logo.svg";
import "./App.css";
import BasicInput from "./component/BasicInput";

import { useState } from "react";
import BasicSelect from "./component/BasicSelect";
function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption , setSelectedOption] = useState([]);
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

      <BasicSelect options={options} handleChange={handleSelectChange} values={selectedOption}/>


    </div>
  );
}

export default App;
