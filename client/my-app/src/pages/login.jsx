import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main style={{ padding: "1rem 0" }}>
       <Link to="/tokens">
          <button>Login</button>
       </Link>
    </main>
  );
}