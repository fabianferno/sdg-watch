import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

// import Logo from "../ass";

import { useContract, useSigner } from 'wagmi'
import { ethers } from 'ethers'

export default function Layout(props) {
  const location = useLocation();
  var history = useNavigate();




 

  function Header() {
    return (
      <motion.div
        initial={{ opacity: 0.9, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          style={{
            marginTop: "-30px",
            paddingTop: "60px",
            paddingBottom: "30px",
          }}
          className={`fixed-top shadow px-md-4 px-3 d-flex justify-content-between  align-items-center pl-md-5 pl-4 ${
            location.pathname === "/register" ? "bg-dark" : "bg-black"
          } `}
        >
          <div className="d-flex col-12 align-items-center justify-content-between">
            <Link
              to="/"
              style={{ fontSize: "2em" }}
              className="navbar-brand fw-bold text-primary me-md-5  me-3"
            >
              {/* <img height="50px" src={Logo} alt="" srcset="" /> */}
              <span style={{ marginLeft: "15px" }}>healthify</span>
            </Link>
            {location.pathname === "/" && (
              <div
                // onClick={() => rd()}
                className="p-3 btn btn-outline-primary fw-bold btn-lg "
              >
                Get Started
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div>
      <Header />
      <AnimatePresence>
        <motion.div
          id="page-content"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 20 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 2.5 }}
          style={{ paddingTop: "6vh" }}
          className={
            props.contained ? "container overflow-hidden" : "overflow-hidden"
          }
        >
          {props.children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
