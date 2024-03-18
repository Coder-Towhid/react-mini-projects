import { useState } from "react";

import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
    console.log("getCurrentId :>> ", getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexCurrentId, 1);
    console.log(cpyMultiple)
    setMultiple(cpyMultiple);
  }

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setSelected(null)
          setMultiple([])
          setEnableMultiSelection(!enableMultiSelection);
        }}
      >
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    :() => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div> No data found </div>
        )}
      </div>
    </div>
  );
}
