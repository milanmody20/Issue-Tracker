import React, {useState} from "react";
import "./CurrentIssue.css"

function CurrentIssue() {
  const [addIssue, setAddIssue] = useState(true);

  return (
    <div className= "current-issue">
      <div className= "indv-issue">
        <p className="close-issue">Close Issue</p>
        <p>Assigned<span>Username</span></p>
        <p>Priority<span>High</span></p>
        <p>Description</p>
        <p className= "description">
          A short description of the project describing the issue. 
          Line of text can take up 2-3 lines. Users will enter the needed 
          issue which needs to be fixed. This is dumby text which is hard
          coded at this time. 
        </p>
        <hr/>
      </div>

      <div className= "indv-issue">
        <p className="close-issue">Close Issue</p>
        <p>Assigned<span>Username</span></p>
        <p>Priority<span>High</span></p>
        <p>Description</p>
        <p className= "description">
          A short description of the project describing the issue. 
          Line of text can take up 2-3 lines. Users will enter the needed 
          issue which needs to be fixed. This is dumby text which is hard
          coded at this time. 
        </p>
        <hr/>
      </div>

      <div className= "indv-issue">
        <p className="close-issue">Close Issue</p>
        <p>Assigned<span>Username</span></p>
        <p>Priority<span>High</span></p>
        <p>Description</p>
        <p className= "description">
          A short description of the project describing the issue. 
          Line of text can take up 2-3 lines. Users will enter the needed 
          issue which needs to be fixed. This is dumby text which is hard
          coded at this time. 
        </p>
        <hr/>
      </div>

      <div className= "indv-issue">
        <p className="close-issue">Close Issue</p>
        <p>Assigned<span>Username</span></p>
        <p>Priority<span>High</span></p>
        <p>Description</p>
        <p className= "description">
          A short description of the project describing the issue. 
          Line of text can take up 2-3 lines. Users will enter the needed 
          issue which needs to be fixed. This is dumby text which is hard
          coded at this time. 
        </p>
        <hr/>
      </div>
    </div>
  );
}

export default CurrentIssue;
