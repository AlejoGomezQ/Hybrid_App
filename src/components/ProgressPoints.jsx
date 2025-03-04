import React from "react";

const ProgressPoints = ({ progress, startNumber, endNumber, isActive }) => {
    
    
    return (
      <div className={`flex flex-col items-center p-2 rounded-lg w-full max-w-sm my-2 ${isActive ? 
                      "bg-yellow-300" : "bg-white/20"}`}>
        <div className="relative w-full rounded-full h-6">
        
          <div className={`absolute top-0 left-2 font-bold text-sm ${isActive ? "text-black" : "text-white"}`}>
            {startNumber}
          </div>
          <div className={`absolute top-0 right-2 font-bold text-sm ${isActive ? "text-black" : "text-white"}`}>
            {endNumber}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProgressPoints;