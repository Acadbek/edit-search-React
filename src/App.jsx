import { data } from "./data";
import { useState } from "react";
function App() {
  const [list, setList] = useState([]);

  const onchangeid = ({ target }) => {
    let res = data.filter((item) => item.id == target.id);
    setList(res);
    console.log(res);
  };
  const onchangename = ({ target }) => {};
  return (
    <>
      <input onChange={onchangeid} type="number" placeholder="ID" />
      <input onChange={onchangename} type="text" placeholder="name" />
      <div className="App">
        {list.map((value) => (
          <div key={value.id} style={{ display: "flex", gap: "10px" }}>
            <h1>{value.id}</h1> <h1>{value.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
