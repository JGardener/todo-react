import React from "react";
import ListItem from "../components/ListItem";

const List = ({ title, subTitle, toDos, createNewToDo, removeToDo }) => {
  const appendNewToDo = e => {
    if (e.key === "Enter") {
      createNewToDo(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div className="list-container">
      <div className="title-container">
        <h1>{title}</h1>
        <h6>{subTitle}</h6>
      </div>
      <div className="create-new-toDo">
        <input
          type="text"
          onKeyPress={appendNewToDo}
          placeholder='Press "Enter" to add your new to-do.'
        />
      </div>
      <ul className="toDo-list">
        {toDos.map(newToDo => (
          <ListItem key={newToDo} newToDo={newToDo} removeToDo={removeToDo} />
        ))}
      </ul>
    </div>
  );
};

export default List;
