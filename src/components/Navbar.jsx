import search from "../assets/images/search.png";
import cart from "../assets/images/cart.png";

export const Navbar = () => {
    return (
    <nav>
  <div className="conteiner">
    <div className="first-flex">
      <div className="logo">
        <a href="#">Nasscorp</a>
      </div>
      <div className="main-menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="first-icons">
          <a href="#"><img src={search} alt="search" /></a>
          <a href="#"><img src={cart} alt="cart" /></a>
        </div>
      </div>
    </div>
  </div>
</nav>
    );
}

export default Navbar;

