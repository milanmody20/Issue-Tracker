import React, {useState} from "react";
import  "./AddIssue.css";

function AddIssue() {
  const [addIssue, setAddIssue] = useState(true);

  return (
    <div className="add-issue">
      <form>
        <label>
          Description: <input type = "text" placeholder="Description of Issue..." />
        </label>

        <label> Assign To:
          <select name="forDev" id="forDev">          {/*select creates a drop down menu */}
            <option value="default" disabled hidden>Assign to...</option>
            <option value= "Jason">Jason</option>
            <option value= "Tommy">Tommy</option>
            <option value= "Kimberly">Kimberly</option>
            <option value= "Zack">Zack</option>
            <option value= "Trini">Trini</option>
            <option value= "Billy">Billy</option>
          </select>
        </label>

        <label> Priority:
          <select name="priority" id="priority">          {/*select creates a drop down menu */}
            <option value="default" disable hidden>Select priority level</option>
            <option value= "Low">Low</option>
            <option value= "Medium">Medium</option>
            <option value= "High">High</option>
            <option value= "Urgent">Urgent</option>
          </select>
        </label>

        <button type="submit">Add</button>

      </form>
    </div>
  );
}

export default AddIssue;
