import React, { Component, useRef } from "react";
import { data } from "./data";

class App2 extends Component {
  state = {
    data,
    changeInputType: false,
    selected: null,
  };

  render() {
    const select = React.createRef();

    const getStateValue = (value) => {
      if (!value === "id") {
        this.setState({ changeInputType: !this.state.changeInputType });
      } else {
        this.setState({ changeInputType: !this.state.changeInputType });
      }
    };

    const onchangeID = ({ target }) => {
      let res = data.filter((value) => `${value.id}`.includes(target.value));
      this.setState({ data: res });
      console.log(select.current);
    };

    const onchangeName = ({ target }) => {
      let res = data.filter((value) =>
        `${value.name}`.toLowerCase().includes(target.value.toLowerCase())
      );
      this.setState({ data: res });
      console.log(target.value);
    };
    const onEdit = (value) => {
      this.setState({ selected: value });
    };
    const onSave = () => {
      let res = this.state.data.map((value) =>
        value.id === this.state.selected?.id
          ? { ...value, name: inputRef.current.value }
          : value
      );
      this.setState({ data: res, selected: null });
    };

    const onCancel = () => {
      this.setState({ selected: null });
    };

    const inputRef = React.createRef();

    return (
      <div>
        {this.state.changeInputType ? (
          <input onChange={onchangeID} type="number" placeholder="ID" />
        ) : (
          <input onChange={onchangeName} type="text" placeholder="Name" />
        )}

        <select
          onChange={(e) => {
            getStateValue(e.target.value);
          }}
        >
          <option value="name">name</option>
          <option value="id">ID</option>
        </select>

        {this.state.data.map((value) => (
          <div
            key={value.id}
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <h1>
              {value.id} -{" "}
              {this.state.selected?.id === value.id ? (
                <input
                  ref={inputRef}
                  defaultValue={this.state.selected.name}
                  type="text"
                />
              ) : (
                value.name
              )}
            </h1>
            {this.state.selected?.id === value.id ? (
              <>
                <button onClick={onSave}>save</button>
                <button onClick={onCancel}>cancel</button>
              </>
            ) : (
              <button onClick={() => onEdit(value)}>edit</button>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default App2;
