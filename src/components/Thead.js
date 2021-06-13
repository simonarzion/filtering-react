import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Thead = ({ keys, sortBy, sort }) => {
  return (
    <>
      <tr>
        {keys.map((k, i) => {
          return (
            <th key={i}>
              {k}
              <button onClick={() => sortBy(k)}>{sort ? <FaArrowDown /> : <FaArrowUp />}</button>
            </th>
          );
        })}
      </tr>
    </>
  );
};

export default Thead;
