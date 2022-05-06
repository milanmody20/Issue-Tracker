import React, {useState} from "react";
import AddIssue from './components/addIssue/AddIssue';
import CurrentIssue from './components/currentIssue/CurrentIssue';

import './App.css';

function App() {
  const [addIssue, setAddIssue] = useState(true);

  return (
    <div className="App">
      <h1>Issue Tracker</h1>
        <div className= "card-container">
        {
          addIssue ? <AddIssue /> : <CurrentIssue />
        }
        </div>
        
        <div>
          <button>Current Issues</button>
          <button>Add Issue</button>
        </div>
    </div>
  );
}

export default App;
