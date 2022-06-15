import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";
const Navbar = () => {

    return (
      <>

         <nav class="navbar navbar-expand-lg navbar-light bg-blue">
         <img src="logo.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

        <li class="nav-item active">
        <img class = "logonav" src="./images/logo.png" alt="navlogo" />
          </li>
          <li class="nav-item active">
          <Link to={"/"} class = "nav-link"

                    >
                      Home
                    </Link>
          </li>
          <li class="nav-item active">
          <Link to={"/Contact"} class = "nav-link"

                       >
                        ContactUs
                       </Link>
          </li>
          <li class="nav-item active">
          <Link to={"/Service"} class = "nav-link"

                       >
                         Services
                       </Link>
          </li>
          <li class="nav-item active">
          <Link to={"/About"} class = "nav-link"

                    >
                       Aboutus
                    </Link>
          </li>
          <li class="nav-item active">

          </li>







        </ul>
        <div class="form-inline my-2 my-lg-0 pos">


          <Link to="/SignUp">
          <button class="btn btn-default1 btn-outline-success my-2 my-sm-0 color-me-btn possign " type="submit">Sign Up</button>

          </Link>

          <Link to="/Login">
          <button class="btn btn-default2 btn-outline-success my-2 my-sm-0 " type="submit">Video Call Here</button>

          </Link>




        </div>
      </div>
    </nav>


      </>
    );
  }

export default Navbar;