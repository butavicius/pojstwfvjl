import { useState } from "react";

type Props = {
  name: string;
  addNode: (name: string) => void;
};

export default function NodeComponent({ addNode, name }: Props) {
  const [inputShown, setInputShown] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleSubmit = () => {
    if (value.length === 0) {
      alert("Name must not be empty!");
      return;
    }

    addNode(value);
    setValue("");
    setInputShown(false);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <div>{name}</div>
        <button onClick={() => setInputShown((prev) => !prev)}>+</button>
      </div>

      {inputShown && (
        <div style={{ display: "flex", gap: 16 }}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button onClick={handleSubmit}>Add</button>
        </div>
      )}
    </div>
  );
}
