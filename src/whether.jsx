import React from "react";

function Whether() {
  return (
    <>
      <div className="flex justify-between mb-5">
        <div className="flex gap-0">
          <img src="/images/logo.svg" alt="" className="w-37" />
        </div>

        <div className="text-white flex items-center  text-xs   p-1 gap-1 bg-[#3A3550]">
          <img src="/images/icon-units.svg" alt="" className="w-3" />
          <div>Units</div>
          <img src="/images/icon-dropdown.svg" alt="" className="w-3" />
        </div>
      </div>
    </>
  );
}

export default Whether;
