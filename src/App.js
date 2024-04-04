import logo from "./logo.svg";
import "./App.css";
import BasicInput from "./component/BasicInput";
import { base } from "./util";
function App() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  console.log(base);
  return (
    <div className="App">
      <BasicInput
        minLength={10}
        maxLength={30}
        size={30}
        label={"alphanumeric text"}
        type={"text"}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default App;
