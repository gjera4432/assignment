import React, { useState } from "react";

const Facts = () => {
  const [city, setCity] = useState("Toronto");

  const torontoFacts = [
    "Toronto is the largest city in Canada.",
    "The CN Tower in Toronto is one of the tallest free-standing structures in the world.",
    "Toronto is home to the Toronto International Film Festival.",
  ];

  const montrealFacts = [
    "Montreal is the second-largest city in Canada.",
    "Montreal is known for its vibrant arts and culture scene.",
    "Montreal hosts the world-famous Montreal Jazz Festival.",
  ];

  // Turnary statement that uses the `city` variable to display a city's facts
  const facts = city === "Toronto" ? torontoFacts : montrealFacts;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Facts about {city}</h1>
      <div className="mb-4">
        <button
          // conditional button styling to show which button is the one that is pressed last
          className={`px-4 py-2 mr-2 ${
            city === "Toronto" ? "bg-blue-500 text-white" : "bg-slate-400"
          }`}
          onClick={() => setCity("Toronto")} // onClick changes the city to this one
        >
          Toronto
        </button>
        <button
          // conditional button styling to show which button is the one that is pressed last

          className={`px-4 py-2 ${
            city === "Montreal" ? "bg-blue-500 text-white" : "bg-slate-400"
          }`}
          onClick={() => setCity("Montreal")} // onClick changes the city to this one
        >
          Montreal
        </button>
      </div>
      <ul className="list-decimal pl-5">
        {facts.map((fact, index) => (
          <li key={index} className="mb-2">
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Facts;
