import { useContext } from "react";
import MainContext from "../MainContext";

export default function TopBar() {
  const { mainViewWidth, hoverBg } = useContext(MainContext);
  return (
    <header
      className=" h-16  sticky top-0  z-30 bg-slate-800 "
      style={{ "--bg": `${hoverBg}`, "--width": `${mainViewWidth}px` }}
      id="top-bar"
    >
      <div className="w-full h-full absolute top-0 left-0 bg-opacity-0 bg-slate-800"></div>
      <div className="w-full h-full   px-8 py-4 flex-row justify-between flex bg-transparent">
        <div className="flex flex-row gap-4">
          <button className="bg-black opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center">
            <svg role="img" height="22" width="22" viewBox="0 0 24 24">
              <path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path>
            </svg>
          </button>
          <button className="bg-black opacity-80 text-white rounded-full w-8 h-8 flex items-center justify-center">
            <svg role="img" height="24" width="24" viewBox="0 0 24 24">
              <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path>
            </svg>
          </button>
        </div>
        <div className="flex gap-2 z-10">
          <button className="w-[160px] p-[2px] h-8 bg-black hover:bg-gray-800 text-white rounded-full flex items-center  justify-between ">
            <figure className="w-7 h-7  ml-[2px]">
              <img
                src="https://i.scdn.co/image/ab6775700000ee85c540da35e5cfb6c8959e6e40"
                alt=""
                className="w-full h-full rounded-full"
              />
            </figure>
            <div className="h-full">
              <span className="text-[14px] font-bold">xs</span>
            </div>
            <svg
              role="img"
              height="16"
              width="16"
              viewBox="0 0 16 16"
              className="mr-[6px]"
            >
              <path d="M14 6l-6 6-6-6h12z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
