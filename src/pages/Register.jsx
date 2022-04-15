import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    console.log("first");
    try {
      fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          age: age,
          location: location,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.code === 201) {
            setSuccess(true);
          }
        });
    } catch (error) {
      console.log(error);
    }
    e.preventDefault();
  };

  if (success) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <form className="w-full md:w-1/3 bg-white rounded-lg">
          <div className="flex font-bold justify-center mt-6">
            <img
              className="h-20 w-20"
              src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg"
            />
          </div>
          <h2 className="text-3xl text-center text-gray-700 mb-4">Register</h2>
          <div className="px-12 pb-10">
            <div className="w-full mb-2">
              <div className="flex items-center">
                <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Email"
                  className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
                  onChange={(e) => {
                    e.persist();
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full mb-2">
              <div className="flex items-center">
                <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
                  onChange={(e) => {
                    e.persist();
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            {/* input field */}
            <div className="w-full mb-2">
              <div className="flex items-center">
                <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Age"
                  className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
                  onChange={(e) => {
                    e.persist();
                    setAge(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full mb-2">
              <div className="flex items-center">
                <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Location"
                  className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
                  onChange={(e) => {
                    e.persist();
                    setLocation(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full mb-2">
              <div className="flex items-center">
                <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Name"
                  className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
                  onChange={(e) => {
                    e.persist();
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <button
              className="w-full mb-2 py-2 rounded-full bg-green-600 text-gray-100  focus:outline-none"
              onClick={handleSubmit}
            >
              Register
            </button>
            <Link to={"/login"}>Masuk ke Akun</Link>
          </div>
        </form>
      </div>
    );
  }
};

export default Register;
