import { useState } from 'react';
import {Home,Blog,Contact,Card} from "./Components/index";

const Navbar = () => {
  const [Menu, setMenu] = useState('Home');
  const [show, setShow] = useState(true);
  return (
    
        <div className="nav">
          <button className='togglebutton' onClick={()=> setShow(!show)}>Menu</button>
          <div className={show ? "navigation-menu expanded" : "navigation-menu"}>
            <ul>
                <li onClick={() => setMenu('Home')}><a href="#">Home</a></li>
                <li onClick={() => setMenu('Contact Us')}><a href="#">Contact Us</a></li>
                <li onClick={() => setMenu('Blog')}><a href="#">Blog</a></li>
                <li onClick={() => setMenu('Card')}><a href="#">Card</a></li>   
            </ul>
             </div>
        <div>
        {Menu === 'Home' && <Home heading='ACHIEVING GROWTH' paragrpah="helloodfsdfdsf" button="click me" />}
        {Menu === 'Contact Us' && <Contact />}
        {Menu === 'Blog' && <Blog></Blog>}
        {Menu === 'Card' && <Card></Card>}
        
        

      </div>
        </div>

    );
}
export default Navbar;