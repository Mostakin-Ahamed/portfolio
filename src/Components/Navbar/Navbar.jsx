import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>

            <div className="navbar fixed bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to={'/home'}><li><a>Home </a></li></Link>
                            <Link to={'/aboutMe'}><li><a>About Me </a></li></Link>
                            <Link to={'/skills'}><li><a>Skills </a></li></Link>
                            <Link to={'/contact'}><li><a>Contact </a></li></Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Mostakin Ahamed</a>
                </div>
                <div className="navbar-center hidden lg:flex ml-10">
                    <ul className="menu menu-horizontal px-1">
                        <Link to={'/home'}><li><a>Home </a></li></Link>
                        <Link to={'/aboutMe'}><li><a>About </a></li></Link>
                        <Link to={'/skills'}><li><a>Skills </a></li></Link>
                        <Link to={'/contact'}><li><a>Contact </a></li></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;