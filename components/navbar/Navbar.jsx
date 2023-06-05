// // Navbar.js
// import { NavLink } from "react-router-dom";
// // import { ReactComponent as Brand } from "../../assets/icons/logo.svg";
// import "./navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="logo">
//           <div>D<span></div>
//         </div>
//         <div className="nav-elements">
//           <ul>
//             <li>
//               <a
//         href="#"
//         onClick={() => setActiveNav("#")}
//         className={activeNav === "#" ? 'active' : ''}
//       >
//         <AiOutlineHome />
//       </a>
//             </li>
//             <li>
//               <a
//         href="#about"
//         onClick={() => setActiveNav("#about")}
//         className={activeNav === '#about' ? 'active' : ''}
//       >
//         <AiOutlineUser />
//       </a>
//             </li>
//             <li>
//               <a 
//         href="#experience"
//         onClick={() => setActiveNav("#experience")}
//         className={activeNav === "#experience" ? 'active' : ''}
//       >
//         <BiBook />
//       </a>
//             </li>
//             <li>
//               <a 
//         href="#services"
//         onClick={() => setActiveNav("#services")}
//         className={activeNav === "#services" ? 'active' : ''}
//       >
//         <RiServiceLine />
//       </a>
//             </li>
//             <li>
//               <a href="#contact"
//         onClick={() => setActiveNav("#contact")}
//         className={activeNav === "#contact" ? 'active' : ''}
//       >
//         <BiMessageSquareDetail />
//       </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a 
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a 
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navbar;
