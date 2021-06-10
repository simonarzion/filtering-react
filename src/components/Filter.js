import React, { useState } from "react";

const USERS = [
  { id: 1, name: "Andy", age: 32 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Tom Hulk", age: 40 },
  { id: 4, name: "Tom Hank", age: 50 },
  { id: 5, name: "Audra", age: 30 },
  { id: 6, name: "Anna", age: 68 },
  { id: 7, name: "Tom", age: 34 },
  { id: 8, name: "Tom Riddle", age: 28 },
  { id: 9, name: "Bolo", age: 23 },
];

const Filter = () => {
  const [dataFilter, setDataFilter] = useState(USERS);

  const keys = Object.keys(USERS[0]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  const filterName = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const res = USERS.filter((r) => {
        return r.name.toLowerCase().includes(keyword.toLowerCase());
      });
      setDataFilter(res);
    } else {
      setDataFilter(USERS);
    }

    setName(keyword);
  };

  const filterAge = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const res = USERS.filter((r) => {
        return r.age.toLocaleString().includes(keyword);
      });
      setDataFilter(res);
    } else {
      setDataFilter(USERS);
    }

    setAge(keyword);
  };

  const filterId = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const res = USERS.filter((r) => {
        return r.id.toLocaleString().includes(keyword);
      });
      setDataFilter(res);
    } else {
      setDataFilter(USERS);
    }

    setId(keyword);
  };

  return (
    <header>
      <div>
        <label htmlFor="id">Filter by id: </label>
        <input type="text" name="id" value={id} onChange={filterId} />
      </div>
      <div>
        <label htmlFor="name">Filter by name: </label>
        <input type="text" name="name" value={name} onChange={filterName} />
      </div>
      <div>
        <label htmlFor="age">Filter by age: </label>
        <input type="text" name="age" value={age} onChange={filterAge} />
      </div>
      <table>
        <thead>
          <tr>
            {keys.map((k, i) => {
              return <th key={i}>{k}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dataFilter.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </header>
  );
};

export default Filter;
