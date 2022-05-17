import React, {useState} from "react";
import AddIssue from './components/addIssue/AddIssue';
import CurrentIssue from './components/currentIssue/CurrentIssue';

import './App.css';

function App() {
  const [addIssue, setAddIssue] = useState(true);   //true displays add issue, false displays current issues

  function showAddIssue() {
      setAddIssue(true);
  }

  function showCurrentIssue() {
      setAddIssue(false);
  } 


  return (
    <div className="App">
      <h1>Issue Tracker</h1>
        <div className= "card-container">
        {
          addIssue ? <AddIssue /> : <CurrentIssue />
        }
        </div>
        
        <div class="button-selection">
          <button class="add-button" onClick={() => showAddIssue()}>Add Issue</button>
          <button class="current-button" onClick={() => showCurrentIssue()}>Current Issues</button>
        </div>
    </div>
  );
}

export default App;
