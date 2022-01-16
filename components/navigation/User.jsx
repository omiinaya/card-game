import Link from "next/link";
import Cookies from "js-cookie";
import Router, { useRouter } from "next/router";
/* Components */
// import DarkModeToggle from "../DarkModeToggle";

const User = ({ props }) => {
  const { user } = props;
  const router = useRouter();
  return (
    <p className="account">
      {(user && (
        <a
          href={"#"}
          onClick={() => {
            Cookies.remove("token");
            Router.push({ pathname: "/" });
          }}
        >
          Logout
        </a>
      )) || (
        <>
          {'Have an Account? '}
          <Link href={{ pathname: "/login" }}>
            <a>Login</a>
          </Link>
          {' or '}
          <Link href={{ pathname: "/register" }}>
            <a>Register</a>
          </Link>
        </>
      )}
    </p>
  );
};

export default User;
