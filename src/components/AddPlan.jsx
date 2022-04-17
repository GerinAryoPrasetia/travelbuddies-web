import React from "react";
import { useState } from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};

const AddPlan = () => {
  const [destination, setDestination] = useState("");
  const [schedule, setSchedule] = useState("");
  const [people, setPeople] = useState("");
  const [trasnportation, setTransportation] = useState("");
  const [items, setItems] = useState("");

  const onChangeName = (e) => {
    setDestination(e.target.value);
  };
  const onChangeSchedule = (e) => {
    setSchedule(e.target.value);
  };
  const onChangePeople = (e) => {
    setPeople(e.target.value);
  };
  const onChangeTransportation = (e) => {
    setTransportation(e.target.value);
  };
  const onChangeItems = (e) => {
    setItems(e.target.value);
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("@token");
    const userId = localStorage.getItem("@user_id");
    console.log(token);

    try {
      await fetch("http://localhost:8000/api/destination", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          destination_name: destination,
          schedule: schedule,
          trasnportation: trasnportation,
          items: items,
          people: people,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container items-center px-5 py-12 lg:px-20">
        <form className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2">
          <div className="relative pt-4">
            <label for="name" className="text-base leading-7 text-blueGray-500">
              Destination Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={onChangeName}
              placeholder="Destination Name"
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="relative pt-4">
            <div className="relative pt-4">
              <label
                for="name"
                className="text-base leading-7 text-blueGray-500"
              >
                Schedule
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="City"
                onChange={onChangeSchedule}
                className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
              />
            </div>
          </div>
          <div className="relative pt-4">
            <label for="name" className="text-base leading-7 text-blueGray-500">
              People
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="City"
              onChange={onChangePeople}
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="relative pt-4">
            <label for="name" className="text-base leading-7 text-blueGray-500">
              Items
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Address"
              onChange={onChangeItems}
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="relative pt-4">
            <label for="name" className="text-base leading-7 text-blueGray-500">
              Transportation
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={onChangeTransportation}
              placeholder="List of Facilities"
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white w-1/2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 items-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPlan;
