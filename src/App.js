import React from "react";
import ReactDOM from "react-dom";
import MyTaskList from "./components/My-Task-List";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode());
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    // if mode was saved --> dark / light
    if (isReturningUser) {
      return savedMode;
      // if preferred color scheme is dark --> dark
    } else if (userPrefersDark) {
      return true;
      // otherwise --> light
    } else {
      return false;
    }
    // return savedMode || false;
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <div className="toggle-container">
          <h1>📝 My Task List</h1>
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox"/>
          </span>
          <span style={{ color: darkMode ? "slateblue" : "black"}}>☾</span>
          {/* <button onClick={() => setDarkMode(prevMode => !prevMode)}>
          Toggle
        </button> */}
        </div>
      </nav>
      <main>
        <MyTaskList></MyTaskList>
      </main>
    </div>
    
  );
}

export default App;
