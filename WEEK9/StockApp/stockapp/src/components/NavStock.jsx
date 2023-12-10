import {Link} from "react-router-dom";

const NavStock = () => {
  return (
    <div className="navStock">

      <Link to="/" className="navitem">
        <div >HOME</div>            
      </Link>

      <Link to="/stocks" className="navitem">
      <div >STOCKS</div>            
      </Link>

      <Link to="/about" className="navitem">
        <div >ABOUT</div>            
      </Link>

     

    </div>
  )
}

export default NavStock