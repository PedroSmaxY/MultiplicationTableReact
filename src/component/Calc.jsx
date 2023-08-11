import { useState } from "react";

export default function Calc() {
  const [value, setValue] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [inputError, setInputError] = useState(false);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const multiplication = () => {
    if (value === "" || isNaN(value)) {
      setInputError(true);
      return;
    } else {
      setInputError(false);
    }

    const numberList = [];
    for (let i = 1; i < 11; i++) {
      numberList.push({
        value: value,
        multi: i,
        result: value * i,
      });
    }
    setTableData(numberList);
  };

  const handleGenerateTable = () => {
    multiplication();
    setShowTable(true);
  };

  return (
    <>
      <input
        type="number"
        name="numtxt"
        id="numtxt"
        placeholder="Type a Number"
        onChange={handleInputChange}
        required
      />
      {inputError && <p className="error-message">Value is required.</p>}
      <article>
        <button className="generate" onClick={handleGenerateTable}>
          Generate Table
        </button>
        {showTable && (
          <ul style={{ listStyle: "none" }}>
            {tableData.map((e, index) => (
              <li key={index}>
                {e.value} x {e.multi} = {e.result}
              </li>
            ))}
          </ul>
        )}
      </article>
    </>
  );
}
