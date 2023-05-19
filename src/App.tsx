import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        low level component library
        <a href="http://ui.chenyuhao.site">http://ui.chenyuhao.site</a>
      </div>
      <div>
        blog
        <a href="http://blog.chenyuhao.site">http://blog.chenyuhao.site</a>
      </div>
      <div>
        D3 React visualization
        <a href="http://viz.chenyuhao.site">http://viz.chenyuhao.site</a>
      </div>
    </>
  );
}

export default App;
