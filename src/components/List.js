import React from "react";
import ListItem from "../components/ListItem";
import CreateToDo from "./CreateToDo";

class List extends React.Component {
    state = {
        toDos: [],
    };

    createNewToDo = newToDo => {
        this.setState({
            toDos: [
                ...this.state.toDos,
                newToDo
            ]
        })
    };

    removeToDo = newToDo => {
        const toDos = [...this.state.toDos];
        const index = toDos.indexOf(newToDo);

        if (index > -1) {
            toDos.splice(index, 1);
            this.setState({
                toDos: toDos
            });
        }
    };

    render() {
        return (
          <div className="list-container">
            <div className="title-container">
              <h1>{this.props.title}</h1>
              <h6>{this.props.subTitle}</h6>
            </div>
            <CreateToDo createNewToDo={this.createNewToDo} />
            <ul className="toDo-list">
              {this.state.toDos.map(toDo => (
                <ListItem
                  key={toDo}
                  newToDo={toDo}
                  removeToDo={this.removeToDo}
                />
              ))}
            </ul>
          </div>
        );
    }
}
// const List = ({ title, subTitle, toDos, createNewToDo, removeToDo }) => {
//   const appendNewToDo = e => {
//     if (e.key === "Enter") {
//       createNewToDo(e.target.value);
//       e.target.value = "";
//     }
//   };
//
//   return (
//     <div className="list-container">
//       <div className="title-container">
//         <h1>{title}</h1>
//         <h6>{subTitle}</h6>
//       </div>
//       <div className="create-new-toDo">
//         <input
//           type="text"
//           onKeyPress={appendNewToDo}
//           placeholder='Press "Enter" to add your new to-do.'
//         />
//       </div>
//       <ul className="toDo-list">
//         {toDos.map(newToDo => (
//           <ListItem key={newToDo} newToDo={newToDo} removeToDo={removeToDo} />
//         ))}
//       </ul>
//     </div>
//   );
// };

export default List;
