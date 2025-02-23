import { useState } from "react";
import NavOptions from "./components/NavOpions";

export default function Home() {
  // state var for the background color of the page,
  // and then setting it's default to the nextjs default
  const [bgColor, setBgColor] = useState("0a0a0a");

  // Using an array to store the links and names of the buttons for the navbar
  const navbarLinks = [
    {
      name: "Facts",
      url: "/facts",
    },
    {
      name: "Search",
      url: "/search",
    },
  ];

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex flex-col items-center"
    >
      <nav className="bg-slate-500 py-3 px-10">
        {/* Populating the navbar with the options and passing the navbarlinks as props */}
        <NavOptions navItems={navbarLinks} />
      </nav>

      <h1>Welcome to my Assignment!</h1>

      <div>
        <p>
          Don't like the background color? Click on the buttons to change it!
        </p>
        {/* Supplying 3 buttons two allow the onClick event to change the background color */}
        <div className="flex gap-2 justify-center">
          <button
            className="border border-white rounded-md px-2 py-1"
            onClick={() => changeColor("lightblue")}
          >
            Light Blue
          </button>
          <button
            className="border border-white rounded-md px-2 py-1"
            onClick={() => changeColor("lightgreen")}
          >
            Light Green
          </button>
          <button
            className="border border-white rounded-md px-2 py-1"
            onClick={() => changeColor("lightcoral")}
          >
            Light Coral
          </button>
        </div>
      </div>
    </div>
  );
}
