import React from "react";
import ListItem from "../components/ListItem";

// class List extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: props.title,
//       subTitle: props.subTitle,
//       toDos: props.toDos,
//       createNewToDo: props.createNewToDo,
//       removeToDo: props.removeToDo
//     };
//   }

//   appendNewToDo = e => {
//     if (e.key === "Enter") {
//       createNewToDo(e.target.value);
//       e.target.value = "";
//     }
//   };

//   render() {
//     return (
//       <div className="list-container">
//         <div className="title-container">
//           <h1>{this.state.title}</h1>
//           <h6>{this.state.subTitle}</h6>
//         </div>
//         <div className="create-new-toDo">
//           <input
//             type="text"
//             onKeyPress={this.appendNewToDo}
//             placeholder='Press "Enter" to add your new to-do.'
//           />
//         </div>
//         <ul className="toDo-list">
//           {this.state.toDos.map(newToDo => (
//             <ListItem
//               key={newToDo}
//               newToDo={newToDo}
//               createNewToDo={this.state.createNewToDo}
//               removeToDo={this.state.removeToDo}
//             />
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
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
