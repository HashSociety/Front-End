import "../App.css";
import Kavach from "../assets/kavach.png"
import {Link} from "react-router-dom";

function Navbar({user}) {

 console.log(user)
  return (
    <nav className="py-5 flex justify-between h-[10%] items-center absolute w-full ">
     
      <div className="flex items-center">
        <a href="/" className="text-2xl font-bold flex items-center logo">
        <img src={Kavach} alt="" className="w-[15%]"/>
          MeshHawk
        </a>
      </div>
      <div className="">
      <ul className="flex gap-7 text-lg font-extralight opacity-80 ">
          <li>Home</li>
          <li>About</li>
          <li>How it works?</li>
        </ul>
      </div>
      {user ? (
        <div className="flex bg-slate-800 pl-3 pr-1 py-1 rounded-full items-center gap-2">
          {user} <button className="px-3 bg-black rounded-full h-full" onClick={() => {
            localStorage.removeItem("token")
            location.reload(); 
            }}>Logout</button>
        </div>
      ) : (
        <Link to="/login">
          <button className="px-6 py-3 border  bg-black  h-full">Login</button>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
