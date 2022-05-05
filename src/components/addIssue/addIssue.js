import React, {useState} from "react";

function AddIssue() {
  const [addIssue, setAddIssue] = useState(true);

  return (
    <div className="add-issue">
      <form>
        <lable>
          Description<input type = "text" />
        </lable>

        <lable> Assign To:
          <select name="forDev" id="forDev">          {/*select creates a drop down menu */}
            <option value= "Jason">Jason</option>
            <option value= "Tommy">Tommy</option>
            <option value= "Kimberly">Kimberly</option>
            <option value= "Zack">Zack</option>
            <option value= "Trini">Trini</option>
            <option value= "Billy">Billy</option>
          </select>
        </lable>

        <lable> Priority:
          <select name="priority" id="priority">          {/*select creates a drop down menu */}
            <option value= "Low">Low</option>
            <option value= "Medium">Medium</option>
            <option value= "High">High</option>
            <option value= "Urgent">Urgent</option>
          </select>
        </lable>

        <button type="submit">Add</button>

      </form>
    </div>
  );
}

export default AddIssue;
