import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Destination from "./Destination";

const Destinations = () => {
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:8000/api/destination", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setDestination(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {destination &&
        destination.map((d) => {
          return (
            <Link
              to={{
                pathname: `/destination/${d.id}`,
                state: { destination: d },
              }}
            >
              <Destination {...d} key={d.id} />;
            </Link>
          );
        })}
    </div>
  );
};

export default Destinations;
