import PropTypes from "prop-types";
import NavBar from "./NavBar.jsx";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <div className="container-fluid p-0">{children}</div>
    </div>
  );
}

Layout.prototype = {
  children: PropTypes.node,
};

export default Layout;
