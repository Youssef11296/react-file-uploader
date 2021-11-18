// Modules & Hooks
import { useState } from "react";
// Screens
import Home from "./screens/Home/Home";
// Styles
import "./App.scss";

const App = () => {
  const [overlay, setOverlay] = useState(false);

  return (
    <div className="app">
      <Home overlay={overlay} setOverlay={setOverlay} />
    </div>
  );
};

export default App;
