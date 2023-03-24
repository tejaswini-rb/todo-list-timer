import React, { useState } from 'react';
import styled from 'styled-components';

function TodoList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleItemAdd = () => {
    if (inputValue.trim()) {
      setItems([...items, { text: inputValue, done: false }]);
      setInputValue('');
    }
  };

  const handleItemRemove = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleCheckboxChange = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, done: !item.done } : item
    );
    setItems(updatedItems);
  };


  const AddButton = styled.button`
  font-size: 18px;
  color: #ffffff;
  background-color: #5900ff;
  border: none;
  border-radius: 3px;
  padding: 3px 8px;
  cursor: pointer;
`;

const RemoveButton = styled.button`
  font-size: 8px;
  color: #ffffff;
  background-color: #333333c1;
  border: none;
  border-radius: 2px;
  padding: 2px 4px;
  cursor: pointer;
  margin-left: 8px;
  align-self: center;
  margin-bottom: 8px;
`;

const ToDoItem = styled.li`
  font-family: Arial, sans-serif;
  background: linear-gradient(to right, #910170, #2502d5db);
  color: whitesmoke;
  border-radius: 8px;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.3);
  border: 1px solid #dddddd;
  border-radius: 5px;
  text-align: center;
`;


return (
    
    <div style={{textAlign: "center"}}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter a new task"
        style={{ marginRight: "8px" }} />
      <AddButton onClick={handleItemAdd}>Add</AddButton>
  
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <ToDoItem key={index}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => handleCheckboxChange(index)}
              style={{ marginRight: "8px" }}
            />
            {item.text}
            <RemoveButton style={{ marginLeft: "8px"}} onClick={() => handleItemRemove(index)}>X</RemoveButton>
          </ToDoItem>
        ))}
      </ul>
    </div>
   
    
  );
  
}

export default TodoList;
