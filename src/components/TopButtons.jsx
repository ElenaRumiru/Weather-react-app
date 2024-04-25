import React from "react";

const TopButtons = ({ setCity }) => {
  const cities = [
    {
      id: 1,
      title: "Amsterdam",
    },
    {
      id: 2,
      title: "Oudewater",
    },
    {
      id: 3,
      title: "Berlin",
    },
    {
      id: 4,
      title: "Helsinki",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          onClick={() => setCity(city.title)}
          key={city.id}
          className="  text-lg font-medium"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
