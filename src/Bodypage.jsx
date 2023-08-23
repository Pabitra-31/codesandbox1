import react from "react";
import { useState } from "react";
const Bodypage = () => {
  let arr = ["Cricket", "Basketball", "Football"];

  const [checkedItems, setCheckedItems] = useState(arr.map(() => false));
  const [array, setArray] = useState(arr);

  const toggleChecked = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const deleteline = (index) => {
    let newarr = array.filter((item, i) => i !== index);
    setArray(newarr);
  };

  return (
    <>
      <div>
        {array.map((i, index) => {
          return (
            <li
              style={{ display: "flex", padding: "10px", gap: "10px" }}
              key={index}
            >
              <input
                type="checkbox"
                checked={checkedItems[index]}
                onChange={() => toggleChecked(index)}
              />
              {index + 1} - {i}
              <button
                onClick={() => deleteline(index)}
                disabled={!checkedItems[index]}
              >
                Delete Me
              </button>
            </li>
          );
        })}
      </div>
    </>
  );
};
export default Bodypage;
