import React from "react";

const ProgressPoints = ({ progress, startNumber, endNumber }) => {
    
    const validProgress = Math.max(1, Math.min(progress, 2000000));
  
    return (
      <div className="flex flex-col items-center bg-white/20 p-2 rounded-lg w-full max-w-sm my-2">
        <div className="relative w-full rounded-full h-6">
          <div
            className="h-6 rounded-full"
            style={{ width: `${validProgress}%` }}
          ></div>
          <div className="absolute top-0 left-2 text-white font-bold text-sm">
            {startNumber}
          </div>
          <div className="absolute top-0 right-2 text-white font-bold text-sm">
            {endNumber}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProgressPoints;