import React from "react";

const ListItem = ({ newToDo, removeToDo }) => {
  return (
    <li className="toDo-item">
      <div className="toDo-label">{newToDo}</div>
      <div className="remove-toDo">
        <button onClick={() => removeToDo(newToDo)}>X</button>
      </div>
    </li>
  );
};

export default ListItem;
