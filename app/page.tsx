"use client"
import { useState, useEffect } from "react";

export default function Home() {
  
  const [list, setList] = useState<string[]> (["pepe", "pepe2", "pepe6"]);
  const [inputValue, setInputValue] = useState<string> ("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setInputValue(e.target.value);
  };

  const addToList = ():void => {
    setList([...list, inputValue]);
    setInputValue("");
  };

  useEffect(() => {
  }, [list]);

  return (
    <main>
      <input onChange={handleChange} value={inputValue}></input>
      <button onClick={addToList}>submit</button>
      {list.map((elem, index) => (
        <p key={index}>{elem}</p>
      ))}
    </main>
  );
}
