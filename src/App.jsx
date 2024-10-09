
import "./App.css";
import { useState } from "react";







let nextid = 5;

export default function MyApp() {
  const [valuee, setvaluee] = useState(""); // State for adding new devices
  const [devicess, setdevicess] = useState([
    { id: 1, name: "mac" },
    { id: 2, name: "oppo" },
    { id: 3, name: "iphone" },
    
  ]);
  const [editId, setEditId] = useState(null); // State to track which device is being edited
  const [editValue, setEditValue] = useState(""); // State for the editing input value
  

  const handleEditChange = (id, newValue) => {
    setdevicess(
      devicess.map((device) =>
        device.id === id ? { ...device, name: newValue } : device
      )
    );
    setEditId(null); // Exit edit mode
    setEditValue(""); // Clear the edit input
  };

  const devicesList = devicess.map((el) => {
    return (
      <li key={el.id}>
        {editId === el.id ? (
          // Show the input field when in edit mode for the specific device
          <input
            type="text"
            value={editValue}
            onChange={(event) => setEditValue(event.target.value)}
            onBlur={() => handleEditChange(el.id, editValue)} // Save changes when input loses focus
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleEditChange(el.id, editValue); // Save changes when Enter is pressed
              }
            }}
            autoFocus
          />
        ) : (
          // Display the device name and edit/delete buttons when not in edit mode
          <>
            {el.name}{" "}
            <button
              onClick={() => {
                setdevicess(devicess.filter((device) => device.id !== el.id));
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                setEditId(el.id); // Enter edit mode for the specific device
                setEditValue(el.name); // Pre-fill the edit input with the current device name
              }}
            >
              Edit
            </button>
          </>
        )}
      </li>
    );
  });

  return (
    <div className="div1">
      <h1 className="h1">To-Do List</h1>
      <div>{devicesList}</div>
      <label htmlFor="deviceInput">Add Device</label>
      <input
        id="deviceInput"
        value={valuee}
        type="text"
        onChange={(event) => {
          setvaluee(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setdevicess([...devicess, { id: nextid, name: valuee }]); // Properly updating the devices array
          nextid++;
          setvaluee(""); // Clear the input field after adding the device
        }}
      >
        Add
      </button>
    </div>
  );
}













// function Frist() {
//   return(
//   <div>
//     {
//        show ? (
//         <div className="div3">
//           <Button />
//           <Button />
//           <Button />
//           <Button2 />
//           <button>Tag Button</button>
//         </div>
//       ) : (
//         <div>
//           <h2>No Buttons</h2>
//         </div>
//       )
//     }
//   </div>
// );
// }
