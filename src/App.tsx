import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Hi } from "./hi/hi";
import { atom, useAtom } from "./mock-jotai";

export const numAtom = atom(0);
function ShowNumber() {
  const [returnNumVal] = useAtom(numAtom);
  return <p>Show current number: {returnNumVal as number}</p>;
}
function App() {
  const [count, setCount] = useAtom(numAtom);
  const [inputValue, setInputValue] = useState(``);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input
          value={inputValue}
          onChange={(evt) => {
            setInputValue(evt.target.value);
            typeof setCount === `function` && setCount(+evt.target.value);
          }}
        />
        <button>count is {count as number}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Hi children={undefined}></Hi>
      <ShowNumber />
    </div>
  );
}

export default App;
