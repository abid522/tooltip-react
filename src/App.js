import Tooltip from "./Tooltip.js";
import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [isHidden, setIsHidden] = useState(true);

  function handleIn() {
    setIsHidden(false);
  }

  function handleOut() {
    setIsHidden(true);
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.btn}
        onMouseEnter={handleIn}
        onMouseLeave={handleOut}
      >
        Hover over me!
      </button>
      {isHidden || <Tooltip position="right" />}
    </div>
  );
}

export default App;
