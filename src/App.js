import "./App.css";
import { useState } from "react";

function App() {
  // State - Lab 1
  // const [state, setState] = useState(false)
  // return (
  //   <button onClick={() => setState(!state)} hidden={state}>Click to hide me</button>
  // );

  // State - Lab 2
  // const [state, setState] = useState(false);
  // return (
  //   <button
  //     style={{ width: 100, height: 50, padding: 0 }}
  //     onClick={() => setState(!state)}
  //   >
  //     <p hidden={state}>Click to hide me</p>
  //   </button>
  // );

  // State - Lab 3
  // const [hidden, setHidden] = useState(false);
  // const [state, setState] = useState("Hide");
  // const handleButton = () => {
  //   setHidden(!hidden);
  //   setState(
  //     (
  //       state // doesn't work without stating the parameter ?
  //     ) => (state === "Hide" ? (state = "Show") : (state = "Hide"))
  //   );
  // };
  // return (
  //   <button
  //     style={{ width: 100, height: 50, padding: 0 }}
  //     onClick={handleButton}
  //   >
  //     <p hidden={hidden}>{state}</p>
  //   </button>
  // );

  // State - Lab 4
  // const [count, setCount] = useState(0)
  // return (
  //   <div>
  //     <p style={{ display: "inline" }}>Enter Dollar: </p>
  //     <input onChange={(event) => setCount(event.target.value)}></input>
  //     <p>Convert to Baht: <span style={{color: "red"}}>{count*30}</span> Baht</p>
  //   </div>
  // );

  // State - Lab 5
  // const [number, setNumber] = useState(undefined);
  // const [empty, setEmpty] = useState(false);
  // const [invalidType, setInvalidType] = useState(false);
  // const [invalidLength, setInvalidLength] = useState(false);
  // const handleClick = () => {
  //   if (number === undefined) {
  //     setEmpty(true);
  //   } else if (isNaN(number)) {
  //     setInvalidType(true)
  //   } else if (number.length !== 10) {
  //     setInvalidLength(true)
  //   } else {
  //     alert('Your number is valid!')
  //   }
  // };
  // return (
  //   // doesn't work when used form ??
  //   <div>
  //     <input
  //       type="text"
  //       placeholder="Phone number"
  //       onChange={(e) => setNumber(e.target.value)}
  //       className={(empty || invalidType || invalidLength) ? "invalid" : ""}
  //     ></input>
  //     <button onClick={handleClick}>Check</button>
  //     <p style={{ margin: 0, fontSize: 12, color: "red" }} hidden={!empty}>
  //       Phone number is required!
  //     </p>
  //     <p style={{ margin: 0, fontSize: 12, color: "red" }} hidden={!invalidType}>
  //       Phone number is invalid!
  //     </p>
  //     <p style={{ margin: 0, fontSize: 12, color: "red" }} hidden={!invalidLength}>
  //       Invalid length!
  //     </p>
  //   </div>
  // );

  // The above code can be simplified by declaring an 'error'
  // state that corresponds to the reason for the error
  // And rendering the message inside the <p> tag
  // To illustrate:
  // const [error, setError] = useState("")
  // {error === "" ? null : <p style={{color: "red"}}>{error}</p>}

  // State - Lab 6
  // (P Earth's solution)
  // const provinces = ["Bangkok", "Tak", "Loei"];
  // const districts = {
  //   BANGKOK: ["BKK1", "BKK2", "BKK3"],
  //   TAK: ["TAK1", "TAK2", "TAK3"],
  //   LOEI: ["LOEI1", "LOEI2", "LOEI3"],
  // };
  // const [selectedProvince, setSelectedProvince] = useState("BANGKOK");
  // const optionProvinces = Object.keys(districts).map((el) => (
  //   <option value={el}>{el}</option>
  // ));
  // const optionDistricts = districts[selectedProvince].map((el) => (
  //   <option value={el}>{el}</option>
  // ));
  // return (
  //   <div>
  //     <div>
  //       <label>Province: </label>
  //       <select onChange={(e) => setSelectedProvince(e.target.value)}>
  //         {optionProvinces} // each element from the array is automatically concatenated (?)
  //       </select>
  //     </div>
  //     <div>
  //       <label>District: </label>
  //       <select>{optionDistricts}</select>
  //     </div>
  //   </div>
  // );
}

export default App;
