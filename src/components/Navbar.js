// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import {Outlet, Link } from "react-router-dom";
// export class Navbar extends Component {
//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <Link className="navbar-brand" to="">NewsMonkey</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//         </li>
//           <li className="nav-item">
//           <Link className="nav-link" to="/business">Business</Link>
//         </li>
//           <li className="nav-item">
//           <Link className="nav-link" to="/entertainment">Entertainment</Link>
//         </li>
//           <li className="nav-item">
//           <Link className="nav-link" to="/general">General</Link>
//         </li>
//           <li className="nav-item">
//           <Link className="nav-link" to="/health">Health</Link>
//         </li>
//           <li className="nav-item">
//           <Link className="nav-link" to="/science">Science</Link>
//         </li>
//           <li className="nav-item">
//           <Link className="nav-link" to="/sports">Sports</Link>
//         </li>
//           <li className="nav-item">
//           <Link className="nav-link" to="/technology">Technology</Link>
//         </li>
       
        
//       </ul>
      
//     </div>
//   </div>
// </nav>
// <Outlet/>
//       </div>
//     )
//   }
// }

// export default Navbar

import React, { Component,useEffect } from 'react'
import PropTypes from 'prop-types'
import {Outlet, Link, useLocation  } from "react-router-dom";
const Navbar=(props)=> {
  let location = useLocation();
  useEffect(() => {
      console.log(location.pathname);
    }, [location]);
  
  return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark " style={{backgroundColor:"#042743"}} >
          
          <div className="container-fluid">
            <Link className="navbar-brand" to="">UN</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/business"? "active": ""}`} to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/entertainment"? "active": ""}`} to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/general"? "active": ""}`} to="/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/health"? "active": ""}`} to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/science"? "active": ""}`} to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/sports"? "active": ""}`} to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/technology"? "active": ""}`} to="/technology">Technology</Link>
                </li>
                <li className="nav-item dropdown mx-5">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Country
                  </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" onClick={props.handleinClick}>India in</a></li>
                      {/* <li><a className="dropdown-item" onClick={props.handleruClick}>Russia ru</a></li> */}
                      {/* <li><a className="dropdown-item" onClick={handleusClick}>USA us</a></li>
                      <li><a className="dropdown-item" onClick={handlechClick}>China ch</a></li>
                      <li><a className="dropdown-item" onClick={handlegbClick}>UK gb</a></li>
                      <li><a className="dropdown-item" onClick={handledeClick}>Germany de</a></li>
                      <li><a className="dropdown-item" onClick={handlefrClick}>France fr</a></li>
                      <li><a className="dropdown-item" onClick={handleauClick}>Australia au</a></li> */}
                    </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet/>
      </div>
    )
  }


export default Navbar





