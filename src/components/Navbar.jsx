import "../App.css";
import {Link} from "react-router-dom";
import kavach from "../assets/kavach.png"
import { HiOutlineLogout } from 'react-icons/hi';
function Navbar({user}) {
  

 console.log(user)
  return (
    <nav className="py-6 flex justify-between items-center">
     
      <div className="flex items-center">
          <img src={kavach} alt="" className="w-[20%]"/>
        <a href="/" className="text-2xl font-bold ">
          MeshHawk
        </a>
      </div>
      <div>
      <ul className="flex gap-7  text-lg font-extralight opacity-80 ">
          <li>Home</li>
          <li>About</li>
          <li>How it works?</li>
          
        </ul>
      </div>
      {user ? (
        <div className="flex rounded-full items-center gap-2">
          {user} <button className="px-3  h-full"><HiOutlineLogout size={30}/></button>{" "}
        </div>
      ) : (
        <Link
          to="/login"
          className="px-4 py-3 bg-black border h-full text-white"
        >
          Login
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
