import React from "react";

const Header = ({ todoTitle, count }) => {
  return (
    <>
      <header className="flex items-center justify-between shadow-md p-4">
        <h1 className="text-5xl uppercase">{todoTitle}</h1>
        <p className="text-4xl">{!!count ? count + " item 😁" : "0 item 😞"}</p>
      </header>
    </>
  );
};
Header.defaultProps = {
  todoTitle: "Todo List",
};

export default Header;
