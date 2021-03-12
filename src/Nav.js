
import { NavLink } from "react-router-dom";
import './nav.css'
import { useState, useEffect } from 'react'


const Nav = () => {
    
   
  const [openNav, setopenNav] = useState(false)

 

   const handleClick = () => {
    setopenNav(!openNav)
    
   } 

 

    return (
      
           <nav>
               <div className="header__logo">
                   <h3>TRAZ</h3>
               </div>

               <div className='ul-group'>
                   <ul className = {openNav ? "header__ul show" : "header__ul"}>
                        <li className= "nav-item">
                            <NavLink 
                            
                            className='header__links' 
                            to='/'
                            activeClassName="active"
                            onClick={handleClick}
                            
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li className= "nav-item">
                            <NavLink 
                            
                            className='header__links' 
                            to='/Portfolio'
                            activeClassName="active"
                            onClick={handleClick}
                            
                            >
                                PORTFOLIO
                            </NavLink>
                        </li>
                        <li className= "nav-item">
                            <NavLink 
                            
                            className='header__links' 
                            to='/Services'
                            activeClassName="active"
                            onClick={handleClick}
                            
                            >
                                SERVICES
                            </NavLink>
                        </li>     
                        <li className= "nav-item" >
                            <NavLink 
                            
                            className='header__links' 
                            to='/Testimonial'
                            activeClassName="active"
                            onClick={handleClick}
                            
                            >
                                TESTIMONIAL
                            </NavLink>
                        </li>  
                    </ul> 
                </div>

               <div className="header__toggle" onClick={handleClick}>
                    <span  className="toggle__bar">
                        <i className={openNav ? "fas fa-times" : "fas fa-bars"}></i>
                    </span>
                </div>
            </nav>
    
    )
}

export default Nav
