import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Tablr from "./components/Tablr/Tablr";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Tablr />
    </div>
  );
}

export default App;
