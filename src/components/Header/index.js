import { Link } from "react-router-dom";
import styles from "./styles.module.css";
// import { useAuth } from "../../AuthProvider";
import { useAuth } from "../AuthProvider";

const Header = () => {
  const { loginStatus, setLoginStatus } = useAuth();

  return (
    <div className={styles.mainContainer}>
      <Link to="/" className={styles.links_home}>
        Home
      </Link>
      <div className={styles.linksContainer}>
        <Link to="/privateroute1" className={styles.links}>
          PrivateRoute 1
        </Link>
        <Link to="/privateroute2" className={styles.links}>
          PrivateRoute 2
        </Link>

        <button
          to="/"
          className={styles.links_button}
          onClick={() => setLoginStatus((prev) => !prev)}
        >
          {loginStatus ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Header;
