import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Destination from "../components/Destination";
import Destinations from "../components/Destinations";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [destination, setDestination] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleAddPlan = () => {
    navigate("/add-plan");
  };
  return (
    <div>
      <Navbar />
      <Destinations />
      <div className="flex-col justify-center ">
        <h1 className="text-xl">Your Plan</h1>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleAddPlan}
        >
          Add Travel Plan
        </button>
      </div>
    </div>
  );
};

export default Home;
