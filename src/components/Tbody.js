import React from "react";

const Tbody = ({ dataFilter }) => {
  return (
    <>
      {dataFilter.map((e, i) => {
        return (
          <tr key={i}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.age}</td>
          </tr>
        );
      })}
    </>
  );
};

export default Tbody;
