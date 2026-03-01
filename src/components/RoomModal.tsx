import { X } from "lucide-react";
import React, { useState, type SetStateAction } from "react";

type RoomModalProps = {
  closeInput: () => void;
};

const RoomModal = (props: RoomModalProps) => {
  const [roomId, setRoomId] = useState("");
  const [err, setErr] = useState("");

  const handleCreateRoom = () => {
    if (roomId.length !== 6) return setErr("Enter 6 digits to continue!"); 
    setRoomId(roomId); 
  };

  return (
    <div className="absolute inset-0  z-99 flex justify-center items-center">
      <div className="relative bg-[#0f172ae6] border-[#ffffff1a] backdrop-blur-sm border w-1/3 h-1/3 flex gap-3  flex-col items-center rounded-2xl justify-center ">
        <X className=" text-[#ffffff1a] absolute top-5 right-5 cursor-pointer hover:text-gray-500" onClick={props.closeInput} />
        <input type="number" placeholder="Enter Room Id ..." /> 
        {err && <p className="text-red-700">{err}</p>} 

        <button onClick={handleCreateRoom} className="reset-btn">Submit Id</button>
      </div> 
    </div>
  );
};

export default RoomModal;
