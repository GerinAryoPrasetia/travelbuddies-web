import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Destination from "../components/Destination";
import Destinations from "../components/Destinations";
import Navbar from "../components/Navbar";

const Home = () => {
  const [destination, setDestination] = useState([]);
  const token = localStorage.getItem("token");
  return (
    <div>
      <Navbar />
      <Destinations />
    </div>
  );
};

export default Home;
