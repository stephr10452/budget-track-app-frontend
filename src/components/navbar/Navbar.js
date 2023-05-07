import React from "react"

import "./Navbar.css"


const Navbar = () => {

    return (
        <div className="navbar">
         <ol className="navItems">

         <li><img src="piggybank.png" alt="piggybank icons"></img>
             Simple Budgeting 
            </li> 
         <li> Transactions</li>
         <li> Budget Goals </li>
         <li> Reports</li>
         <li> Sign Up 
         Sign In 
         </li>
         
         </ol>

        </div>


    )
}

export default  Navbar