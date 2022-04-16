import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Destination from "./Destination";

const Destinations = () => {
  const [destination, setDestinations] = useState([]);
  return (
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {destination.slice(0.6).map((d) => {
        <Link
          to={{
            pathname: `/movie-detail/${d.id}`,
            state: { destination: d },
          }}
        >
          <Destination {...destination} key={d.id} />
        </Link>;
      })}
    </div>
  );
};

export default Destinations;
