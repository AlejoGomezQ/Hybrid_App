import React, { useState, useEffect } from "react";
import Button from "@/components/shared/Button";
import Avatar from "@/components/shared/Avatar";

const ComodinPopUp = ({ respuesta, onClose }) => {
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const storedNickname = localStorage.getItem("nickname");
    if (storedNickname) {
      setNickname(storedNickname);
    }
  }, []);

  return (
    <div className="py-7 px-7">
      <div className="bg-gray-400 rounded-md max-w-md mx-auto px-4 py-10 flex flex-col items-center justify-around space-y-30">
        <div className="text-center space-y-6">
          <Avatar />
          {nickname && <p className="text-white text-3xl font-semibold">{nickname}</p>}
        </div>
        <div className="space-y-6 justify-items-center">
          <h1 className="text-cyan-950 text-3xl font-semibold text-center">¡La correcta es!</h1>
          <p className="text-white text-2xl font-semibold text-center">{respuesta}</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="flex flex-col space-y-8">
          <Button type="submit">OK</Button>
        </form>
      </div>
    </div>
  );
};

export default ComodinPopUp;