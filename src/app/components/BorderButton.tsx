import React from "react";
import Image from "next/image";
import test from "../../../public/test.png";

const BorderButton = () => {
  return (
    <div
      style={{
        "--background": "17 24 39",
        "--highlight": "156 156 156",
        "--bg-color": "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
        "--border-color": `linear-gradient(160deg, rgb(var(--highlight)) 0%, rgb(var(--highlight) / 0.3) 33.33%, rgb(var(--highlight) / 0.14) 66.67%, rgb(var(--highlight) / 0.1) 100%)`,
      } as React.CSSProperties}
      className="relative w-48 px-6 py-2 sm:px-6 sm:py-2 md:px-6 md:py-3 sm:px-6 sm:py-3 rounded-[10px] border border-transparent text-center text-white font-semibold 
      [background:padding-box_var(--bg-color),border-box_var(--border-color)] 
      shadow-[inset_0px_-4px_1px_0px_rgba(8,12,23,0.2)] 
      overflow-hidden transition-all duration-300 ease-in-out hover:border-[rgb(var(--highlight))] cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-white opacity-10 rounded-[10px] cursor-pointer"
        style={{
          filter: "blur(40px)",
          zIndex: 0,
        }}
      ></div>
      <span className="relative z-10 flex justify-center items-center gap-2">Contactez Moi <Image src={test} alt="test" width={30} height={0}/></span>
    </div>
  );
};

export default BorderButton;
