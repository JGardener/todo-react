import React from "react";

const ListItem = ({ newToDo, removeToDo }) => {
  return (
    <li className="toDo-item" onClick={() => removeToDo(newToDo)}>
      {/* {newToDo && <List.component toDos={newToDo.toDos} />} */}
      <div className="toDo-label">{newToDo}</div>
    </li>
  );
};

export default ListItem;
