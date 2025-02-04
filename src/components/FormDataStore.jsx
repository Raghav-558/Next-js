"use client";
import React, { useState, useEffect } from "react";

const FilterPractice = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("data"));
    if (savedData) {
      setData(savedData);
    }
  }, []);

  const submit = (event) => {
    event.preventDefault();
    const newData = [...data, { name, lastName, email }];
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));

    setName("");
    setLastName("");
    setEmail("");
  };

  const deleteItem = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
  };

  const filteredData = data.filter(
    (item) =>
      item.name.includes(search) ||
      item.lastName.includes(search) ||
      item.email.includes(search)
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 justify-center">
      <form
        onSubmit={submit}
      >
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 rounded-lg p-4 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 rounded-lg p-4 outline-none"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-4 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 ease-linear duration-300 transition-all"
          >
            Submit
          </button>
        </div>
      </form>

      <input
        type="search"
        placeholder="Search"
        className="border border-gray-300 rounded-lg p-4 outline-none mt-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="mt-8 w-full max-w-[900px] mx-auto">
        <h2 className="text-xl text-gray-800 font-semibold mb-4">
          Search Results
        </h2>
        <div className="my-4">
          {search && filteredData.length === 0 ? (
            <p className="text-center text-gray-500">No users found</p>
          ) : (
            <table className="w-full bg-white shadow-md rounded-lg border border-solid border-black">
              <thead>
                <tr>
                  <th className="p-4 text-left text-lg font-semibold text-gray-800 border-b">
                    First Name
                  </th>
                  <th className="p-4 text-left text-lg font-semibold text-gray-800 border-b">
                    Last Name
                  </th>
                  <th className="p-4 text-left text-lg font-semibold text-gray-800 border-b">
                    Email
                  </th>
                  <th className="p-4 text-left text-lg font-semibold text-gray-800 border-b">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, i) => (
                  <tr key={i}>
                    <td className="p-4 text-gray-800">{item.name}</td>
                    <td className="p-4 text-gray-800">{item.lastName}</td>
                    <td className="p-4 text-gray-800">{item.email}</td>
                    <td className="p-4">
                      <button
                        onClick={() => deleteItem(i)}
                        className="bg-red-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 ease-linear duration-300 transition-all"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterPractice;
