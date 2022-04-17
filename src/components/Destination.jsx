import React, { useEffect } from "react";
import { useState } from "react";

const Destination = (props) => {
  return (
    <div>
      <div className="rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={`http://localhost:8000/uploads/images/${props.image}`}
          alt="destination"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.destination_name}</div>
          <p className="text-gray-700 text-base">{props.city}</p>
        </div>
        {/* <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Destination;
