import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeFromPastes} from "../Redux/pasteSlice.jsx";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const Paste = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(id) {
    dispatch(removeFromPastes(id));
    console.log("clicked");
  }

  function handleCopy(paste) {
    navigator.clipboard.writeText(paste?.content);
    toast.success("Copied to Clipboard!");
  }

  function handleView(){

  }

  return (
    <div className="">
      <input
        className="rounded-3xl p-4 m-4 min-w-[400px]"
        type="search"
        placeholder="Search Pastes"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col-reverse gap-5">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div
                className="border-2 p-4 rounded-2xl shadow-sm shadow-black mt-1 p-3"
                key={paste?._id}
              >
                <h2>{paste.title}</h2>
                <p>{paste.content}</p>
                <div className="flex flex-row gap-4 place-content-evenly">
                  <button className="p-3 m-1 shadow-sm shadow-black">
                    
                    <NavLink to={`/?pasteId=${paste?._id}`}> Edit </NavLink>
                  </button>
                  <button className="p-3 m-1 shadow-sm shadow-black">
                    <NavLink to={`/pastes/${paste?._id}`} target="_blank"> View </NavLink>
                  </button>
                  <button
                    onClick={() => handleDelete(paste?._id)}
                    className="p-3 m-1 shadow-sm shadow-black"
                  >
                    Delete
                  </button>
                  <button
                    className="p-3 m-1 shadow-sm shadow-black"
                    onClick={() => handleCopy(paste)}
                  >
                    Copy
                  </button>
                  <button className="p-3 m-1 shadow-sm shadow-black">
                    Share
                  </button>
                </div>
                <div>{paste.createdAt}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
