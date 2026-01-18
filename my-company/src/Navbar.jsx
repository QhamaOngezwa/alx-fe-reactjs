import { link } from "react-router-dom";
function Navbar() {
  return (
    <nav style={{ padding: "16px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "16px" }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: "16px" }}>
        About
      </Link>
      <Link to="/services" style={{ marginRight: "16px" }}>
        Services
      </Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
