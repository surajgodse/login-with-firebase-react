import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar() {
  const [un, setUn] = useState(null);

  useEffect(() => {
    const u = localStorage.getItem("un");
    setUn(u);
  }, []);

  return (
    <center>
      <div className="nav">
        {un === null ? (
          <>
            <Link to="/">Login</Link>
            <Link to="/signup">SignUp</Link>
          </>
        ) : (
          <>
            <Link to="/home">Home</Link>
          </>
        )}
      </div>
    </center>
  );
}

export default NavBar;
