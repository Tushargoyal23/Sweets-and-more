import Modal from '../Modal';
import React, { useState } from 'react'
// import Badge from 'react-bootstrap/Badge';
import { Link, useNavigate } from 'react-router-dom'
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
export default function Navbar() {
  let data = useCart();
  const navigate = useNavigate();
  const [cartView, setCartView] = useState(false);
  const handlelogout = () => {
    localStorage.removeItem("authToken");
    console.log("logout");
    alert("you are logged out");
    navigate("/");
  }
  return (
    <><nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1" to="/">Sweets & More</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
            </li>
            {/* working for thr logic of navber to check wheather the user is logged in or not an display the navbar accordingly  */}
            {(localStorage.getItem("authToken")) ?
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">My Orders</Link>
              </li>
              : ""}
          </ul>
          {/* same for login logout button */}
          {(localStorage.getItem("authToken")) ?
            <div className='d-flex'>
                <Link type="button" className="btn btn-success text-success bg-white position-relative mx-2" onClick={()=> {setCartView(true)}}>
                  Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {data.length}
                  </span>
                </Link>
                {cartView? <Modal onClose={()=> {setCartView(false)}}><Cart></Cart></Modal>:null}
              <Link className="btn bg-white text-success mx-1" onClick={handlelogout}>Logout</Link>
            </div> :
            <div className='d-flex'>
              <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
              <Link className="btn bg-white text-success mx-1" to="/creatuser">Sign Up</Link>
            </div>
          }
        </div>
      </div>
    </nav></>
  )
}
