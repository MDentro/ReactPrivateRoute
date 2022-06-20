import styles from "./styles.module.css";
import { useAuth } from "../components/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Login = () => {
  const { loginStatus, setLoginStatus } = useAuth();
  const { state } = useLocation();
  const previousPath = state?.from ? state.from : "/";
  console.log({ previousPath });

  return loginStatus ? (
    <Navigate to={previousPath} />
  ) : (
    <div className={styles.mainContainer}>
      <h2>Hello you have to Login first</h2>
      <button
        className={styles.links_button}
        onClick={() => setLoginStatus((prev) => !prev)}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
