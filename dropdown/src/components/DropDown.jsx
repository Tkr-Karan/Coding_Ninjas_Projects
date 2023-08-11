import { useState } from "react";
import "../styles/dropdown.css";

export default function DropDown() {
  let [text, setText] = useState("Default");
  const [isDropdownOpen, setIsDropdownopen] = useState(false);

  const items = [
    "DSA",
    "Java",
    "Web Dev",
    "JavaScript",
    "C++",
    "Python",
    "Front-end",
    "SDE",
    "Coding",
    "Project",
  ];

  const handleClick = (value, id) => {
    setText(value);
    // console.log(`item clicked ${value} ${id}`);
    setIsDropdownopen(false);
  };

  const handleToggleOver = () => {
    console.log("over");
    setIsDropdownopen(true);
    // setIsDropdownopen({ isDropdownOpen: !isDropdownOpen });
  };

  const handleToggleOut = () => {
    setIsDropdownopen(false);
  };
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-[30px] font-bold">Here is my Drop Down</h1>

      <div>
        <div
          className="m-2 border-2 rounded-lg w-[13rem] flex justify-around items-center bg-white"
          onMouseEnter={handleToggleOver}
          onMouseLeave={handleToggleOut}
        >
          <button className=" p-2 w-[60%] text-[20px] font-bold ">
            {text}
          </button>
          <div>
            <i className="fa-solid fa-angle-down w-[20%]"></i>
          </div>
        </div>

        <div>
          <ul
            className={` w-[15rem] text-[20px] bg-white/30 rounded-md overflow-hidden p-2 dropdown-menu ${
              isDropdownOpen ? "active" : ""
            } `}
            onMouseEnter={handleToggleOver}
          >
            {items.map((data, id) => {
              return (
                <li
                  onClick={() => handleClick(data, id)}
                  className=" cursor-pointer hover:bg-gray-300/50 hover:border-2 hover:rounded-lg"
                  key={id}
                >
                  {data}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
