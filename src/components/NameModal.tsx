import { useState } from "react";
import { useAppContext } from "../context/useAppContext";

const NameModal = () => {
  const { setName } = useAppContext();
  const [localName, setLocalName] = useState("");
  const [err, setErr] = useState("");

  const handleAddName = () => {
    if (localName.trim() === "") return setErr("Name can't be null");
    if (localName.length > 7) return setErr("Name can't be long");
    if (localName.length < 4) return setErr("At least 4 characters required");
    setName(localName);
  };

  return (
    <div className="lobby-container absolute inset-0  z-99 flex justify-center items-center">
      <div className="relative bg-[#0f172ae6] border-[#ffffff1a] border min-w-xl h-56 flex  flex-col items-center gap-3 rounded-2xl justify-center ">
        <h1 className="text-2xl font-medium">Enter your name!</h1>

        <input className="bg-gray-800 h-10 w-1/2 rounded-full" placeholder="Enter Name..." value={localName} onChange={(e) => setLocalName(e.target.value)} />

        {err && <p className="text-red-700">{err}</p>}
        <button className="reset-btn" onClick={handleAddName}>Join Game</button>

      </div>
    </div>
  );
};

export default NameModal;
