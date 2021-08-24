import React, { useState } from "react";
import "./App.css";
import Pomodoro from "./pomodoro/Pomodoro";
import Timer from "./pomodoro/Timer";
import Progressbar from "./pomodoro/Progressbar";

function App() {
  const [session, setSession] = useState(null);
  const [focusDuration, setFocusDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);

  return (
    <div className="App">
      <header className="App-header container">
        <h1>Pomodoro Timer</h1>
      </header>
      <div className="container">
        <Pomodoro
          session={session}
          setSession={setSession}
          focusDuration={focusDuration}
          setFocusDuration={setFocusDuration}
          breakDuration={breakDuration}
          setBreakDuration={setBreakDuration}
        />
        <Timer
          session={session}
          focusDuration={focusDuration}
          breakDuration={breakDuration}
        />
        <Progressbar
          session={session}
          focusDuration={focusDuration}
          breakDuration={breakDuration}
        />
      </div>
    </div>
  );
}

export default App;
