import React, {useState} from "react";
import addIssue from './components/addIssue/addIssue.js';
import currentIssue from './components/currentIssue/currentIssue.js';

import './App.css';

function App() {
  const [addIssue, setAddIssue] = useState(true);

  return (
    <div className="App">
      <h1>Issue Tracker</h1>
      {
        addIssue ? <addIssue /> : <currentIssue />
      }
      <div>
        <button onClick = {}>Current Issues</button>
        <button onClick = {}>Add Issue</button>
      </div>
    </div>
  );
}

export default App;
