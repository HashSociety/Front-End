import "../App.css";
import {Link} from "react-router-dom";

function Navbar({user}) {

 console.log(user)
  return (
    <nav className="py-6 flex justify-between absolute w-full ">
     
      <div className=" flex items-center">
        <a href="/" className="text-3xl font-bold">
          Mesh<span className="text-primary">Hawk</span>
        </a>
        <ul className="flex gap-7 text-lg font-extralight opacity-80 pl-16">
          <li>About</li>
          <li>How it works?</li>
          <li>Meet the team</li>
          <li>Report an app</li>
        </ul>
      </div>
    {user && <div className="flex bg-slate-800 pl-3 pr-1 py-1 rounded-full items-center gap-2">{user} <button className="px-3 bg-black rounded-full h-full">Logout</button> </div>}
    </nav>
  );
}

export default Navbar;
