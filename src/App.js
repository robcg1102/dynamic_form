import { useEffect, useState } from "react";
import data from "./services/fields.json";

export default function App() {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    setFields(data.fields);
  }, []);

  const selectFields = () => {
    return data.fields.map((field, i) => (
      <div className="optionField" key={i}>
        <label htmlFor="">{field.label}</label>
        <input
          type="checkbox"
          checked={field.active}
          onChange={() => handleChecked(i)}
        />
      </div>
    ));
  };

  const handleChecked = (valor) => {
    const inputDisplay = [...fields];
    inputDisplay[valor].active = !inputDisplay[valor].active;
    setFields(inputDisplay);
  };

  const displayInputs = () => {
    return fields.map((field, i) => {
      if (field.active) {
        if (field.type === "text") {
          return (
            <div className="optionFieldDisplay" key={i}>
              <label htmlFor="">{field.label}</label>
              <input type="text" placeholder={field.label} />
              <h2 className="closeTag" onClick={() => handleChecked(i)}>
                X
              </h2>
            </div>
          );
        }
        if (field.type === "select") {
          return (
            <div className="optionFieldDisplay" key={i}>
              <label htmlFor="">{field.label}</label>
              <select name="" id="">
                {field.options.map((opt, i) => (
                  <option value={opt} key={i}>
                    {opt.toUpperCase()}
                  </option>
                ))}
              </select>
              <h2 className="closeTag" onClick={() => handleChecked(i)}>
                X
              </h2>
            </div>
          );
        }
        if (field.type === "radio") {
          return (
            <div className="optionFieldDisplay" key={i}>
              {field.options.map((opt, i) => (
                <div key={i}>
                  <input type="radio" />
                  <label htmlFor="">{opt.toUpperCase()}</label>
                </div>
              ))}
              <h2 className="closeTag" onClick={() => handleChecked(i)}>
                X
              </h2>
            </div>
          );
        }
      }
      return null
    });
  };

  return (
    <div className="main">
      <div className="col">
        <h2>Inputs disponibles</h2>
        {selectFields()}
      </div>
      <div className="col">
        <h2>Formulario</h2>
        {displayInputs()}
      </div>
    </div>
  );
}
