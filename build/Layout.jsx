import React from "react";
import Navbar from "./Navbar/CustomBar";
import Footer from "./Footer/Footer";
// import "../styles/index.scss";

// import layoutStyles from "./layout.module.scss";

const Layout = props => {
  return (
    <div style={{background: 'white'}}>
      <div>
        <Navbar />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
