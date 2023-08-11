import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlinestatus from "../utils/useOnlinestatus";
import userContext from "../utils/context";

const Header = () => {
  const [loginbutton, setLoginbutton] = useState("Login");

  const onlinestatus = useOnlinestatus();

  const { LoggedinUser } = useContext(userContext);

  return (
    <div className="flex justify-between bg-pink-100 sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo">
        <img className="w-22" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            : Online Status: {onlinestatus ? " ✅" : " 🔴"}
          </li>

          <li className="px-4">
            {" "}
            <Link to="/"> Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About </Link>
          </li>
          <li className="px-4">
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery"> Grocery </Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login-button"
            onClick={() => {
              loginbutton == "Login"
                ? setLoginbutton("Logout")
                : setLoginbutton("Login");
            }}>
            {loginbutton}
          </button>
          <p className="mx-2 font-bold"> {LoggedinUser}</p>
        </ul>
      </div>
    </div>
  );
};

export default Header;
