import React from "react";
import List from "./List";

const ListItem = ({ newToDo, removeToDo }) => {
  return (
    <li className="toDo-item">
        {newToDo.isList ?
            <List
                title={newToDo.text}
            />

        :
            <div className="toDo-label">{newToDo.text}</div>
        }
        <button onClick={() => {removeToDo(newToDo)}}>Remove</button>
    </li>
  );
};

export default ListItem;
