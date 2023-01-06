import React from "react";

const Navbar = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div className="w-screen flex justify-between items-center sm:px-16 px-5 h-[72px] bg-white border-b border-b-slate-200">
      <h1 className="text-3xl font-semibold">Trackr19</h1>
      <span>Lasted Updated at: {date}</span>
    </div>
  );
};

export default Navbar;
