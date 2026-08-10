import { Link } from "react-router";

function Page404() {
  return (
    <div>
      <h1>
        <b>404</b>
      </h1>
      <h1>We cant find whatever you are looking for.</h1>
      <h1>
        <Link to="/">Go back home</Link>
      </h1>
    </div>
  );
}

export default Page404;