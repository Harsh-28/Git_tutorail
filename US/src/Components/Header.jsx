import React from "react";
import line from "../assest/vectorline.svg"

const Header = () => {
  return (
    <div className="self-stretch rounded-t-xl w-full ml-4 mt-1 rounded-b-none bg-text-white box-border h-[71px] overflow-hidden shrink-0 flex flex-col py-0 px-5 items-start justify-center z-[1] border-b-[1px] border-solid border-system-divider">
      <div className="self-stretch flex-1 flex flex-row items-center justify-between">
        <div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
          <div className="relative leading-[140%] font-semibold text-xl text-text-100">
            Assessment
          </div>
          <img
            className="relative w-px h-[46px]"
            alt=""
            src={line}
          />
          <div className="flex flex-row items-start justify-start text-sm text-secondary-1">
            <div className="bg-text-white box-border h-[70px] flex flex-row py-2.5 px-0 items-center justify-center border-b-[3px] border-solid border-secondary-1">
              <div className="relative font-semibold text-sm">My Assessments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
