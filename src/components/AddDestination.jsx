import React, { useState } from "react";

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

const AddDestination = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);
  const [address, setAddress] = useState("");
  const [facilities, setFacilities] = useState("");

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      console.log(selectedImage);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("@token");
    console.log(token);
    const fd = new FormData();
    fd.append("destination_name", name);
    fd.append("image", selectedImage);
    fd.append("price", price);
    fd.append("city", city);
    fd.append("facilities", facilities);
    fd.append("address", address);
    fd.append("description", description);
    try {
      await fetch("http://localhost:8000/api/destination", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,

          Accept: "application/json",
        },
        body: fd,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const onChangeFacilities = (e) => {
    setFacilities(e.target.value);
  };
  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <div className="container items-center px-5 py-12 lg:px-20">
        <form className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2">
          <section className="flex flex-col w-full h-full p-1 overflow-auto">
            <label
              for="name"
              className="text-base leading-7 text-blueGray-500 mb-5"
            >
              Destination Image
            </label>
            <header className="flex flex-col items-center justify-center py-12 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border border-dashed rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
              <input accept="image/*" type="file" onChange={imageChange} />
              {selectedImage && (
                <div style={styles.preview}>
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    style={styles.image}
                    alt="Thumb"
                  />
                  <button onClick={removeSelectedImage} style={styles.delete}>
                    Remove This Image
                  </button>
                </div>
              )}
            </header>
          </section>
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
            <div className="flex flex-wrap mt-4 mb-6 -mx-3">
              <div className="w-full px-3">
                <label
                  className="text-base leading-7 text-blueGray-500"
                  for="description"
                >
                  Description{" "}
                </label>
                <textarea
                  className="w-full h-32 px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand"
                  id="description"
                  type="text"
                  name="description"
                  placeholder="Message..."
                  required=""
                  onChange={onChangeDescription}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="relative pt-4">
            <label for="name" className="text-base leading-7 text-blueGray-500">
              City
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="City"
              onChange={onChangeCity}
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="relative pt-4">
            <label for="name" className="text-base leading-7 text-blueGray-500">
              Address
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Address"
              onChange={onChangeAddress}
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="relative pt-4">
            <label for="name" className="text-base leading-7 text-blueGray-500">
              Facilities
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={onChangeFacilities}
              placeholder="List of Facilities"
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="relative pt-4">
            <label for="name" className="text-base leading-7 text-blueGray-500">
              Price
            </label>
            <input
              type="number"
              id="name"
              name="name"
              onChange={onChangePrice}
              placeholder="Estimated Price"
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

export default AddDestination;
