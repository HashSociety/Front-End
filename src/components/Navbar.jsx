import "../App.css";


function Navbar() {

  return (
    <nav className="py-6 flex justify-between ">
     
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
      
      <div className="flex gap-2 font-semibold text-base">
          <button className="btn">Login</button>
          <button className="btn bg-primary border-0">Sign up</button>
      </div>
      
    </nav>
  );
}

export default Navbar;
