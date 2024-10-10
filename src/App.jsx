
import "./App.css";
import { useState, useRef } from "react";

export default function MyApp() {
  const deviceInputRef = useRef(null); 
  const [devices, setDevices] = useState(["mac", "oppo", "iphone"]); 

  const handleAddDevice = () => {
    const newDevice = deviceInputRef.current.value;
    if (newDevice) {      //  check not empty
      setDevices([...devices, newDevice]); 
      deviceInputRef.current.value = ""; 
    }
  };

  const handleDeleteDevice = (indexToDelete) => {
    setDevices(devices.filter((device, index) => index !== indexToDelete));
  };

  const devicesList = devices.map((device, index) => (
    <li key={index}>
      {device}
      <button onClick={() => handleDeleteDevice(index)}>Delete</button>
    </li>
  ));

  return (
    <div className="div1">
      <h1 className="h1">To-Do List</h1>
      <ul>{devicesList}</ul>
      <label htmlFor="deviceInput">Add Device</label>
      <input
        id="deviceInput"
        ref={deviceInputRef} 
        type="text"
      />
      <button onClick={handleAddDevice}>Add</button>
    </div>
  );
}







